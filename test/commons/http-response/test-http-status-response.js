const { expect } = require("chai");
const { describe } = require("mocha");
const httpStatusResponse = require("../../../commons/http-response/http-status-response");

describe('Função de resposta HTTP', ()=>{
    it('1° teste: deve retornar statusCode 500 e um erro interno', async()=>{
        const result = await httpStatusResponse(500, 'Erro interno', 'test-http');
        expect(result.statusCode).to.equal(500);
        expect(result.body).to.equal('Erro interno');
        expect(result.localization).to.equal('test-http');
    });

    it('2° teste: deve retornar statusCode 200 e sucesso', async()=>{
        const result = await httpStatusResponse(200, 'Sucesso', 'test-http');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.equal('Sucesso');
        expect(result.localization).to.equal('test-http');
    });

    it('3° teste: deve retornar statusCode 400 e erro de parametro faltando', async()=>{
        const result = await httpStatusResponse(400, 'Faltando parametro', 'test-http');
        expect(result.statusCode).to.equal(400);
        expect(result.body).to.equal('Faltando parametro');
        expect(result.localization).to.equal('test-http');
    });

    it('4° teste: deve capturar o erro dentro do try catch, e o body da função deve ser o mesmo de erro.message', async()=>{
        try {
            s
        } catch (erro) {
            const result = await httpStatusResponse(500, (erro.message), 'test-http');
            expect(result.body).to.equal('s is not defined');
        };
    });
});