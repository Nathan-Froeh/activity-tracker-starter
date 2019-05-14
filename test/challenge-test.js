
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

  it('challengers should not include current user id', () => {
    challenge.generateChallengers(testUser.testUserData)
    expect(challenge.challengers).to.not.include(1)
    challenge.generateChallengers(fullUserList)
    expect(challenge.challengers).to.not.include(1)
  })

  it('should return array with the total steps for users in challenge', () => {
    challenge.challengers = [2, 3, 4]
    challenge.getChallengeResults(user)
    expect(challenge.challengerNames).to.deep.equal(
      ['Nyasia', 'Shayne', 'Cleo', 'Elaina'])
    expect(challenge.challengerStats).to.eql([56391, 54570, 65386, 66258])
  })


})
