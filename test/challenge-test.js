
if(typeof module !== undefined) {
  var chai = require('chai');
  var expect = chai.expect;
  var testUser = require('../src/testUser');
  var Challenge = require('../src/Challenge');
  }

describe('Challenge', function() {
  let challenge;
  beforeEach(() => {
    challenge = new Challenge([1, 4]);
  })

  it('should be a function', () => {
    expect(Challenge).to.be.a('function')
  })

  it('should be a new instance of User', () => {
    expect(challenge).to.be.an.instanceof(Challenge);
  })

  it('should be instantiated with an array', () => {
    expect(challenge.challengers).to.be.an('array')
  })

  
})