const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../app.js');

const Book = require('../models/book');


describe('API', () => {

  let book;

  before(done=>{
    Book.create({title: 'My title', author: 'Random Author', release_year: 2018, category: 'Education'}, (error, result) => {
      book = result;
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

    it('should returns book created', done => {
      chai.request(app).get('/api/books')
        .end((error, response) => {
          expect(response.body.book[0].title).to.be.equal('My title');
          expect(response.body.book[0].author).to.be.equal('Random Author');
          expect(response.body.book[0].release_year).to.be.equal(2018);
          expect(response.body.book[0].category).to.be.equal('Education');
          done();
        });
    });
  });

  describe('#GET /api/books/:id', ()=> {
    it('should return status code 200', done => {
        const id = book._id;
        chai.request(app).get(`/api/books/${id}`)
          .end((error, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.ok).to.be.true;
          });
      done();
    });
  });

  describe('#PUT /api/books/:id', () => {
    it('should return a status code 200', done => {
        const id = book._id;
        chai.request(app).put(`/api/books/${id}`)
          .end((error, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.ok).to.be.true;
          });
      done();
    });

    it('should updates the book', done => {
        const id = book._id;
        chai.request(app).put(`/api/books/${id}`)
          .end((error, response) => {
            Book.update({ _id: id }, { title: 'My updated title' }, (error, result) => {
              // console.log(result);
              expect(result.ok).to.be.equal(1);
              expect(result.nModified).to.be.equal(1);
              expect(result.n).to.be.equal(1);
            });
          });
      done();      
    });
  });

  describe('#DELETE /api/books/:id', () =>{
    it('deletes specific book', done => {
        const id = book._id;
        chai.request(app).delete(`/api/books/${id}`)
          .end((error, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.ok).to.be.true;
          });
      done(); 
    });
  });

  after(done => {
    Book.remove({}, error => {
      if(error)
        console.log(error)
    });
    done();
  });

});