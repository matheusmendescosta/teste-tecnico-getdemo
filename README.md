

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/matheusmendescosta)](https://github.com/matheusmendescosta)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheusmendescosta/)](https://www.linkedin.com/in/matheusmendescosta/)

# Teste para Desenvolvedor Full Stack - Get Demo

## Montando o ambiente de desenvolvimento

### Backend
Clone o projeto

`git clone https://github.com/matheusmendescosta/teste-tecnico-getdemo`

Vamos começar com o backend

Acesse a pasta do projeto

`cd teste-tecnico-getdemo/`

Acesse a pasta do backend

`cd teste-tecnico-backend`

#### Agora vamos iniciar o postgres utilizando o docker composer depois instalar as dependencias

Subindo o container com postgres e pgAdmin

`docker-compose up`

Agora acesse o pgAdmin para criar o banco de dados

`localhost:8080`

Faça login

email `user@localhost.com`

password `password`

Agora crie um database com o nome

`get_demo_database`

Instalando dependencias

`yarn`

Agora rode o seed

`yarn run seed`

Agora rode o servidor 

`yarn start`

OBS: Certifique-se de ter docker e o node instalado na sua maquina

Se tudo estiver correto você podera observar a seguinte mensagem em seu terminal

```
Express App Listening on Port 3001
```


### Frontend

Acesse a pasta teste-tecnico-frontend

`cd teste-tecnico-frontend`

Na pasta teste-tecnico-frontend instale as dependencias

Instalando as dependencias

`npm i`

Agora basta rodar o projeto com o comando 

`npm run dev`

Se tudo ocorrer bem você verá a mensagem 

```
▲ Next.js 14.2.3
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 4.9s
```

Acesse o link informado pelo frontend http://localhost:3000

Agora é só clicar em Demos no sidebar, para ter acesso a suas demos