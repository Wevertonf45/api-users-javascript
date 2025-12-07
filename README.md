<h1>api-users-javascript</h1>

<p>
  Uma API RESTful desenvolvida para gerenciamento de usuários, permitindo que administradores autenticados realizem operações completas de CRUD. 
  O sistema utiliza práticas modernas de segurança, autenticação e arquitetura para garantir robustez e escalabilidade.
</p>

<h2>🚀 Funcionalidades</h2>

<h3>🔐 Autenticação via JWT</h3>
<ul>
  <li>Geração e validação de tokens.</li>
  <li>Sessões protegidas e seguras.</li>
</ul>

<h3>👥 Gerenciamento de Usuários</h3>
<ul>
  <li>Cadastro de novos usuários.</li>
  <li>Atualização de dados.</li>
  <li>Exclusão de usuários.</li>
  <li>Listagem completa de usuários.</li>
</ul>

<h3>🛡️ Controle de Acesso</h3>
<ul>
  <li>Middleware dedicado que restringe ações sensíveis.</li>
  <li>Apenas administradores podem criar, atualizar ou remover usuários.</li>
</ul>

<h3>🔒 Segurança</h3>
<ul>
  <li>Senhas armazenadas de forma segura utilizando <strong>bcrypt</strong>.</li>
  <li>Rotas críticas protegidas por autenticação e autorização.</li>
</ul>

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MySQL / MySQL2</li>
  <li>JWT (JSON Web Token)</li>
  <li>bcrypt</li>
  <li>Dotenv</li>
  <li>Arquitetura: <strong>Controller → Service → Repository</strong></li>
</ul>

<h2>📦 Instalação</h2>
<pre>
<code>
#Clone o repositório
git clone https://github.com/Wevertonf45/api-users-javascript.git

# Acesse o diretório
cd api-users-javascript

# Instale as dependências
npm install
</code>
</pre>

<h2>🔧 Configuração</h2>
<p>Crie um arquivo <strong>.env</strong> na raiz do projeto contendo:</p>

<pre>
<code>
PORT=9000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

JWT_SECRET=seu_token_secreto
</code>
</pre>

<h2>▶️ Executando o Projeto</h2>
<pre>
<code>
npm run dev
</code>
</pre>

<p>O servidor iniciará na porta definida no <code>.env</code>.</p>

<h2>🗂️ Estrutura do Projeto</h2>

<pre>
<code>
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── configs/
 ├── middlewares/
 ├── utils/
 └── server.js
</code>
</pre>

<h2>🔒 Segurança</h2>
<ul>
  <li>Tokens JWT protegendo rotas sensíveis.</li>
  <li>Hash de senhas com <strong>bcrypt</strong> antes de serem salvas no banco.</li>
  <li>Middleware de autorização garantindo privilégios apenas para administradores.</li>
  <li>Validação de entradas e tratamento de erros centralizado.</li>
</ul>

<h2>📚 Boas Práticas Adotadas</h2>
<ul>
  <li>Separação de responsabilidades (Controller, Service, Repository).</li>
  <li>Código modular e escalável.</li>
  <li>Padronização de respostas.</li>
  <li>Aplicação de middlewares para autenticação e autorização.</li>
  <li>Tratamento de erros com status codes adequados.</li>
</ul>

<h2>📄 Licença</h2>
<p>Este projeto está sob a licença <strong>MIT</strong>.</p>
