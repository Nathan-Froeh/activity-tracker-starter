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
    activity = new Activity(testUser.testActivityData[0], user)
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function')
  })

  it('should be a new instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  })

  it('should hold the Activity Data', () => {
    expect(activity.activityData).to.eql(testUser.testActivityData[0]);
  })

  it('should return miles walked on specific date', () => {
    expect(activity.getMilesWalked).to.equal();
  })

})