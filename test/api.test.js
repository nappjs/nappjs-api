const napp = require('nappjs').NewNappJS();
const path = require('path');
const supertest = require('supertest');

let test = null;

describe('api', () => {
  before(async () => {
    napp.addMiddleware('test', path.join(__dirname, '../index'));
    await napp.load();
    let middleware = napp.getService('test');
    test = supertest(middleware.app);
  });

  it('should create endpoint', () => {
    return test.get('/').expect(404);
  });

  it('should respond to healthcheck', () => {
    return test.get('/healthcheck').expect(200);
  });
});
