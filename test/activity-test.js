const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const testUser = require('../src/testUser');
const Activity = require('../src/Activity');

const testPerson = {
  "id": 1,
  "name": "Nyasia Weber",
  "address": "270 August Meadows, Maribelside SD 36129",
  "email": "Jordane_Schultz@yahoo.com",
  "strideLength": 4.7,
  "dailyStepGoal": 8000
}

describe('Activity', function() {
  let user;
  let activity;
  beforeEach(() => {
    user = new User(testUser.testUserData[0]);
    activity = new Activity(testUser.testActivityData[0].activityData, user)
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function')
  })

  it('should be a new instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  })

  it('should hold the Activity Data', () => {
    expect(activity.activityData).to.eql(testUser.testActivityData[0].activityData);
  })

  it('should return a users miles walked on specific date', () => {
    expect(activity.getMilesWalked("08/05/2019")).to.equal(2387 * 4.7 * 0.00018939)
    expect(activity.getMilesWalked("14/05/2019")).to.equal(3338 * 4.7 * 0.00018939)
  })

  it('should return a users active time on specific date', () => {
    expect(activity.getActiveTimeByDate("08/05/2019")).to.equal(179)
    expect(activity.getActiveTimeByDate("14/05/2019")).to.equal(142)
  })

  it('should return a users average active time per a week', () => {
    expect(activity.getWeeklyAvgActive("07/05/2019")).to.equal(186)
  })
  it('should return whether a user reached their step goal on specific date', () => {
    expect(activity.getStepGoal("07/05/2019")).to.equal(false)
    expect(activity.getStepGoal("10/05/2019")).to.equal(true)
  })
  it('should return dates that user passed goals', () => {
    expect(activity.getExceedStepGoal()).to.deep.equal(["10/05/2019", "12/05/2019", "15/05/2019"])
  })
  it('should return top climbing date for a user', () => {
    expect(activity.getTopClimbingRecord()).to.equal("06/05/2019")
  })
  it('for all users, should return avg of stairs climbed for spec date', () => {
    
  })
  it('for all users, should return avg of stairs climbed for spec date', () => {
    
  })


})