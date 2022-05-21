const { expect } = require("chai");
const { describe } = require("mocha");
const ValidacaoDadosVaziosOuNulos = require("../../interface/validacao/validacao-nulo");

describe('Teste função que valida se o dado é nulo, vazio, ou undefined', ()=>{
    it('1º Teste: deve retornar OK já que o dado passado é válido', async()=>{
        const resultado = await ValidacaoDadosVaziosOuNulos('a');
        expect(resultado).to.equal('ok');
    });
    it('2º Teste: deve retornar uma string escrito nulo já que o dado passado é null', async()=>{
        const dadoNulo = null;
        const resultado = await ValidacaoDadosVaziosOuNulos(dadoNulo);
        expect(resultado).to.equal('nulo');
    });
    it('3º Teste: deve retornar uma string escrito vazio já que o dado passado é vazio', async()=>{
        const dadoVazio = '';
        const resultado = await ValidacaoDadosVaziosOuNulos(dadoVazio);
        expect(resultado).to.equal('vazio');
    });
    it('4º Teste: deve retornar uma string escrito indefinido já que o dado passado é indefinido', async()=>{
        let dadoUndefined;
        const resultado = await ValidacaoDadosVaziosOuNulos(dadoUndefined);
        expect(resultado).to.equal('indefinido');
    });
});