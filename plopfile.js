#!/usr/bin/env node
const { pascalCase, camelCase } = require('change-case');

module.exports = function (plop) {
  plop.setGenerator('repository', {
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
};
