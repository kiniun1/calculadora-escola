const { describe } = require('mocha');
const expect = require("chai").expect;
const subtractFunction = require('../../domain/subtraction');


describe('Testando subtrações com múltiplos parametros diferentes', ()=>{
    it('1º Teste: Recebendo 1 parametro, o valor deve ser o mesmo do parametro', async()=>{
        const resultSubtraction = await subtractFunction(1)
        expect(resultSubtraction).to.equal(1);
    })

    it('2º Teste: Recebendo 2 parametros', async()=>{
        const resultSubtraction = await subtractFunction(7, 6);
        expect(resultSubtraction).to.equal(1);
    })

    it('3º Teste: Recebendo 2 parametros com posições invertidas', async()=>{
        const resultSubtraction = await subtractFunction(6, 7);
        expect(resultSubtraction).to.equal(-1);
    })

    it('4º Teste: Recebendo 4 parametros', async()=>{
        const resultSubtraction = await subtractFunction(10, 15, 20, 60);
        expect(resultSubtraction).to.equal(-85);
    })

    it('5º Teste: Recebendo 3 parametros, sendo um positivo no começo', async() => {
        const resultSubtraction = await subtractFunction(3, -8, -14);
        expect(resultSubtraction).to.equal(25);        
    });

    it('6º Teste: Recebendo 3 parametros, sendo um positivo no meio', async() => {
        const resultSubtraction = await subtractFunction(-3, 8, -14);
        expect(resultSubtraction).to.equal(3);        
    });

    it('7º Teste: Recebendo 3 parametros, sendo um positivo no final', async() => {
        const resultSubtraction = await subtractFunction(-3, -8, 14);
        expect(resultSubtraction).to.equal(-9);        
    });

    it('8º Teste: Recebendo 2 parametros sendo decimais', async() => {
        //expect(sum([1.1,2.2,3])).to.be.closeTo(6.3,0.0001);
        const resultSubtraction = await subtractFunction(1.1, 2.2);   
        expect(resultSubtraction).to.be.closeTo(-1.1, 0.001);                 
    });

    it('9º Teste: Recebendo 3 parametros, sendo 2 decimais', async() => {
        //expect(sum([1.1,2.2,3])).to.be.closeTo(6.3,0.0001);
        const resultSubtraction = await subtractFunction(1.1, 2.2, 2);   
        expect(resultSubtraction).to.be.closeTo(-3.1, 0.001);                 
    });
})