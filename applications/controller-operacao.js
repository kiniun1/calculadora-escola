const funcaoDeAdicao = require("../domain/adicao");
const funcaoDeSubtracao = require("../domain/subtracao");
const funcaoDeMultiplicacao = require("../domain/multiplicacao");
const funcaoDeDivisao = require("../domain/divisao");
const funcaoDePorcentagem = require("../domain/porcentagem");
const funcaoDeRaiz = require("../domain/raiz");
const logger = require('../commons/error-logger');

const controllerOperacao = async(primeiroValor, operador, segundoValor) => {
    try {
        const actions = {
            '+': (a, b) => funcaoDeAdicao(a, b),
            '-': (a, b) => funcaoDeSubtracao(a, b),
            '*': (a, b) => funcaoDeMultiplicacao(a, b),
            '/': (a, b) => funcaoDeDivisao(a, b),
            '%': (a, b) => funcaoDePorcentagem(a, b),
            '√': (a, b) => funcaoDeRaiz(a, b),
        };
        return actions[operador]?.(primeiroValor, segundoValor) ?? "Calculo não reconhecido";
    } catch (erro) {
        const erroControllerOperacao = await httpStatusResponse(500, (erro.message), 'controller-operacao');
        logger.loggerComum.log('error', erro.message);  
        return erroControllerOperacao;
    };
};
module.exports = controllerOperacao;