const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/activityRepository');
const testUser = require('../src/testUser');


describe('Activity Repository', function() {
  let activityRepository;
  beforeEach(() => {
    activityRepository = new ActivityRepository(testUser.testActivityData);
    
  })

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function')
  })

  it('should be a new instance of ActivityRepository', () => {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  })

  it('should hold the Activity Data', () => {
    expect(activityRepository.activityData).to.deep.equal(testUser.testActivityData);
  })

  it('should hold the Activity Data', () => {
    expect(activityRepository.activityData).to.deep.equal(testUser.testActivityData);
  })

  it('should tell the average user stairs climb on any given day', () => {
    expect(activityRepository.calcAvgStairClimb('07/05/2019')).to.equal(16);
    expect(activityRepository.calcAvgStairClimb('11/05/2019')).to.equal(17);
  })

  it('should tell the average user stairs climb on any given day', () => {
    expect(activityRepository.calcAvgStairClimb('07/05/2019')).to.equal(16);
    expect(activityRepository.calcAvgStairClimb('11/05/2019')).to.equal(17);
  })

  it('should tell the average user steps on any given day', () => {
    expect(activityRepository.calcAvgSteps('07/05/2019')).to.equal(7452);
    expect(activityRepository.calcAvgSteps('11/05/2019')).to.equal(3483);
  })

  it('should tell the average user steps on any given day', () => {
    expect(activityRepository.calcAvgActive('07/05/2019')).to.equal(96);
    expect(activityRepository.calcAvgActive('11/05/2019')).to.equal(222);
  })
})