# create-nest-repo-module

CLI para gerar estrutura de módulo, repositório e service com `BaseRepository` e `GenericRepository` em projetos NestJS.

## 🚀 Uso rápido

```bash
npx --yes github:seu-usuario/create-nest-repo-module user
```

## 📁 Estrutura gerada

```
src/user/
├── user.entity.ts
├── user.repository.ts
├── user.service.ts
└── user.module.ts
```

## 📦 Requisitos

- Node.js
- Projeto NestJS configurado

## 🧱 Base

- `GenericRepository<T>`
- `BaseRepository<T>`
- Token `getGenericRepositoryToken(Entity)`

MIT License.
