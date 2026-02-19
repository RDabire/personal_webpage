import { existsSync } from 'fs';
import { mkdir, cp } from 'fs/promises';
import { join } from 'path';

async function main() {
  const projectRoot = process.cwd();
  const staticOutputDir = join(projectRoot, '.vercel', 'output', 'static');
  const faviconsSource = join(projectRoot, 'public', 'favicons');
  const faviconsDestination = join(staticOutputDir, 'favicons');

  if (!existsSync(faviconsSource)) {
    console.warn(
      '[ensure-vercel-static] Skipping copy; public/favicons not found.'
    );
    return;
  }

  await mkdir(staticOutputDir, { recursive: true });

  await cp(faviconsSource, faviconsDestination, {
    force: true,
    recursive: true,
  });
}

main().catch((error) => {
  console.error(
    '[ensure-vercel-static] Failed to prepare favicons directory.',
    error
  );
  process.exit(1);
});
