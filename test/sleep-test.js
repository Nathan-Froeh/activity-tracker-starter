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

  it('should return hours slept by date', () => {
    expect(sleep.getSleepTimeByDate("06/05/2019")).to.equal(8)
    expect(sleep.getSleepTimeByDate("09/05/2019")).to.equal(4.5)
    expect(sleep.getSleepTimeByDate("15/05/2019")).to.equal(6.1)
  })

  it('should return sleep quality for a specific day', () => {
    expect(sleep.getSleepQualityByDate("06/05/2019")).to.equal(4.8)
    expect(sleep.getSleepQualityByDate("08/05/2019")).to.equal(1.9)
    expect(sleep.getSleepQualityByDate("14/05/2019")).to.equal(2)
  })

  it('should return an array of the last 7 days sleep time starting by given date', () => {
    expect(sleep.getSleepTimeByWeek("07/05/2019")).to.deep.equal([10.7, 8.1, 4.5, 10.7, 5.6, 10.1, 10.1])
  })

  it('should return an array of the last 7 days sleep time starting by given date', () => {
    expect(sleep.getSleepQulityByWeek("07/05/2019")).to.deep.equal([4.8, 1.9, 3.4, 4.3, 3.5, 1.7, 3.2])
  })




})