const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../app.js');

const Book = require('../models/book');

describe('API', () => {

  before(done=>{
    Book.create({title: 'My title', author: 'Random Author', release_year: 2018, category: 'Education'});

    console.log('creating books');
    done();
  });

  after(done => {
    Book.remove({}, error => {
      if(error)
        console.log(error)

      console.log('erasing books');
    });
    done();
  });

  describe('#GET /api/books', () => {

    it('should return status code 200', done => {
      chai.request(app).get('/api/books')
        .end((error, response) => {           
          expect(response.status).to.be.equal(200);
          expect(response.ok).to.be.true;
        });
      done();
    });

    it('should return book created', done => {
      chai.request(app).get('/api/books')
        .end((error, response) => {
          // console.log(response.body.book[0].title);
          expect(response.body.book[0].title).to.be.equal('My title');
          done();
        });
    });
  });
});