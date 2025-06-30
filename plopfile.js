#!/usr/bin/env node
const { pascalCase, camelCase } = require('change-case');

const plop = require('plop');
const path = require('path');
const plopfile = plop(path.resolve(__dirname, 'plopfile.js'));

plopfile.setGenerator('repository', {
  description: 'Gera módulo, service e repositório com BaseRepository e GenericRepository',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Nome da entidade (ex: user):',
    },
  ],
  actions: function (data) {
    return [
      {
        type: 'add',
        path: 'src/{{lowerCase name}}/{{lowerCase name}}.entity.ts',
        templateFile: 'plop-templates/entity.hbs',
      },
      {
        type: 'add',
        path: 'src/{{lowerCase name}}/{{lowerCase name}}.repository.ts',
        templateFile: 'plop-templates/repository.hbs',
      },
      {
        type: 'add',
        path: 'src/{{lowerCase name}}/{{lowerCase name}}.service.ts',
        templateFile: 'plop-templates/service.hbs',
      },
      {
        type: 'add',
        path: 'src/{{lowerCase name}}/{{lowerCase name}}.module.ts',
        templateFile: 'plop-templates/module.hbs',
      },
    ];
  },
});

require('plop/lib/cli')();
