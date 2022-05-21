const express = require('express');
const canalizadorValidacaoOperacao = require('../../applications/canalizador-validacao-operacao');
const router = express.Router();
const httpStatusResponse = require('../../commons/http-response/http-status-response');
const logger = require('./api-post-logger');
 
router
.post("/api", async (req, res) => {
    try {
        console.log('Rota API - calculo');
        let resultadoFinal
        let primeiroValor = req.body.primeiroValor;
        let segundoValor = req.body.segundoValor;
        let operador = req.body.operador;
        resultadoFinal = await canalizadorValidacaoOperacao(primeiroValor, operador, segundoValor);
        res.status(resultadoFinal.statusCode).send(resultadoFinal.body);
        logger.apiLogger.log('info', resultadoFinal.body);
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'api-post-routes');
        res.status(finalError.statusCode).send(finalError.body);    
        logger.apiLogger.log('error', resultadoFinal.body);     
    }  
});
 
module.exports = router;