const { pascalCase, camelCase } = require('change-case');
const path = require('path');

module.exports = function (plop) {
  plop.setDefaultInclude({ generators: true });
  plop.setPlopfilePath(process.cwd());

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
          templateFile: path.join(__dirname, 'plop-templates/entity.hbs'),
        },
        {
          type: 'add',
          path: 'src/{{lowerCase name}}/{{lowerCase name}}.repository.ts',
          templateFile: path.join(__dirname, 'plop-templates/repository.hbs'),
        },
        {
          type: 'add',
          path: 'src/{{lowerCase name}}/{{lowerCase name}}.service.ts',
          templateFile: path.join(__dirname, 'plop-templates/service.hbs'),
        },
        {
          type: 'add',
          path: 'src/{{lowerCase name}}/{{lowerCase name}}.module.ts',
          templateFile: path.join(__dirname, 'plop-templates/module.hbs'),
        },
      ];
    },
  });
  
};
