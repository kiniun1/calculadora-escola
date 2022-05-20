const httpStatusResponse = require('../commons/http-response/http-status-response');
const controllerValidacaoNulos = require('./controller-validacao-nulo');
const controllerValidacaoNumeros = require('./controller-validacao-numero');
const ValidacaoOperador = require('./validacao-operador');

const validacaoDados = async(dados)=>{
    try {
        const resultNulo = await controllerValidacaoNulos(dados);
        if(resultNulo === 'ok'){
            const resultOperador = await ValidacaoOperador(dados[1]);
            if(resultOperador === 'ok'){
                const resultNumero = await controllerValidacaoNumeros([dados[0], dados[2]]);
                if(resultNumero[2] === 'ok'){
                    return resultNumero;
                } else{
                    return 'entrada inválida';
                }
            }else{
                return 'entrada inválida';
            }
        }else{
            return 'entrada inválida';
        }
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operador');
        return erroValidacao;
    };
};

module.exports = validacaoDados;