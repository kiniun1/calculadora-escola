const mathjs = require("mathjs");

const funcaoDeRaiz = async(radicando, indice) => {
    return mathjs.round(mathjs.nthRoot(radicando, indice));
};
module.exports = funcaoDeRaiz;