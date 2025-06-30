const { pascalCase, camelCase } = require('change-case');
const pluralize = require('pluralize');
const path = require('path');

const lowerCase = (text) => text.toLowerCase();

module.exports = function (plop) {
  plop.setDefaultInclude({ generators: true });
  plop.setPlopfilePath(process.cwd());

  // Helpers para uso nos caminhos e nomes
  plop.setHelper('pluralLowerCase', (text) => lowerCase(pluralize.plural(text)));
  plop.setHelper('lowerCase', (text) => lowerCase(text));

  plop.setGenerator('repository', {
    description: 'Gera módulo, service e repositório com BaseRepository e GenericRepository',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome da entidade (ex: user):',
      },
    ],
    actions: function () {
      return [
        // Entidade
        {
          type: 'add',
          path: 'src/{{pluralLowerCase name}}/{{lowerCase name}}.entity.ts',
          templateFile: path.join(__dirname, 'plop-templates/entity.hbs'),
        },
        // Repositório específico
        {
          type: 'add',
          path: 'src/{{pluralLowerCase name}}/{{lowerCase name}}.repository.ts',
          templateFile: path.join(__dirname, 'plop-templates/repository.hbs'),
        },
        // Service
        {
          type: 'add',
          path: 'src/{{pluralLowerCase name}}/{{lowerCase name}}.service.ts',
          templateFile: path.join(__dirname, 'plop-templates/service.hbs'),
        },
        // Module
        {
          type: 'add',
          path: 'src/{{pluralLowerCase name}}/{{lowerCase name}}.module.ts',
          templateFile: path.join(__dirname, 'plop-templates/module.hbs'),
        },

        // Adicionais genéricos
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
        {
          type: 'add',
          path: 'src/common/entities/base.entity.ts',
          templateFile: path.join(__dirname, 'plop-templates/base.entity.hbs'),
          skipIfExists: true,
        },
      ];
    },
  });
};
