const httpStatusResponse = require('../../commons/http-response/http-status-response');
const ValidacaoDadosVaziosOuNulos = require('../validacao/validacao-nulo');

const controllerValidacaoNulos = async(dados)=>{
    try {
        let respostaValidacao = [];
        for(let i = 0; i<3; i++){
            respostaValidacao.push(await ValidacaoDadosVaziosOuNulos(dados[i]));
        };
        if(respostaValidacao[0] === 'ok' && respostaValidacao[1] === 'ok' && respostaValidacao[2] === 'ok'){
            return 'ok'
        }else{
            return 'erro'
        }
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operador');
        return erroValidacao;
    };
};

module.exports = controllerValidacaoNulos;