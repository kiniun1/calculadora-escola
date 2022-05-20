const expect = require("chai").expect;
const { describe } = require("mocha");
const validacaoOperacaoZero = require("../../interface/validacao/validacao-operacao-zero");

describe('Testando a validação se é divisão por 0, ou raiz de indice 0', ()=>{

    it('1º teste: chamar validação passando parametros válidos deve retornar ok', async()=>{
        const resultado = await validacaoOperacaoZero('/', 2);
        expect(resultado).to.equal('ok');
    });

    it('2º teste: chamar validação passando parametros válidos deve retornar ok', async()=>{
        const resultado = await validacaoOperacaoZero('√', 2);
        expect(resultado).to.equal('ok');
    });

    it('3º teste: chamar validação passando parametros inválidos deve retornar entrada inválida', async()=>{
        const resultado = await validacaoOperacaoZero('/', 0);
        expect(resultado).to.equal('entrada inválida');
    });

    it('4º teste: chamar validação passando parametros inválidos deve retornar entrada inválida', async()=>{
        const resultado = await validacaoOperacaoZero('√', 0);
        expect(resultado).to.equal('entrada inválida');
    });

});