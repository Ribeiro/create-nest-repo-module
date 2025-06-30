#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const plopProcess = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['plop', '--plopfile', path.join(__dirname, 'plopfile-base.js')],
  { stdio: 'inherit' }
);

plopProcess.on('exit', (code) => {
  process.exit(code);
});
