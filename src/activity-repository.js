class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData
  }
  calcAvgStairClimb(date) {
    let total = this.activityData.reduce((acc, user) => {
      let userDay = user.activityData.find(x => x.date === date)
      return acc + userDay.flightsOfStairs
    }, 0) 
    return total 
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}