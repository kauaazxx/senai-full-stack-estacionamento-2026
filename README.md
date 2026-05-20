# 🚗 Estacionamento KLS

Sistema web para gerenciamento de estacionamento, permitindo o cadastro de veículos, controle de estadias e cálculo automático de permanência e valor total.

## 📌 Sobre o Projeto

O **Estacionamento KLS** foi desenvolvido para facilitar o gerenciamento de veículos e estadias em um estacionamento.

O sistema permite cadastrar veículos, registrar entradas e saídas, calcular automaticamente os valores da estadia e gerenciar todas as informações por meio de uma interface moderna, limpa e intuitiva.


## ⚙️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### Front-End
- HTML5
- CSS3
- JavaScript

### Back-End
- Node.js
- Express.js

### Banco de Dados
- Prisma ORM
- MySQL
- XAMPP


### 🚘 Gerenciamento de Veículos
- Cadastro de veículos
- Edição de veículos
- Exclusão de veículos
- Listagem de veículos cadastrados
- Validação de campos obrigatórios
- Bloqueio de placas duplicadas

### 🅿️ Gerenciamento de Estadias
- Registro de entrada do veículo
- Registro de saída do veículo
- Seleção de veículo cadastrado
- Cálculo automático do valor da estadia
- Registro automático de data e horário
- Alteração automática de status da estadia


## 🗂️ Estrutura do Projeto

├── api/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   │   └── prisma.js
│   └── server.js
│
├── prisma/
│   └── schema.prisma
│
├── web/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .env
└── README.md

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

git clone URL_DO_REPOSITORIO

### 2. Instalar dependências

npm install

### 3. Configurar banco de dados

Configure o arquivo `.env` com as credenciais do MySQL.

Exemplo:

DATABASE_URL="mysql://usuario:senha@localhost:3306/estacionamento"

### 4. Gerar Prisma Client

npx prisma generate

### 5. Executar migrations

npx prisma migrate dev

### 6. Iniciar o servidor

npm run dev


## 📊 Diagramas UML

### Diagrama de Casos de Uso

Insira aqui a imagem do diagrama:

![Diagrama de Casos de Uso](./docs/diagrama-casos-de-uso.png)


### Diagrama de Atividades — Cadastro de Veículo

![Diagrama de Atividades](./docs/diagrama-atividade-veiculo.png)


### Diagrama de Atividades — Registro de Estadia

![Diagrama de Atividades](./docs/diagrama-estadia.png)


## 🧠 Regras de Negócio

- Não é permitido cadastrar placas duplicadas.
- O sistema realiza validação de campos obrigatórios.
- A data e horário são obtidos automaticamente pelo sistema.
- O valor total da estadia é calculado automaticamente no momento da saída.


## 👨‍💻 Desenvolvedor

Projeto desenvolvido por **Kauã Lucio de Souza** 
