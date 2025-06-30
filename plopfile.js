#!/usr/bin/env node
const path = require('path');
const { NodePlop } = require('plop');
const inquirer = require('inquirer');
const fs = require('fs');

(async () => {
  const cwd = process.cwd();
  const plop = NodePlop(path.join(__dirname, 'plopfile-base.js'));
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
    const filePath = path.relative(cwd, change.path);
    console.log(`✔ ${filePath}`);
  });

  if (failures.length > 0) {
    console.error('\n❌ Falhas:');
    failures.forEach(f => console.error(f.error || f.message));
    process.exit(1);
  }
})();
