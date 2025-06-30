#!/usr/bin/env node

const inquirer = require('inquirer');
const path = require('path');
const nodePlop = require('plop/lib/node-plop');
const process = require('process');

(async () => {
  const cwd = process.cwd();
  const plop = await nodePlop(path.join(__dirname, 'plopfile-base.js'));
  const generator = plop.getGenerator('repository');

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Nome da entidade (ex: user):',
    },
  ]);

  const { changes, failures } = await generator.runActions(answers);

  console.log('\n📁 Arquivos gerados:');
  changes.forEach(change => {
    console.log(`✔ ${path.relative(cwd, change.path)}`);
  });

  if (failures.length > 0) {
    console.error('\n❌ Falhas:');
    failures.forEach(f => console.error(f.error || f.message));
    process.exit(1);
  }
})();
