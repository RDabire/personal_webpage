import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const candidates = [process.env.ASTRO_NODE_BINARY, 'node'].filter(Boolean);

// Windows ARM64 can run x64 Node through emulation. Reuse the portable
// runtime installed for this project without requiring a terminal PATH change.
if (process.platform === 'win32') {
  const runtimeRoot = join(homedir(), '.bun-x64');
  if (existsSync(runtimeRoot)) {
    const installs = readdirSync(runtimeRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() && /^node-v[\d.]+-win-x64$/.test(entry.name)
      )
      .sort((a, b) =>
        b.name.localeCompare(a.name, undefined, { numeric: true })
      );
    for (const install of installs) {
      candidates.push(join(runtimeRoot, install.name, 'node.exe'));
    }
  }
}
candidates.push(process.execPath);

const runtime = candidates.find((candidate) => {
  const result = spawnSync(candidate, ['-p', 'process.arch'], {
    encoding: 'utf8',
    windowsHide: true,
  });
  return (
    result.status === 0 &&
    (process.platform !== 'win32' || result.stdout.trim() === 'x64')
  );
});

if (!runtime) {
  console.error(
    'Cloudflare requires a Windows x64 runtime. Install x64 Node.js or set ASTRO_NODE_BINARY to its node.exe path.'
  );
  process.exit(1);
}

console.log(`[dev] Using runtime: ${runtime}`);
const child = spawn(
  runtime,
  [
    join(projectRoot, 'node_modules', 'astro', 'astro.js'),
    'dev',
    '--host',
    ...process.argv.slice(2),
  ],
  {
    cwd: projectRoot,
    stdio: 'inherit',
    windowsHide: true,
  }
);
child.on('error', (error) => {
  console.error(`[dev] Could not start Astro: ${error.message}`);
  process.exitCode = 1;
});
child.on('exit', (code) => {
  process.exitCode = code ?? 1;
});
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}
