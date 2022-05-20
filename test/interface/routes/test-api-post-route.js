const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../../server');
chai.use(chaiHttp);

describe('/API', () => {
    it('1º teste: deve retornar statusCode 200 e o valor igual a 23 da soma 2 + 21', async() => {
        let dados = {
            primeiroValor: 2,
            operador: "+",
            segundoValor: 21
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(200);
        expect(resposta.text).to.equal('23.000000000000000');
    });

    it('2º teste: deve retornar statusCode 400 e um texto de entrada inválida da divisão 2 / 0', async() => {
        let dados = {
            primeiroValor: 2,
            operador: "/",
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('3º teste: deve retornar statusCode 400 e um texto de entrada inválida da raiz de 2 com indice 0', async() => {
        let dados = {
            primeiroValor: 2,
            operador: "√",
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('4º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar operador nulo', async() => {
        let dados = {
            primeiroValor: 2,
            operador: null,
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('5º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar primeiro valor nulo', async() => {
        let dados = {
            primeiroValor: null,
            operador: '+',
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('6º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar segundo valor nulo', async() => {
        let dados = {
            primeiroValor: 2,
            operador: '+',
            segundoValor: null
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('7º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar operador indefinido', async() => {
        let dados = {
            primeiroValor: 2,
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('8º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar primeiro valor indefinido', async() => {
        let dados = {
            operador: '+',
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('9º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar segundo valor indefinido', async() => {
        let dados = {
            primeiroValor: 2,
            operador: '+',
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('10º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar operador sendo uma string vazia', async() => {
        let dados = {
            primeiroValor: 2,
            operador: '',
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('11º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar primeiro valor sendo uma string vazia', async() => {
        let dados = {
            primeiroValor: '',
            operador: '+',
            segundoValor: 0
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });

    it('12º teste: deve retornar statusCode 400 e um texto de entrada inválida ao enviar segundo valor sendo uma string vazia', async() => {
        let dados = {
            primeiroValor: 2,
            operador: '+',
            segundoValor: ''
        }
        const resposta = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(resposta.statusCode).to.equal(400);
        expect(resposta.text).to.equal('Entrada inválida');
    });
});