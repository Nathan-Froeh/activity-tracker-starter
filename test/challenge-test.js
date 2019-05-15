
if (typeof module !== 'undefined') {
  var chai = require('chai');
  var expect = chai.expect;
  var testUser = require('../src/testUser');
  var Challenge = require('../src/Challenge');
  var User = require('../src/User');
  var userData = require('../data/users')
  var activityData = require('../data/activity');
  var Activity = require('../src/Activity');
  var UserRepository = require('../src/UserRepository');
}
// console.log(userData)
describe('Challenge', function() {
  let user;
  let userRepository;
  let activity;
  let challenge;
  beforeEach(() => {
    user = new User(testUser.testUserData[0])
    userRepository = new UserRepository(userData)
    activity = new Activity(activityData, user)
    challenge = new Challenge();
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
    challenge.generateChallengers(user, testUser.testUserData)
    expect(challenge.challengers.length).to.equal(3)
    challenge.generateChallengers(user, userRepository.users)
    expect(challenge.challengers.length).to.equal(4)
  })

  it('challengers should not include current user id', () => {
    challenge.generateChallengers(user, testUser.testUserData)
    expect(challenge.challengers).to.not.include(1)
    challenge.generateChallengers(user, userRepository.users)
    expect(challenge.challengers).to.not.include(1)
  })

  it('should return array with the total steps for users in challenge', () => {
    challenge.challengers = [2, 3, 4]
    challenge.getChallengeResults(user, userRepository.users)
    expect(challenge.challengerNames).to.deep.equal(
      ['Nyasia', 'Shayne', 'Cleo', 'Elaina'])
    expect(challenge.challengerStats).to.eql([56391, 54570, 65386, 66258])
  })


})
