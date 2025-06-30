const { pascalCase, camelCase, lowerCase } = require('change-case');
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
        // Entidade
        {
          type: 'add',
          path: 'src/{{lowerCase name}}/{{lowerCase name}}.entity.ts',
          templateFile: path.join(__dirname, 'plop-templates/entity.hbs'),
        },
        // Repositório específico
        {
          type: 'add',
          path: 'src/{{lowerCase name}}/{{lowerCase name}}.repository.ts',
          templateFile: path.join(__dirname, 'plop-templates/repository.hbs'),
        },
        // Service
        {
          type: 'add',
          path: 'src/{{lowerCase name}}/{{lowerCase name}}.service.ts',
          templateFile: path.join(__dirname, 'plop-templates/service.hbs'),
        },
        // Module
        {
          type: 'add',
          path: 'src/{{lowerCase name}}/{{lowerCase name}}.module.ts',
          templateFile: path.join(__dirname, 'plop-templates/module.hbs'),
        },

        // Adicionais genéricos (somente se não existirem ainda)
        {
          type: 'add',
          path: 'src/common/dto/pagination-query.dto.ts',
          templateFile: path.join(__dirname, 'plop-templates/pagination-query.dto.hbs'),
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/common/interfaces/paginated-result.interface.ts',
          templateFile: path.join(__dirname, 'plop-templates/paginated-result.interface.hbs'),
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/common/interfaces/generic-repository.interface.ts',
          templateFile: path.join(__dirname, 'plop-templates/generic-repository.interface.hbs'),
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/common/interfaces/repository-token.ts',
          templateFile: path.join(__dirname, 'plop-templates/repository-token.hbs'),
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/common/repositories/base.repository.ts',
          templateFile: path.join(__dirname, 'plop-templates/base.repository.hbs'),
          skipIfExists: true,
        },
      ];
    },
  });
};
