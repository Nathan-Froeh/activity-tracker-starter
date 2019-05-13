class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData
  }
  calcAvgStairClimb(date) {
    let total = this.activityData.reduce((acc, user) => {
      let userDay = user.activityData.find(x => x.date === date)
      acc = acc + userDay.flightsOfStairs
      return acc 
    }, 0)
    return total / this.activityData.length
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}