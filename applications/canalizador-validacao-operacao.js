const httpStatusResponse = require('../commons/http-response/http-status-response');
const validacaoDados = require('../interface/validacao-dados');
const controllerOperacao = require('./controller-operacao');


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
            const erroValidacao = await httpStatusResponse(400, 'Entrada inválida', 'canalizador-validacao-operacao');
            return erroValidacao;
        }
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'canalizador-validacao-operacao');
        return erroValidacao;
    };
};
module.exports = canalizadorValidacaoOperacao;