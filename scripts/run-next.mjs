#!/usr/bin/env node
/** OS-neutral Next.js launcher; respects dynamic PORT for local/AI Studio runtime. */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
const command = process.argv[2];
if (!['dev', 'build', 'start'].includes(command)) {
  console.error('Usage: node scripts/run-next.mjs dev|build|start'); process.exit(2);
}
const executable = 'node_modules/next/dist/bin/next';
if (!existsSync(executable)) {
  console.error('Next.js not installed. This command requires npm ci before it can run.');
  process.exit(2);
}
const nodeOptions = process.env.NODE_OPTIONS || '';
const env = {
  ...process.env,
  NODE_OPTIONS: nodeOptions.includes('--max-old-space-size')
    ? nodeOptions : `${nodeOptions} --max-old-space-size=1280`.trim(),
};
const args = [executable, command];
if (command === 'dev' || command === 'start') {
  args.push('-H', '0.0.0.0');
  // Next.js honors PORT via environment. Explicit -p is more robust on host platforms.
  if (env.PORT) {
    const port=Number(env.PORT);
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      console.error(`Invalid PORT: ${env.PORT}`); process.exit(2);
    }
    args.push('-p', String(port));
  }
}
const child = spawn(process.execPath, args, { stdio: 'inherit', env });
child.on('error', err => { console.error(err); process.exitCode=1; });
child.on('exit', (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
for (const signal of ['SIGINT','SIGTERM']) {
  process.on(signal, () => { if (child.pid) child.kill(signal); });
}
