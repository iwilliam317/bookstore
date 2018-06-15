const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../app.js');

describe('API', () => {
  describe('#GET /api/books', () => {

    it('should return status code 200', done => {
      chai.request(app).get('/api/books')
        .end((error, response) => {
          expect(response.status).to.be(200);
          expect(response.ok).to.be.true;
        });
      done();
    });
  });
});