const httpStatusResponse = require('../commons/http-response/http-status-response');
const ValidacaoValoresSaoNumericos = require('./validacao-numero');
const conversaoStringNumero = require('../applications/conversao-string-para-numero');

const controllerValidacaoNumeros = async(dados)=>{
    try {
        let respostaNumero = [];
        let resultadoConversao = [];
        for(let i = 0; i<2; i++){
            respostaNumero.push(await ValidacaoValoresSaoNumericos(dados[i]));
        }
        
        if(respostaNumero[0] === 'ok' && respostaNumero[1] === 'ok'){

            return [dados[0], dados[1], 'ok'];

        }else if(respostaNumero[0] === 'string' && respostaNumero[1] === 'ok'){

            resultadoConversao.push(await conversaoStringNumero(dados[0]));
            return [resultadoConversao[0], dados[1], 'ok'];

        }else if(respostaNumero[0] === 'ok' && respostaNumero[1] === 'string'){

            resultadoConversao.push(await conversaoStringNumero(dados[1]));
            return [dados[0], resultadoConversao[0], 'ok'];

        }else if(respostaNumero[0] === 'string' && respostaNumero[1] === 'string'){

            resultadoConversao.push(await conversaoStringNumero(dados[0]));
            resultadoConversao.push(await conversaoStringNumero(dados[1]));
            return [resultadoConversao[0], resultadoConversao[1], 'ok'];

        }
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-nulo');
        return erroValidacao;
    };
};

module.exports = controllerValidacaoNumeros;