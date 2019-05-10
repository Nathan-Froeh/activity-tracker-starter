if (typeof module !== undefined) {
  var chai = require('chai');
  var expect = chai.expect;
  var testUser = require('../src/testUser');
  var SleepRepository = require('../src/SleepRepository');
}

describe('SleepRepository', function() {
  let sleepRepository;
  beforeEach(() => {
    sleepRepository = new SleepRepository(testUser.testSleepData);
  })
  
  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function')
  })
  
  it('should be a new instance of sleepRepository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  })

  it('should be instantiated with all users sleep data', () => {
    expect(sleepRepository.users).to.deep.equal(testUser.testSleepData)
  })

  it('should return the average sleep quality for all users', () => {
    expect(sleepRepository.calcTotalUserSleepQuality()).to.equal(3.1)
  })

  it('should return users who average sleep quality over 3 for a week', () => {
    expect(sleepRepository.calcTopQualitySleepWeek('06/05/2019'))
      .to.deep.equal([1, 2, 3, 4])
  })

  it('should return user with most sleep by specified week', () => {
    expect(sleepRepository.calcLongestSleepWeek('06/05/2019')).to.deep.equal(1)
  })

  it('should return top 5 most efficient sleepers in array', () => {
    
  })

})

//57.7
//52.6
//51.2
//52.7