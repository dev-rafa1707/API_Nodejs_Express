# API Node.js Express
API rest Backend server using Node.js and Express

### Status do Projeto:
Em construção

### Features
CRUD

* Criar novo registro de produto (Create)

* Consultar os produtos cadastrados (Read all)

* Consulta produto por codigo (Read by id)

* Edita produto cadastrado (Update by id)

* Exclui produto cadastrado (Delete)


### Pré-requisitos 
1. Express

#### Modo devDependencies
3. Nodemon

#### VS Code extensions
4. REST Client v0.25.1
(ou você pode usar Postman ou outra extensão para reazlizar o teste das rotas e as respostas)

### Como rodar a aplicação
$ git clone <git@github.com:dev-rafa1707/API_Nodejs_Express.git>

* Acesse a pasta do projeto no terminal/cmd indicando o caminho da pasta
$ cd <path>

* Instale as dependências
$ npm install

* Execute a aplicação 
$ npm start servidor.js
* O servidor inciará na porta:3000

### Para testar o projeto
* Criar novo registro de produto
Insere novo registro de produto na lista a partir de interface frontend
http://localhost:3000/cadastro


Para testar essas funcionalidades você deverá utilizar a extensão do VS Code REST Client ou Postman ou outra funcinalidade equivalente

* Consultar os produtos cadastrados
Retorna a lista de todos os produtos cadastrados
http://localhost:3000/

* Consulta produto por codigo
Retorna o produto de acordo com o codigo passado na URL (apenas 1,2,3)
GET http://localhost:3000/:id

* Edita produto cadastrado
Edita o produto de acordo com o codigo passado na URL (apenas 1,2,3)
PUT http://localhost:3000/:id


* Exclui produto cadastrado
Deleta o produto de acordo com o codigo passado na URL (apenas 1,2,3)
DELETE http://localhost:3000/:id








