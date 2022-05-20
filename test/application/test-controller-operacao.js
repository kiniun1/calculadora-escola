const expect = require("chai").expect;
const { describe } = require("mocha");
const controllerOperacao = require("../../applications/controller-operacao");

describe('Testando o controller que decide qual função de operação chamar', ()=>{
    it('1º teste: chamar função de adição com os parametros passados pra esse controller e retornar o valor correto', async()=>{
        const resultado = await controllerOperacao(2, '+', 2);
        expect(resultado).to.equal(4);
    });

    it('2º teste: chamar função de subtração com os parametros passados pra esse controller e retornar o valor correto', async()=>{
        const resultado = await controllerOperacao(4, '-', 2);
        expect(resultado).to.equal(2);
    });

    it('3º teste: chamar função de multiplicação com os parametros passados pra esse controller e retornar o valor correto', async()=>{
        const resultado = await controllerOperacao(2, '*', 2);
        expect(resultado).to.equal(4);
    });

    it('4º teste: chamar função de divisão com os parametros passados pra esse controller e retornar o valor correto', async()=>{
        const resultado = await controllerOperacao(4, '/', 2);
        expect(resultado).to.equal(2);
    });

    it('5º teste: chamar função de porcentagem com os parametros passados pra esse controller e retornar o valor correto', async()=>{
        const resultado = await controllerOperacao(10, '%', 100);
        expect(resultado).to.equal(10);
    });

    it('6º teste: chamar função de raiz com os parametros passados pra esse controller e retornar o valor correto', async()=>{
        const resultado = await controllerOperacao(25, '√', 2);
        expect(resultado).to.equal(5);
    });

    it('7º teste: chamar função de adição com os parametros igual a 0 pra esse controller e retornar 0', async()=>{
        const resultado = await controllerOperacao(0, '+', 0);
        expect(resultado).to.equal(0);
    });

    it('8º teste: chamar função de subtração com os parametros igual a 0 pra esse controller e retornar 0', async()=>{
        const resultado = await controllerOperacao(0, '-', 0);
        expect(resultado).to.equal(0);
    });

    it('9º teste: chamar função de multiplicação com os parametros igual a 0 pra esse controller e retornar 0', async()=>{
        const resultado = await controllerOperacao(0, '*', 0);
        expect(resultado).to.equal(0);
    });

    it('10º teste: chamar função de divisão com o primeiro valor igual a 0 pra esse controller e retornar 0', async()=>{
        const resultado = await controllerOperacao(0, '/', 5);
        expect(resultado).to.equal(0);
    });

    it('11º teste: chamar função de porcentagem com os parametros igual a 0 pra esse controller e retornar 0', async()=>{
        const resultado = await controllerOperacao(0, '%', 0);
        expect(resultado).to.equal(0);
    });

    it('12º teste: chamar função de raiz com o primeiro valor igual a 0 pra esse controller e retornar 0', async()=>{
        const resultado = await controllerOperacao(0, '√', 2);
        expect(resultado).to.equal(0);
    });
});