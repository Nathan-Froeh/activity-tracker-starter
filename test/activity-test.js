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
    expect(activity.activityData).to.eql(testUser.testActivityData[0]);
  })

  it.only('should return a users miles walked on specific date', () => {
    expect(activity.getMilesWalked("08/05/2019")).to.equal(2387 * 4.7 * 0.00018939)
    expect(activity.getMilesWalked("14/05/2019")).to.equal(3338 * 4.7 * 0.00018939)
  })

  it('should return a users active time on specific date', () => {
    
  })

  it('should return a users average active time per a week', () => {
    
  })
  it('should return whether a user reached their step goal on specific date', () => {
    
  })
  it('should return dates that user passed goals', () => {
    
  })
  it('should return top climbing date for a user', () => {
    
  })
  it('for all users, should return avg of stairs climbed for spec date', () => {
    
  })
  it('for all users, should return avg of stairs climbed for spec date', () => {
    
  })


})