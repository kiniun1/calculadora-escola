const express = require('express');
const canalizadorValidacaoOperacao = require('../../applications/canalizador-validacao-operacao');
const router = express.Router();
const httpStatusResponse = require('../../commons/http-response/http-status-response');
 
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
    } catch (error) {
        const finalError = await httpStatusResponse(500, (error.message), 'api-post-routes');
        res.status(finalError.statusCode).send(finalError.body);         
    }  
});
 
module.exports = router;