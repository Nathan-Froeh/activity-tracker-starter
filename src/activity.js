class Activity {
  constructor(activityData, user) {
    this.activityData = activityData
    this.user = user
  }

  getMilesWalked(date) {
    let milesWalked = this.activityData.find(x => x.date === date).numSteps 
    * this.user.userData.strideLength * 0.00018939
    return milesWalked.toFixed(2)
  }

  getActiveTimeByDate(date) {
    //should return a users active time on specific date
    return this.activityData.find(x => x.date === date).minutesActive 
  }
  getWeeklyAvgActive(date) {
    //should return a users average active time per a week
    let index = this.activityData.findIndex(x => x.date === date)
    let weeksActivity = this.activityData.slice(index - 6, index + 1).map(day => day.minutesActive)
    return Math.floor(weeksActivity.reduce((accu, day) => accu += day) / 7)
  }
  getStepGoal(date) {
    //should return whether a user reached their step goal on specific date
    let daySteps = this.activityData.find(x => x.date === date).numSteps 
    return this.user.userData.dailyStepGoal < daySteps
  }
  getExceedStepGoal() {
    //should return dates that user passed goals
    let daysOverGoal = this.activityData.filter(day => day.numSteps > this.user.userData.dailyStepGoal)
    return daysOverGoal.map(day => day.date)
  }
  getTopClimbingRecord() {
    //should return top climbing date for a user'
    return this.activityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)[0].date
  }

}
if (typeof module !== 'undefined') {
  module.exports = Activity;
}