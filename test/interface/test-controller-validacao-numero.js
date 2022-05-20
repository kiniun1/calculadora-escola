const { expect } = require("chai");
const { describe } = require("mocha");


describe('Controller validação de valores númericos', ()=>{

    it('1º teste: passando os dois parametros como numéricos, deve retornar os dois como numéricos', async()=>{
        const result = await controllerValidacaoNumeros([1, 2]);
        expect(typeof(result[0])).to.equal(number);
        expect(typeof(result[1])).to.equal(number);
    });

    it('2º teste: passando apenas o primeiro parametro como numérico, deve retornar os dois como numéricos', async()=>{
        const result = await controllerValidacaoNumeros([1, '2']);
        expect(typeof(result[0])).to.equal(number);
        expect(typeof(result[1])).to.equal(number);
    });

    it('3º teste: passando apenas o segundo parametro como numérico, deve retornar os dois como numéricos', async()=>{
        const result = await controllerValidacaoNumeros(['1', 2]);
        expect(typeof(result[0])).to.equal(number);
        expect(typeof(result[1])).to.equal(number);
    });

    it('4º teste: passando os dois parametros como string, deve retornar os dois como numéricos', async()=>{
        const result = await controllerValidacaoNumeros(['1', '2']);
        expect(typeof(result[0])).to.equal(number);
        expect(typeof(result[1])).to.equal(number);
    });

});