import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const ignoreFileContents = `_worker.js\n_routes.json\n`;

async function main() {
  if (!existsSync(distDir)) {
    console.warn(
      '[post-build-cloudflare] dist directory not found; skipping .assetsignore creation.'
    );
    return;
  }

  await mkdir(distDir, { recursive: true });
  const ignoreFilePath = join(distDir, '.assetsignore');
  await writeFile(ignoreFilePath, ignoreFileContents, 'utf8');
}

main().catch((error) => {
  console.error(
    '[post-build-cloudflare] Failed to write .assetsignore file.',
    error
  );
  process.exit(1);
});
