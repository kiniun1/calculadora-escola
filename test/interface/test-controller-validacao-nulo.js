const expect = require("chai").expect;
const { describe } = require("mocha");
const controllerValidacaoNulos = require("../../interface/controller-validacao-nulo");

describe('Controller de validação dos valores, se são nulos ou não', ()=>{
    it('1º teste: passando os parametros corretos, sendo adição', async()=>{
        const resultado = await controllerValidacaoNulos([2, '+', 2]);
        expect(resultado).to.equal('ok');
    });

    it('2º teste: passando os parametros corretos, sendo subtração', async()=>{
        const resultado = await controllerValidacaoNulos([-2, '-', 2]);
        expect(resultado).to.equal('ok');
    });

    it('3º teste: passando os parametros corretos, sendo multiplicação', async()=>{
        const resultado = await controllerValidacaoNulos([2.5, '*', 2]);
        expect(resultado).to.equal('ok');
    });

    it('4º teste: passando os parametros corretos, sendo divisão', async()=>{
        const resultado = await controllerValidacaoNulos([2, '/', 2]);
        expect(resultado).to.equal('ok');
    });

    it('5º teste: passando os parametros corretos, sendo porcentagem', async()=>{
        const resultado = await controllerValidacaoNulos([2, '%', 2]);
        expect(resultado).to.equal('ok');
    });

    it('6º teste: passando os parametros corretos, sendo raiz', async()=>{
        const resultado = await controllerValidacaoNulos([2, '√', 2]);
        expect(resultado).to.equal('ok');
    });

    it('7º teste: chamando sendo o primeiro parametro indefinido retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([, '+', 2]);
        expect(resultado).to.equal('erro');
    });

    it('8º teste: chamando sendo o segundo parametro indefinido retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([2, , 2]);
        expect(resultado).to.equal('erro');
    });

    it('9º teste: chamando sendo o terceiro parametro indefinido retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([2, '+', ]);
        expect(resultado).to.equal('erro');
    });

    it('10º teste: chamando sendo o primeiro parametro nulo retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([null, '+', 2]);
        expect(resultado).to.equal('erro');
    });

    it('11º teste: chamando sendo o segundo parametro nulo, retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([2, null, 2]);
        expect(resultado).to.equal('erro');
    });

    it('12º teste: chamando sendo o terceiro parametro nulo retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([2, '+', null]);
        expect(resultado).to.equal('erro');
    });

    it('13º teste: chamando sendo o primeiro parametro vazio retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos(['', '+', 2]);
        expect(resultado).to.equal('erro');
    });

    it('14º teste: chamando sendo o segundo parametro vazio retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([2, '', 2]);
        expect(resultado).to.equal('erro');
    });

    it('15º teste: chamando sendo o terceiro parametro vazio retornando "erro"', async()=>{
        const resultado = await controllerValidacaoNulos([2, '+', '']);
        expect(resultado).to.equal('erro');
    });
});