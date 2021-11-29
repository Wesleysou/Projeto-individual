var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE EmailUser = '${email}' AND SenhaUser = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, biotipo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, biotipo);
    var instrucao = `
        INSERT INTO usuario (NomeUser, EmailUser, SenhaUser, BiotipoUser) VALUES ('${nome}', '${email}', '${senha}','${biotipo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarcara(altura, idade, cor, genero, data) {
    var  fkuser = 99;
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", altura, idade, cor, genero, data);
    var instrucao = `
        INSERT INTO caracteristica (AlturaUser, IdadeUser, CorUser, GeneroUser, DataNascUser, fk_usuario) VALUES ('${altura}', '${idade}', '${cor}','${genero}','${data}','${fkuser +1}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function funcmesomorfo() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcmesomorfo()");
    var instrucao = `
        SELECT COUNT(BiotipoUser) as Mesomorfobd FROM usuario WHERE BiotipoUser = 'Mesomorfo'; `
    ;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function funcectomorfo() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcectomorfo()");
    var instrucao = `
       SELECT COUNT(BiotipoUser) as Ectomorfobd FROM usuario WHERE BiotipoUser = 'Ectomorfo'; `
    ;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function funcendomorfo() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcendomorfo()");
    var instrucao = `
       SELECT COUNT(BiotipoUser) as Endomorfobd FROM usuario WHERE BiotipoUser = 'Endomorfo'; `
    ;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrarcara,
    funcmesomorfo,
    funcectomorfo,
    funcendomorfo,
};