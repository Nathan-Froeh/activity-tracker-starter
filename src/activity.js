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
  getWeeklyActive(date) {
    //should return a users active time per  week
    let index = this.activityData.findIndex(x => x.date === date)
    let weeksActivity = this.activityData.slice(index - 6, index + 1)
    return weeksActivity
  }
  getWeeklyAvgActive(date) {
    //should return a users average active time per a week
    let index = this.activityData.findIndex(x => x.date === date)
    let weeksActivity = this.activityData.slice(index - 6, index + 1).map(day => day.minutesActive)
    let weeksAvgActivity = Math.floor(weeksActivity.reduce((accu, day) => accu += day) / 7)
    return weeksAvgActivity
  }
  getStepGoal(date) {
    //should return whether a user reached their step goal on specific date
    let daySteps = this.activityData.find(x => x.date === date).numSteps 
    return this.user.userData.dailyStepGoal < daySteps
  }

  getSteps(date) {
    //should return the number of steps taken
    let daySteps = this.activityData.find(x => x.date === date).numSteps 
    return daySteps
  }

  getStepGoalPercentage(date) {
    //should return whether a user reached their step goal on specific date
    let daySteps = this.activityData.find(x => x.date === date).numSteps 
    return `${Math.floor(daySteps / this.user.userData.dailyStepGoal * 100)}%`
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