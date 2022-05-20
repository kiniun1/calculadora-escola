const funcaoDeAdicao = require("../domain/adicao");
const funcaoDeSubtracao = require("../domain/subtracao");
const funcaoDeMultiplicacao = require("../domain/multiplicacao");
const funcaoDeDivisao = require("../domain/divisao");
const funcaoDePorcentagem = require("../domain/porcentagem");
const funcaoDeRaiz = require("../domain/raiz");

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
        console.log(erro);
    }
};
module.exports = controllerOperacao;