## Sumário
<!--ts-->
* [Introdução](#Introdução)
* [Usuário](#1-Usuário)
  * [POST (Cadastrar Usuário)](#11-POST-Cadastrar-Usuário)
  * [POST (Autenticar Usuário)](#12-POST-Autenticar-Usuário)
  * [GET (Consultar todos os Usuário)](#13-GET-Selecionar-todos-os-Usuário)
  * [GET (Consultar Usuário pelo id)](#14-GET-Selecionar-Usuário-pelo-ID)
  * [DELETE (Deletar Usuário pelo id)](#15-GET-Deletar-Usuário-pelo-ID)

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