# create-nest-repo-module

CLI para gerar estrutura de módulo, repositório e service com `BaseRepository` e `GenericRepository` em projetos NestJS.

## 🚀 Uso rápido

```bash
npx --yes github:seu-usuario/create-nest-repo-module user
```

## 📁 Estrutura gerada

```
src/
├── common/                    # Componentes reutilizáveis
│   ├── dto/
│   │   └── pagination-query.dto.ts
│   ├── entities/
│   │   └── base.entity.ts
│   ├── interfaces/
│   │   ├── generic-repository.interface.ts
│   │   ├── paginated-result.interface.ts
│   │   └── repository-token.ts
│   └── repositories/
│       └── base.repository.ts
│
├── users/                     # Módulo de domínio "Users"
│   ├── user.entity.ts
│   ├── user.module.ts
│   ├── user.repository.ts
│   └── user.service.ts

```

## 📦 Requisitos

- Node.js
- Projeto NestJS configurado

## 🧱 Base

- `GenericRepository<T>`
- `BaseRepository<T>`
- Token `getGenericRepositoryToken(Entity)`

## 📚 Convenções

 - Pastas de módulo são sempre nomeadas no plural (users, products, etc.).
 - Arquivos seguem o nome da entidade no singular (user.entity.ts, user.service.ts).
 - O diretório common/ centraliza recursos reutilizáveis, como:
 - DTOs genéricos (pagination-query.dto.ts)
 - Interfaces (GenericRepository, PaginatedResult)
 - Implementações base (BaseRepository)
 - Entidades abstratas (BaseEntity)


MIT License.
