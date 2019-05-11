const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/activity-repository');
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

  // it('should tell the average user stairs climb on any given day', () => {
  //   expect(activityRepository.calcAvgStairClimb('07/05/2019')).to.equal(16);
  //   expect(activityRepository.calcAvgStairClimb('07/11/2019')).to.equal(17);
  // })
})