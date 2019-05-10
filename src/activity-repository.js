class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData
  }
  calcAvgStairClimb(date) {
    let total = this.activityData.reduce((acc, user) => {
      let userDay = user.activityData.find(x => x.date === date)
      console.log(`inside calcAvgStairClimbuserDay)
      console.log(userDay.flightsOfStairs)
      console.log(this.activityData.length)
      return acc + userDay.flightsOfStairs / this.activityData.length
    }, 0)
    console.log(total)
    return total
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}