const mathjs = require("mathjs");

const funcaoDeRaiz = async(radicando, indice) => {
    return mathjs.nthRoot(radicando, indice);
};
module.exports = funcaoDeRaiz;