const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const testUser = require('../src/testUser');
const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {
  let userRepository;
  beforeEach(() => {
    userRepository = new UserRepository();
  })

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function')
  })

  it('should be a new instance of User', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it.skip('should be a new instance of User', () => {
    expect(user.userData).to.deep.equal(testPerson);
  })



})