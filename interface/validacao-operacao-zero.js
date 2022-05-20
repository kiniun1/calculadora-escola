const httpStatusResponse = require('../commons/http-response/http-status-response');

const validacaoOperacaoZero = async(dados)=>{
    try {
        if(dados[1] === '√' && dados[2] === 0){
            return 'entrada inválida';
        }
        if(dados[1] === '/' && dados[2] === 0){
            return 'entrada inválida';
        } else {
            return 'ok'
        }
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operacao-zero');
        return erroValidacao;
    };
};

module.exports = validacaoOperacaoZero;