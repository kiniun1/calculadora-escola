const httpStatusResponse = async (codigo, mensagem, localDoErro) => ({
    statusCode: (codigo || 501),
    body: (mensagem || 'Existe parâmetro que não foi passado para resposta HTTP do Projeto'),
    localization: (localDoErro || 'Não foi encontrado o local do erro.')
   });
module.exports = httpStatusResponse;