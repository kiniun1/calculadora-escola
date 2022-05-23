const { expect } = require("chai");
const { describe } = require("mocha");
const canalizadorValidacaoOperacao = require("../../applications/canalizador-validacao-operacao");


describe('Chama validação dos dados, e encaminha para o controller das operações se tudo certo', ()=>{

    it('1º Teste: Deve retornar valor 4 da soma 2 + 2', async()=>{
        const resultado = await canalizadorValidacaoOperacao(2, '+', 2);
        expect(resultado.body).to.equal('4.000000000000000');
    });
    it('2º Teste: Deve retornar valor 10 da subtração 15 - 3.7', async()=>{
        const resultado = await canalizadorValidacaoOperacao(15, '-', 3.7);
        expect(resultado.body).to.equal('11.300000000000001');
    });

    it('3º Teste: Deve retornar valor -25 da multiplicação 5 * -5', async()=>{
        const resultado = await canalizadorValidacaoOperacao(5, '*', -5);
        expect(resultado.body).to.equal('-25.000000000000000');
    });

    it('4º Teste: Deve retornar valor 14,83 da divisão 63,8 / 4,3', async()=>{
        const resultado = await canalizadorValidacaoOperacao(63.8, '/', 4.3);
        expect(resultado.body).to.equal('14.837209302325581');
    });

    it('5º Teste: Deve retornar valor 96,338 de 63,8% de 151', async()=>{
        const resultado = await canalizadorValidacaoOperacao(63.8, '%', 151);
        expect(resultado.body).to.equal('96.337999999999994');
    });

    it('6º Teste: Deve retornar valor 12 da raiz quadrada 144', async()=>{
        const resultado = await canalizadorValidacaoOperacao(144, '√', 2);
        expect(resultado.body).to.equal('12.000000000000000');
    });

    it('7º Teste: Deve retornar entrada inválida ao tentar fazer divisão por 0', async()=>{
        const resultado = await canalizadorValidacaoOperacao(2, '/', 0);
        expect(resultado.statusCode).to.equal(400);
        expect(resultado.body).to.equal('Entrada inválida');
    });

    it('8º Teste: Deve retornar entrada inválida ao tentar fazer a raiz com indice 0', async()=>{
        const resultado = await canalizadorValidacaoOperacao(2, '√', 0);
        expect(resultado.statusCode).to.equal(400);
        expect(resultado.body).to.equal('Entrada inválida');
    });

});