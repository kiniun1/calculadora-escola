const funcaoDeAdicao = async(...valores) => {
    return valores.reduce((acumulador, proximoValor) => acumulador + proximoValor);
};
module.exports = funcaoDeAdicao;