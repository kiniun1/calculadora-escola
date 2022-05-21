const { expect } = require("chai");
const { describe } = require("mocha");
const ValidacaoValoresSaoNumericos = require("../../../interface/validacao/validacao-numero");

describe('Teste função que valida se o dado é numérico ou string', ()=>{
    it('1º Teste: deve retornar OK já que o dado passado é numérico', async()=>{
        const resultado = await ValidacaoValoresSaoNumericos(1);
        expect(resultado).to.equal('ok');
    });
    it('2º Teste: deve retornar string já que o tipo do dado passado é uma string', async()=>{
        const resultado = await ValidacaoValoresSaoNumericos('1');
        expect(resultado).to.equal('string');
    });
});