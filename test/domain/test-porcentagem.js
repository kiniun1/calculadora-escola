
const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoDePorcentagem = require('../../domain/adicao');


describe('Testando adições com múltiplos parametros diferentes', ()=>{
    it('1º Teste: Recebendo 1 parametro, o valor deve ser o mesmo do parametro', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(1)
        expect(resultadoPorcentagem).to.equal(1);
    })

    it('2º Teste: Recebendo 2 parametros', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(7, 6);
        expect(resultadoPorcentagem).to.equal(13);
    })

    it('3º Teste: Recebendo 2 parametros com posições invertidas', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(6, 7);
        expect(resultadoPorcentagem).to.equal(13);
    })

    it('4º Teste: Recebendo 4 parametros', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(10, 15, 20, 60);
        expect(resultadoPorcentagem).to.equal(105);
    })

    it('5º Teste: Recebendo 3 parametros, sendo um negativo', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(3, 8, -14);
        expect(resultadoPorcentagem).to.equal(-3);        
    });

    it('6º Teste: Recebendo 3 parametros, sendo 2 decimais', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(1.1, 2.2, -2);   
        expect(resultadoPorcentagem).to.be.closeTo(1.3, 0.001);                 
    });

    it('7º Teste: Recebendo 3 parametros, sendo um positivo no começo', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(3, -8, -14);
        expect(resultadoPorcentagem).to.equal(-19);        
    });

    it('8º Teste: Recebendo 3 parametros, sendo um positivo no meio', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(-3, 8, -14);
        expect(resultadoPorcentagem).to.equal(-9);        
    });

    it('9º Teste: Recebendo 3 parametros, sendo um positivo no final', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(-3, -8, 14);
        expect(resultadoPorcentagem).to.equal(3);        
    });
})