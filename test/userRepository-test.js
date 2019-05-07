const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const testUser = require('../src/testUser');
const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {
  let userRepository;
  beforeEach(() => {
    userRepository = new UserRepository(testUser.testUserData);
  })

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function')
  })

  it('should be a new instance of User', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it('should be instantiated with an array of user objects', () => {
    expect(userRepository.users).to.deep.equal(testUser.testUserData);
  })

  it('should return instance of user by id', () => {
    expect(userRepository.getUser(1)).to.equal(testUser.testUserData[0])
    expect(userRepository.getUser(2)).to.equal(testUser.testUserData[1])
  })

  it('should calculate total average step goal', () => {
    expect(userRepository.calcAvgStepGoal()).to.equal(7750)
  })

  it('should return average state of residence', () => {
    expect(userRepository.calcAvgLocation()).to.equal('SD')
  })


})

console.log(testUser.testUserData)