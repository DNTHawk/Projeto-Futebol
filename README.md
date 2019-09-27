## Sumário
<!--ts-->
* [Introdução](#Introdução)
* [Usuário](#1-Usuário)
  * [POST (Cadastrar Usuário)](#11-POST-Cadastrar-Usuário)
  * [POST (Autenticar Usuário)](#12-POST-Autenticar-Usuário)
  * [GET (Consultar todos os Usuário)](#13-GET-Selecionar-todos-os-Usuário)
  * [GET (Consultar Usuário pelo id)](#14-GET-Selecionar-Usuário-pelo-ID)
  * [DELETE (Deletar Usuário pelo id)](#15-DELETE-Deletar-Usuário-pelo-ID)
* [Estádio](#2-Estadio)
    * [POST (Cadastrar Estádio)](#21-POST-Cadastrar-Estádio)
    * [GET (Consultar todos os Estádio)](#22-GET-Consultar-todos-os-Estádio)
    * [GET (Consultar Estádio pelo ID)](#23-GET-Consultar-Estádio-pelo-ID)
    * [DELETE (Deletar Estádio pelo ID)](#24-DELETE-Deletar-Estádio-pelo-ID)
* [Time](#3-Time)
    * [POST (Cadastrar Time)](#31-POST-Cadastrar-Time)
    * [GET (Consultar todos os Time)](#32-GET-Consultar-todos-os-Times)
    * [GET (Consultar Time pelo ID)](#33-GET-Consultar-Time-pelo-ID)
    * [DELETE (Deletar Time pelo ID)](#34-DELETE-Deletar-Time-pelo-ID)

Introdução 
========
> Seguem abaixo informações de como fazer requisições no backend.  
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
Retorno Json
```
{
    "usuarios": [
        {
            "_id": "5d8d10137da89733ce923e9c",
            "nome": "Felipe Rodrigo",
            "email": "lipedigo@hotmail.com",
            "createdAt": "2019-09-26T19:22:59.250Z",
            "__v": 0
        }
    ]
}
```

#### 1.4 GET Selecionar Usuário pelo ID
Rota
```
/usuario/selectById/5d8d10137da89733ce923e9c
```
Retorno Json
```
{
    "usuario": [
        {
            "_id": "5d8d10137da89733ce923e9c",
            "nome": "Felipe Rodrigo",
            "email": "lipedigo@hotmail.com",
            "createdAt": "2019-09-26T19:22:59.250Z",
            "__v": 0
        }
    ]
}
```

#### 1.5 DELETE Deletar Usuário pelo ID
Rota
```
/usuario/deleteById/5d8d10137da89733ce923e9c
```

## 2 Estádio
#### 2.1 POST Cadastrar Estádio
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
#### 2.2 GET Consultar todos os Estádio
Rota
```
/estadio/selectAll
```
Retorno Json
```
{
    "estadios": [
        {
            "_id": "5d8d1eca0f95a938908b8497",
            "nome": "Allianz Parque",
            "cidade": "São Paulo",
            "estado": "São Paulo",
            "createdAt": "2019-09-26T20:25:46.927Z",
            "__v": 0
        }
    ]
}
```

#### 2.3 GET Consultar Estádio pelo ID
Rota
```
/estadio/selectById/5d8d1eca0f95a938908b8497
```
Retorno Json
```
{
    "estadio": [
        {
            "_id": "5d8d1eca0f95a938908b8497",
            "nome": "Allianz Parque",
            "cidade": "São Paulo",
            "estado": "São Paulo",
            "createdAt": "2019-09-26T20:25:46.927Z",
            "__v": 0
        }
    ]
}
```

#### 2.4 DELETE Deletar Estádio pelo ID
Rota
```
/estadio/deleteById/5d8d20f3ab176938fb6d750e
```

## 3 Time
#### 3.1 POST Cadastrar Time
Rota
```
/time/cadastrar
```
Json
```
{
	"nome" : "Palmeiras",
	"estadio" : "5d8d1eca0f95a938908b8497",
	"url_emblema" : "url"
}
```
#### 3.2 GET Consultar todos os Times
Rota
```
/time/selectAll
```
Retorno Json
```
{
    "times": [
        {
            "_id": "5d8e0e70f581923d1b295835",
            "nome": "Palmeiras",
            "estadio": {
                "_id": "5d8d1eca0f95a938908b8497",
                "nome": "Allianz Parque",
                "cidade": "São Paulo",
                "estado": "São Paulo",
                "createdAt": "2019-09-26T20:25:46.927Z",
                "__v": 0
            },
            "url_emblema": "Teste",
            "createdAt": "2019-09-27T13:28:16.408Z",
            "__v": 0
        }
    ]
}
```
#### 3.3 GET Consultar Time pelo ID
Rota
```
/time/selectById/5d8e0e70f581923d1b295835
```
Retorno Json
```
{
    "time": {
        "_id": "5d8e0e70f581923d1b295835",
        "nome": "Palmeiras",
        "estadio": {
            "_id": "5d8d1eca0f95a938908b8497",
            "nome": "Allianz Parque",
            "cidade": "São Paulo",
            "estado": "São Paulo",
            "createdAt": "2019-09-26T20:25:46.927Z",
            "__v": 0
        },
        "url_emblema": "Teste",
        "createdAt": "2019-09-27T13:28:16.408Z",
        "__v": 0
    }
}
```
#### 3.4 DELETE Deletar Time pelo ID
Rota
```
/time/deleteById/5d8d20f3ab176938fb6d750e
```