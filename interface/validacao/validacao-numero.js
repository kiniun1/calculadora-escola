const httpStatusResponse = require('../../commons/http-response/http-status-response');
const logger = require('../../commons/error-logger');

const ValidacaoValoresSaoNumericos = async(dado)=>{
    try {
        const validacaoValores = {
            string: 'string',
            number: 'ok',
        };
        return validacaoValores[typeof(dado)];
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-numero');
        logger.loggerComum.log('error', erro.message);
        return erroValidacao;
    }; 
};

module.exports = ValidacaoValoresSaoNumericos;