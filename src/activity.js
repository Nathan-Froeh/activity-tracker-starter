class Activity {
  constructor(activityData, user) {
    this.activityData = activityData
    this.user = user
  }
  getMilesWalked() {
    //should return a users miles walked on specific date
  }

  getActiveTimeByDate() {
    //should return a users active time on specific date
  }
  getWeeklyAvgActive() {
    //should return a users average active time per a week
  }
  getStepGoal() {
    //should return whether a user reached their step goal on specific date
  }
  getTopClimbingRecord() {
    //should return top climbing date for a user
  }
}
if (module !== undefined) {
  module.exports = Activity;
}