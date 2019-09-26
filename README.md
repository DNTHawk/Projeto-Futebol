## Sumário
<!--ts-->
* [Introdução](#Introdução)
* [Usuário](#1-Usuário)
  * [POST (Cadastrar Usuário)](#11-POST-Cadastrar-Usuário)
  * [POST (Autenticar Usuário)](#12-POST-Autenticar-Usuário)
  * [GET (Consultar todos os Usuário)](#13-GET-Selecionar-todos-os-Usuário)
  * [GET (Consultar Usuário pelo id)](#14-GET-Selecionar-Usuário-pelo-ID)
  * [DELETE (Deletar Usuário pelo id)](#15-DELETE-Deletar-Usuário-pelo-ID)
* [Estadio](#2-Estadio)
    * [POST (Cadastrar Estadio)](#21-POST-Cadastrar-Estadio)
    * [GET (Consultar todos os Estadio)](#22-GET-Consultar-todos-os-Estadio)
    * [GET (Consultar Estadio pelo ID)](#23-GET-Consultar-Estadio-pelo-ID)
    * [DELETE (Deletar Estadio pelo ID)](#24-DELETE-Deletar-Estadio-pelo-ID)

Introdução 
========
> Seguem abaixo informações de como fazer requisições no backend da cleanpool.  
Ex: 
```sh
http://localhost:3000/usuario/cadastrar
```
ou
```sh
http://UrlDoServidor:3000/usuario/cadastrar
```
> Obs: Todas as requisições precisam de token.
## Rotas
## 1 Usuário
#### 1.1 POST Cadastrar Usuário
Rota
```
/usuario/cadastrar
```
Json
```
{
	"nome" : "Felipe Rodrigo",
	"email" : "lipedigo@hotmail.com",
	"password" : "123Mudar"
}
```

#### 1.2 POST Autenticar Usuário
Rota
```
/usuario/autenticar
```
Json
```
{
	"email" : "lipedigo@hotmail.com",
	"password" : "123Mudar"
}
```

#### 1.3 GET Selecionar todos os Usuário
Rota
```
/usuario/selectAll
```
#### 1.4 GET Selecionar Usuário pelo ID
Rota
```
/usuario/selectById/5d8d10137da89733ce923e9c
```

#### 1.5 DELETE Deletar Usuário pelo ID
Rota
```
/usuario/deleteById/5d8d10137da89733ce923e9c
```

## 2 Estadio
#### 2.1 POST Cadastrar Estadio
Rota
```
/estadio/cadastrar
```
Json
```
{
	"nome" : "Allianz Parque",
	"cidade" : "São Paulo",
	"estado" : "São Paulo"
}
```
#### 2.2 GET Consultar todos os Estadio
Rota
```
/estadio/selectAll
```
#### 2.3 GET Consultar Estadio pelo ID
Rota
```
/estadio/selectById/5d8d1eca0f95a938908b8497
```
#### 2.4 DELETE Deletar Estadio pelo ID
Rota
```
/estadio/deleteById/5d8d20f3ab176938fb6d750e
```