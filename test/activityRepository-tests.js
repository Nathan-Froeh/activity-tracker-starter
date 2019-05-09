const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/activity-repository');
const testUser = require('../src/testUser');


describe('User', function() {
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

  it.only('should hold the Activity Data', () => {
    expect(activityRepository.activityData).to.deep.equal(testUser.testActivityData);
  })


})