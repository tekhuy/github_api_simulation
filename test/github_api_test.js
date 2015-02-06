var chai = require('chai');
var expect = chai.expect;

var host = 'http://localhost:9999';

describe('Github API simulation', function() {

  before(function() {
    casper.start(host);
  }); 

  it('should return user data in json format', function() {
    casper.then(function(response) {
      expect('body').to.include.text('Enter a Github username');
    });
  });

  it('should return JSON for a particular user', function() {
    casper.thenOpen(host + '/users/tansaku', function(response) {
      expect(response.headers.get('Access-Control-Allow-Origin')).to.equal('*');
      expect(response.headers.get('Content-Type')).to.equal('application/json; charset=utf-8');
      expect('body').to.have.text('{"login":"tansaku", "html_url":"147", "public_repos":"216", "followers":"147", "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3"}');
    });
  });

  it('should return JSON for another user', function() {
    casper.thenOpen(host + '/users/henrygarner', function(response) {
      expect(response.headers.get('Access-Control-Allow-Origin')).to.equal('*');
      expect(response.headers.get('Content-Type')).to.equal('application/json; charset=utf-8');
      expect('body').to.have.text('{"login":"henrygarner", "html_url":"24", "public_repos":"77", "followers":"24", "avatar_url": "https://avatars.githubusercontent.com/u/24540?v=3"}');
    });
  });

});