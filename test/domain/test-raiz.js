const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoDeRaiz = require('../../domain/raiz');


describe('Função de raiz', ()=>{
    it('1º Teste: Recebendo 2 parametros positivos e sendo quadrada', async()=>{
        const resultadoRaiz = await funcaoDeRaiz(25, 2);
        expect(resultadoRaiz).to.equal(5);
    });

    it('2º Teste: Recebendo 2 parametros positivos e sendo cúbica', async()=>{
        const resultadoRaiz = await funcaoDeRaiz(343, 3);
        expect(resultadoRaiz).to.be.closeTo(7, 0.1);
    });

    it('2º Teste: Recebendo 2 parametros positivos e sendo a oitava', async()=>{
        const resultadoRaiz = await funcaoDeRaiz(256, 8);
        expect(resultadoRaiz).to.equal(2);
    });

    it('3º Teste: Recebendo 2 parametros sendo o radicando negativo e sendo cúbica', async()=>{
        const resultadoRaiz = await funcaoDeRaiz(-125, 3);
        expect(resultadoRaiz).to.be.closeTo(-5, 0.1);
    });
});