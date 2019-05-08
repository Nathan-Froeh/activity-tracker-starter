const chai = require('chai');
const expect = chai.expect;

const testUser = require('../src/testUser');
const Sleep = require('../src/Sleep');

describe('Sleep', function() {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep(testUser.testSleepData[0].sleepData);
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function')
  })

  it('should be a new instance of User', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should be instantiated with a users sleep data', () => {
    expect(sleep.sleepData).to.deep.equal(testUser.testSleepData[0].sleepData)
  })

  it('should return total average hours slept per day', () => {
    expect(sleep.calcSleepTime()).to.equal(8.4)
  })

  it('should return total average sleep quality per day', () => {
    expect(sleep.calcSleepQuality()).to.equal(3.3)
  })




})