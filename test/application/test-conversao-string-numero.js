const { expect } = require("chai");
const { describe } = require("mocha");
const conversaoStringNumero = require("../../applications/conversao-string-para-numero");

describe('Função de conversão de string para numeral', ()=>{

    it('1º teste: Passando 1 como string, deve retornar um 1 com tipo numeral', async()=>{
        const result = await conversaoStringNumero('1');
        expect(result).to.be.a('number');
        expect(result).to.equal(1);
    });

    it('2º teste: Passando -1 como string, deve retornar um -1 com tipo numeral', async()=>{
        const result = await conversaoStringNumero('-1');
        expect(result).to.be.a('number');
        expect(result).to.equal(-1);
    });

    it('3º teste: Passando 2,5 como string, deve retornar um 2,5 com tipo numeral', async()=>{
        const result = await conversaoStringNumero('2.5');
        expect(result).to.be.a('number');
        expect(result).to.equal(2.5);
    });

    it('4º teste: Passando -2,5 como string, deve retornar um -2,5 com tipo numeral', async()=>{
        const result = await conversaoStringNumero('-2.5');
        expect(result).to.be.a('number');
        expect(result).to.equal(-2.5);
    });

});