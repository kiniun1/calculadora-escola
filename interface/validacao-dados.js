const httpStatusResponse = require('../commons/http-response/http-status-response');
const controllerValidacaoNulos = require('./controller-validacao-nulo');
const controllerValidacaoNumeros = require('./controller-validacao-numero');
const ValidacaoOperador = require('./validacao-operador');
const validacaoOperacaoZero = require('./validacao-operacao-zero');

const validacaoDados = async(dados)=>{
    try {
        const resultadoNulo = await controllerValidacaoNulos(dados);

        if(resultadoNulo === 'ok'){
            const resultadoOperador = await ValidacaoOperador(dados[1]);

            if(resultadoOperador === 'ok'){
                const resultadoNumero = await controllerValidacaoNumeros([dados[0], dados[2]]);

                if(resultadoNumero[2] === 'ok'){
                    const resultadoValidacaoZero = await validacaoOperacaoZero(dados[1], resultadoNumero[1]);

                    if(resultadoValidacaoZero === 'ok'){

                        return resultadoNumero;
                    }else {
                        
                        return 'entrada inválida';
                    }
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