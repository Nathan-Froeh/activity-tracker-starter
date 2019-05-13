class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData
  }

  calcAvgStairClimb(date) {
    let total = this.activityData.reduce((acc, user) => {
      let userDay = user.activityData.find(x => x.date === date)
      return acc + userDay.flightsOfStairs
    }, 0)
    return total / this.activityData.length
  }

  calcAvgSteps(date) {
    let total = this.activityData.reduce((acc, user) => {
      let userDay = user.activityData.find(x => x.date === date)
      return acc + userDay.numSteps
    }, 0)
    return Math.floor(total / this.activityData.length)
  }

  calcAvgActive(date) {
    let total = this.activityData.reduce((acc, user) => {
      let userDay = user.activityData.find(x => x.date === date)
      return acc + userDay.minutesActive
    }, 0)
    return Math.floor(total / this.activityData.length)
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}