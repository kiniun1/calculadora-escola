const { expect } = require("chai");
const { describe } = require("mocha");
const ValidacaoOperador = require("../../../interface/validacao/validacao-operador");

describe('Teste função que valida se o operador passado está válido', ()=>{
    it('1º Teste: deve retornar OK já que o operador passado é de adição', async()=>{
        const resultado = await ValidacaoOperador('+');
        expect(resultado).to.equal('ok');
    });
    it('2º Teste: deve retornar OK já que o operador passado é de subtração', async()=>{
        const resultado = await ValidacaoOperador('-');
        expect(resultado).to.equal('ok');
    });
    it('3º Teste: deve retornar OK já que o operador passado é de multiplicação', async()=>{
        const resultado = await ValidacaoOperador('*');
        expect(resultado).to.equal('ok');
    });
    it('4º Teste: deve retornar OK já que o operador passado é de divisão', async()=>{
        const resultado = await ValidacaoOperador('/');
        expect(resultado).to.equal('ok');
    });
    it('5º Teste: deve retornar OK já que o operador passado é de porcentagem', async()=>{
        const resultado = await ValidacaoOperador('%');
        expect(resultado).to.equal('ok');
    });
    it('6º Teste: deve retornar OK já que o operador passado é de raiz', async()=>{
        const resultado = await ValidacaoOperador('√');
        expect(resultado).to.equal('ok');
    });
    it('7º Teste: deve retornar inválido já que o valor passado no operador não é válido', async()=>{
        const resultado = await ValidacaoOperador('&');
        expect(resultado).to.equal('inválido');
    });
    it('8º Teste: deve retornar inválido já que o valor passado no operador não é válido', async()=>{
        const resultado = await ValidacaoOperador('$');
        expect(resultado).to.equal('inválido');
    });
});