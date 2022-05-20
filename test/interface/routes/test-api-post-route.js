const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../../server');


chai.use(chaiHttp);

describe('/API', () => {
    it('it should not POST a book without pages field', async() => {
        let dados = {
            primeiroValor: 2,
            operador: "+",
            segundoValor: 21
        }
        const response = await chai.request(app)
        .post('/api')
        .send(dados);
        expect(response.statusCode).to.equal(200);
        expect(response.text).to.equal('23.000000000000000');
    });
});