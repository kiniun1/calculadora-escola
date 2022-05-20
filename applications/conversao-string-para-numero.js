const httpStatusResponse = require('../commons/http-response/http-status-response');

const conversaoStringNumero = async(valor)=>{
    try {
        return parseFloat(valor);
    } catch (erro) {
        const erroConversao = await httpStatusResponse(500, (erro.message), 'conversao-string-numero');
        return erroConversao;
    };
};

module.exports = conversaoStringNumero;