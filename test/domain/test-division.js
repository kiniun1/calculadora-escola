
const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoDeDividir = require('../../domain/division');


describe('Testando divisões com múltiplos parametros diferentes', ()=>{
    it('1º Teste: Recebendo 1 parametro, o valor deve ser o mesmo do parametro', async()=>{
        const resultadoDivisao = await funcaoDeDividir(1)
        expect(resultadoDivisao).to.equal(1);
    })

    it('2º Teste: Recebendo 2 parametros', async()=>{
        const resultadoDivisao = await funcaoDeDividir(12, 6);
        expect(resultadoDivisao).to.equal(2);
    })

    it('3º Teste: Recebendo 2 parametros com posições invertidas', async()=>{
        const resultadoDivisao = await funcaoDeDividir(6, 12);
        expect(resultadoDivisao).to.equal(0.5);
    })

    it('4º Teste: Recebendo 4 parametros', async()=>{
        const resultadoDivisao = await funcaoDeDividir(60, 2, 2, 3);
        expect(resultadoDivisao).to.equal(5);
    })

    it('5º Teste: Recebendo 3 parametros, sendo um negativo', async() => {
        const resultadoDivisao = await funcaoDeDividir(44, 2, -11);
        expect(resultadoDivisao).to.equal(-2);        
    });

    it('6º Teste: Recebendo 3 parametros, sendo 2 decimais', async() => {
        const resultadoDivisao = await funcaoDeDividir(4.4, 1.1, -2);   
        expect(resultadoDivisao).to.equal(-2);                 
    });

    it('7º Teste: Recebendo 3 parametros, sendo 3 decimais', async() => {
        const resultadoDivisao = await funcaoDeDividir(84.8, 4.5, -7.8);   
        expect(resultadoDivisao).to.be.closeTo(-2.415, 0.001);                 
    });

    it('8º Teste: Recebendo 3 parametros, sendo um positivo no começo', async() => {
        const resultadoDivisao = await funcaoDeDividir(48, -8, -2);
        expect(resultadoDivisao).to.equal(3);        
    });

    it('9º Teste: Recebendo 3 parametros, sendo um positivo no meio', async() => {
        const resultadoDivisao = await funcaoDeDividir(-48, 8, -2);
        expect(resultadoDivisao).to.equal(3);        
    });

    it('10º Teste: Recebendo 3 parametros, sendo um positivo no final', async() => {
        const resultadoDivisao = await funcaoDeDividir(-48, -8, 2);
        expect(resultadoDivisao).to.equal(3);        
    });
})