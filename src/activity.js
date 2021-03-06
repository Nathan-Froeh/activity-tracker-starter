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
  getStairsClimbByDate(date) {
    return this.activityData.find(x => x.date === date).flightsOfStairs 
  }

  getActiveTimeByDate(date) {
    return this.activityData.find(x => x.date === date).minutesActive 
  }
  getWeeklyActive(date) {
    let index = this.activityData.findIndex(x => x.date === date)
    let weeksActivity = this.activityData.slice(index - 6, index + 1)
    return weeksActivity
  }
  getWeeklyAvgActive(date) {
    let index = this.activityData.findIndex(x => x.date === date)
    let weeksActivity = this.activityData.slice(index - 6, index + 1).map(day => day.minutesActive)
    let weeksAvgActivity = Math.floor(weeksActivity.reduce((accu, day) => accu += day) / 7)
    return weeksAvgActivity
  }
  getStepGoal(date) {
    let daySteps = this.activityData.find(x => x.date === date).numSteps 
    return this.user.userData.dailyStepGoal < daySteps
  }

  getSteps(date) {
    let daySteps = this.activityData.find(x => x.date === date).numSteps 
    return daySteps
  }

  getStepGoalPercentage(date) {
    let daySteps = this.getSteps(date)
    return `${Math.floor(daySteps / this.user.userData.dailyStepGoal * 100)}`
  }

  getExceedStepGoal() {
    let daysOverGoal = this.activityData.filter(day => day.numSteps > this.user.userData.dailyStepGoal)
    return daysOverGoal.map(day => day.date)
  }
  getTopClimbingRecord() {
    return this.activityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)[0].date
  }

  getStepTrend() {
    let allTrends = []
    let currentTrend = []
    this.activityData.forEach((day) => {
      if (currentTrend.length === 0 || currentTrend[currentTrend.length - 1].numSteps < day.numSteps) {
        currentTrend.push({"date": day.date, "numSteps": day.numSteps})
      }  else if (currentTrend.length > 3) {
        allTrends.push(currentTrend)
        currentTrend = []
      } else {
        currentTrend = []
      }
    })
    return allTrends
  }
}


if (typeof module !== 'undefined') {
  module.exports = Activity;
}