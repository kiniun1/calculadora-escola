const httpStatusResponse = require('../commons/http-response/http-status-response');

const ValidacaoOperador = async(dado)=>{
    try {
        const operadores = {
            '+': 'ok',
            '-': 'ok',
            '*': 'ok',
            '/': 'ok',
            '%': 'ok',
            '√': 'ok',
        };
        return operadores[dado] ?? "inválido";
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operador');
        return erroValidacao;
    };
};

module.exports = ValidacaoOperador;