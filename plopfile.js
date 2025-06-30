#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const userCwd = process.cwd();

const plopfile = path.join(__dirname, 'plopfile-base.js');

const plopProcess = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['plop', '--plopfile', plopfile],
  {
    cwd: userCwd,     
    stdio: 'inherit', 
  }
);

plopProcess.on('exit', (code) => {
  process.exit(code);
});
