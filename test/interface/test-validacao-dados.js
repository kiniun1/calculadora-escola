const expect = require("chai").expect;
const { describe } = require("mocha");
const validacaoDados = require("../../interface/validacao-dados");

describe('Testando a função que valida os dados, chamando outras funções individuais e no final retorna se está tudo válido', ()=>{
    it('1º teste: passando os parametros corretos, sendo adição', async()=>{
        const resultado = await validacaoDados([2, '+', 2]);
        expect(resultado).to.eql([2, 2, 'ok']);
    });

    it('2º teste: passando os parametros corretos, sendo subtração', async()=>{
        const resultado = await validacaoDados([-4, '-', -8]);
        expect(resultado).to.eql([-4, -8, 'ok']);
    });

    it('3º teste: passando os parametros corretos, sendo multiplicação', async()=>{
        const resultado = await validacaoDados([2.5, '*', -2.5]);
        expect(resultado).to.eql([2.5, -2.5, 'ok']);
    });

    it('4º teste: passando os parametros corretos, sendo divisão', async()=>{
        const resultado = await validacaoDados([-9, '/', 1.5]);
        expect(resultado).to.eql([-9, 1.5, 'ok']);
    });

    it('5º teste: passando os parametros corretos, sendo porcentagem', async()=>{
        const resultado = await validacaoDados([99, '%', 2546]);
        expect(resultado).to.eql([99, 2546, 'ok']);
    });

    it('6º teste: passando os parametros corretos, sendo raiz', async()=>{
        const resultado = await validacaoDados([25, '√', 2]);
        expect(resultado).to.eql([25, 2, 'ok']);
    });

    it('7º teste: passando os parametros sendo o primeiro numero como string, deve retornar numeral e ok', async()=>{
        const resultado = await validacaoDados(['25', '+', 2]);
        expect(resultado).to.eql([25, 2, 'ok']);
    });

    it('8º teste: passando os parametros sendo o segundo numero como string, deve retornar numeral e ok', async()=>{
        const resultado = await validacaoDados([25, '+', '2']);
        expect(resultado).to.eql([25, 2, 'ok']);
    });

    it('9º teste: passando os parametros sendo os dois numeros como string, deve retornar numeral e ok', async()=>{
        const resultado = await validacaoDados(['25', '+', '2']);
        expect(resultado).to.eql([25, 2, 'ok']);
    });
    
    it('7º teste: passando os parametros sendo o primeiro numero indefinido, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([, '+', 2]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('8º teste: passando os parametros sendo o operador indefinido, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([2, , 2]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('9º teste: passando os parametros sendo o segundo numero indefinido, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([2, '+', ]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('10º teste: passando os parametros sendo o primeiro numero nulo, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([null, '+', 2]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('11º teste: passando os parametros sendo o operador nulo, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([2, null, 2]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('12º teste: passando os parametros sendo o segundo numero nulo, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([2, '+', null]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('13º teste: passando os parametros sendo o primeiro numero vazio, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados(['', '+', 2]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('14º teste: passando os parametros sendo o operador vazio, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([2, '', 2]);
        expect(resultado).to.equal('entrada inválida');
    });

    it('15º teste: passando os parametros sendo o segundo numero vazio, e retornando "entrada inválida"', async()=>{
        const resultado = await validacaoDados([2, '+', '']);
        expect(resultado).to.equal('entrada inválida');
    });
});