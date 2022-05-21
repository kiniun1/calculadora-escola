const httpStatusResponse = require('../commons/http-response/http-status-response');
const validacaoDados = require('../interface/validacao/validacao-dados');
const controllerOperacao = require('./controller-operacao');
const logger = require('../commons/error-logger');


const canalizadorValidacaoOperacao = async(primeiroValor, operador, segundoValor) => {
    try {
        const resultadoValidacao = await validacaoDados([primeiroValor, operador, segundoValor]);
        if(resultadoValidacao[2] === 'ok'){
            let resultadoOperacao = await controllerOperacao(resultadoValidacao[0], operador, resultadoValidacao[1]);
            if(resultadoOperacao === 'Calculo não reconhecido'){
                const erroValidacao = await httpStatusResponse(500, 'erro interno', 'canalizador-validacao-operacao');
                return erroValidacao;
            }else{
                resultadoOperacao = resultadoOperacao.toFixed(15);
                resultadoOperacao = resultadoOperacao.toString();
                const resultadoFinal = await httpStatusResponse(200, resultadoOperacao, 'canalizador-validacao-operacao');
                return resultadoFinal;
            }
        }else {
            return resultadoValidacao;
        }
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'canalizador-validacao-operacao');
        logger.loggerComum.log('error', erro.message);     
        return erroValidacao;
    };
};
module.exports = canalizadorValidacaoOperacao;