# Aula-17-backend-autenticacao

Esse repositório é construído por cima do backend presente na Aula-15-Backend-Crud: [Repo-Aula-15](https://github.com/philcisco-classroom/aula-15-crud-backend-filmes).
O objetivo é adicionar as seguintes funcionalidades:

- Criação e Login de Usuário
- Logout
- Rotas de autenticação
- Geração de Token com JWT que será inserido em cookie HttpOnly (só podem ser manipulados no servidor)
- Modificação para buscar apenas filmes pertencentes a um usuário específico.
  - Não é pré-requisito do projeto final, mas muitos colegas gostam de entender o funcionamento nesse formato então já deixo disponivel.
- Foi feita uma modificação no schemas do prisma para permitir a relação entre usuários e filmes. Para o projeto final não é necessário, mas como é de interesse da maioria da turma deixo o exemplo 

# Bibliotecas

Para o bom funcionamento do backend com autenticação precisamos instalar as seguintes bibliotecas (caso você apenas vá clonar esse projeto, elas já estão no package.json, basta executar $ npm i)

     - $ npm i bcrypt - Usada para fazer o hash da senha antes de salvar no banco de dados)
     - $ npm i jsonwebtoken - Usada para gerar o Token (assinatura digital) do usuário. Com esse Token entederemos que o usuário está autenticado e poderá acessar os recursos em /filmes
     - $ npm i -D @types/bcrypt @types/jsonwebtoken - Usada para instalar os tipos Typescript de bcrypt e jwt
     - $ npm i cookie-parser - Permite a manipulação de cookies do lado do servidor
     - $ npm i -D @types/cookie-parser - Tipos Typescript do cookie-parser

bcrypt - Função hash para a senha. Não devemos armazenar senhas em texto claro
JWT - Para autenticação e geração de tokens.

# Criar .env

- NEXT_PUBLIC_API_URL="http://localhost:3001" (Aula 16)





