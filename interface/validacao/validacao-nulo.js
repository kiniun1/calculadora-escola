const httpStatusResponse = require('../../commons/http-response/http-status-response');
const logger = require('../../commons/error-logger');

const ValidacaoDadosVaziosOuNulos = async(dado)=>{
    try {
        const validacaoValores = {
            null: 'nulo',
            "": 'vazio',
            undefined: 'indefinido'
        };
        return validacaoValores[dado] ?? "ok";
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-nulo');
        logger.loggerComum.log('error', erro.message);     
        return erroValidacao;
    };
};

module.exports = ValidacaoDadosVaziosOuNulos;