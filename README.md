# Aula-17-backend-autenticacao

## Atividade N2 - UPDATE e DELETE de filmes

Esta atividade é construída por cima deste repositório (Aula-17-backend-autenticacao). O objetivo é implementar, exclusivamente, as funcionalidades de **UPDATE** e **DELETE** de filmes, mantendo a autenticação já existente:

- Rota `PUT /filmes/:id` para atualizar um filme do usuário autenticado
- Rota `DELETE /filmes/:id` para excluir um filme do usuário autenticado
- As duas rotas ficam protegidas pelo `auth.middleware.ts` e só permitem alterar/excluir filmes que pertençam ao próprio usuário (`userId`)

---
```

# Criar .env

- DATABASE_URL="file:./app.bd (da Aula-15)
- JWT_SECRET="gerar um token".

Uma forma comum para gerar o JWT_SECRET é usar o próprio node. Com a seguinte sintaxe no terminal:

  - $ node
  - $ require('crypto').randomBytes(64).toString('hex')
Em seguida copiar o resultado e colocar como valor de JWT_SECRET
  - $ .exit (para fechar o terminal node)




