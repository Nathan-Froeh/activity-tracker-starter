class Activity {
  constructor(activityData, user) {
    this.activityData = activityData
    this.user = user
  }

  getMilesWalked(date) {
    return this.activityData.find(x => x.date === date).numSteps 
    * this.user.userData.strideLength * 0.00018939
  }

  getActiveTimeByDate(date) {
    return this.activityData.find(x => x.date === date).minutesActive 
    //should return a users active time on specific date
  }
  getWeeklyAvgActive(date) {
    //should return a users average active time per a week
    let index = this.activityData.findIndex(x => x.date === date)
    let weeksActivity = this.activityData.slice(index, index + 7).map(day => day.minutesActive)
    return Math.floor(weeksActivity.reduce((accu, day) => accu += day) / 7)
  }
  getStepGoal() {
    //should return whether a user reached their step goal on specific date
  }
  getExceedGoal() {
    //should return dates that user passed goals
  }
  getTopClimbingRecord() {
    //should return top climbing date for a user
  }
  getAllUserAvgStepByDate() {
    //for all users, should return avg of stairs climbed for spec date
  }
}
if (module !== undefined) {
  module.exports = Activity;
}