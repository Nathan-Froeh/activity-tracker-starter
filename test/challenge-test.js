
if(typeof module !== undefined) {
  var chai = require('chai');
  var expect = chai.expect;
  var testUser = require('../src/testUser');
  var Challenge = require('../src/Challenge');
  var User = require('../src/User');
  var fullUserList = require('../data/users')
}

describe('Challenge', function() {
  let challenge;
  beforeEach(() => {
    challenge = new Challenge();
    user = new User(testUser.testUserData[0])
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

  it('challengers should not have more than 4 friends', () => {
    challenge.generateChallengers(testUser.testUserData)
    expect(challenge.challengers.length).to.equal(3)
    challenge.generateChallengers(fullUserList)
    expect(challenge.challengers.length).to.equal(4)
  })


})