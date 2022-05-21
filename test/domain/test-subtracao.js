const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoDeSubtracao = require('../../domain/subtracao');


describe('Função de subtração', ()=>{
    it('1º Teste: Recebendo 1 parametro, o valor deve ser o mesmo do parametro', async()=>{
        const resultadoSubtracao = await funcaoDeSubtracao(1);
        expect(resultadoSubtracao).to.equal(1);
    });

    it('2º Teste: Recebendo 2 parametros deve retornar o resultado correto da subtração', async()=>{
        const resultadoSubtracao = await funcaoDeSubtracao(7, 6);
        expect(resultadoSubtracao).to.equal(1);
    });

    it('3º Teste: Recebendo 2 parametros com posições invertidas do 2° teste, deve retornar um valor diferente.', async()=>{
        const resultadoSubtracao = await funcaoDeSubtracao(6, 7);
        expect(resultadoSubtracao).to.equal(-1);
    });

    it('4º Teste: Recebendo 4 parametros', async()=>{
        const resultadoSubtracao = await funcaoDeSubtracao(10, 15, 20, 60);
        expect(resultadoSubtracao).to.equal(-85);
    });

    it('5º Teste: Recebendo 3 parametros, sendo um positivo no começo', async() => {
        const resultadoSubtracao = await funcaoDeSubtracao(3, -8, -14);
        expect(resultadoSubtracao).to.equal(25);        
    });

    it('6º Teste: Recebendo 3 parametros, sendo um positivo no meio', async() => {
        const resultadoSubtracao = await funcaoDeSubtracao(-3, 8, -14);
        expect(resultadoSubtracao).to.equal(3);        
    });

    it('7º Teste: Recebendo 3 parametros, sendo um positivo no final', async() => {
        const resultadoSubtracao = await funcaoDeSubtracao(-3, -8, 14);
        expect(resultadoSubtracao).to.equal(-9);        
    });

    it('8º Teste: Recebendo 2 parametros sendo decimais', async() => {
        const resultadoSubtracao = await funcaoDeSubtracao(1.1, 2.2);   
        expect(resultadoSubtracao).to.be.closeTo(-1.1, 0.001);                 
    });

    it('9º Teste: Recebendo 3 parametros, sendo 2 decimais', async() => {
        const resultadoSubtracao = await funcaoDeSubtracao(1.1, 2.2, 2);   
        expect(resultadoSubtracao).to.be.closeTo(-3.1, 0.001);                 
    });
});