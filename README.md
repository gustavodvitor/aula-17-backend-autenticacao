# aula-17-backend-autenticacao

Novas libs:

bcrypt - Função hash para a senha. Não devemos armazenar senhas em texto claro
JWT - Para autenticação e geração de tokens.

npm i bcrypt jsonwebtoken
npm i -D @types/bcrypt @types/jsonwebtoken

Rotas criadas nesse projeto em relação a Aula-15-Backend-crud

POST /auth/registro (criar usuário)
POST /auth/login  (login usuário)

.env
DATABASE_URL="file:./app.bd (da Aula-15)
JWT_SECRET="gerar um token". Uma forma comum é usar o próprio node. Com a seguinte sintaxe no terminal:
$ node
$ require('crypto').randomBytes(64).toString('hex')
Em seguida copiar o resultado e colocar como valor de JWT_SECRET
$ .exit (para fechar o terminal node)




