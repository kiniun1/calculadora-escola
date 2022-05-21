const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoDePorcentagem = require('../../domain/porcentagem');

// 50% de 80
// 50% = parte
// 80  = todo
describe('Função de porcentagem', ()=>{
    it('1º Teste: Recebendo 2 parametros deve retornar o resultado correto do calculo da porcentagem', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(13, 100);
        expect(resultadoPorcentagem).to.equal(13);
    });
    
    it('2º Teste: Recebendo 2 parametros dando resultado em decimal', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(7, 6);
        expect(resultadoPorcentagem).to.be.closeTo(0.42, 0.01);
    });

    it('3º Teste: Recebendo 2 parametros com posições invertidas do 2° teste', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(6, 7);
        expect(resultadoPorcentagem).to.equal(0.42, 0.01);
    });
    
    it('4º Teste: Recebendo 2 parametros, sendo a parte maior que 100% voltando um valor maior que o todo passado', async()=>{
        const resultadoPorcentagem = await funcaoDePorcentagem(177, 3875);
        expect(resultadoPorcentagem).to.equal(6858.75);
    });

    it('5º Teste: Recebendo 2 parametros, sendo a parte negativo voltando uma regressão do todo passado', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(-50, 2367);
        expect(resultadoPorcentagem).to.equal(-1183.5);        
    });

    it('6º Teste: Recebendo 2 parametros, sendo o todo negativo', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(67, -1437);
        expect(resultadoPorcentagem).to.equal(-962.79);                 
    });

    it('6º Teste: Recebendo 2 parametros, sendo a parte e o todo negativo', async() => {
        const resultadoPorcentagem = await funcaoDePorcentagem(-32, -6135);
        expect(resultadoPorcentagem).to.equal(1963.2);                
    });
});