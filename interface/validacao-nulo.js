const httpStatusResponse = require('../commons/http-response/http-status-response');

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
        return erroValidacao;
    }
    
}

module.exports = ValidacaoDadosVaziosOuNulos;