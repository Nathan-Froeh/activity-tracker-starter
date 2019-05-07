class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData
  }

  calcAllTimeHydration() {
    // the average fluid ounces consumed per day for all time
    let total = this.hydrationData.reduce((acc, cur) => {
      return acc = acc + cur.numOunces
    }, 0)
    return Math.round(total / this.hydrationData.length)
  }

  calcDateHydration() {
    // For a user, how many fluid ounces they consumed for a specific day
  }

  calcWeeklyHydration() {
    // how many fluid ounces of water consumed each day over the course of a week
  }

}
module.exports = Hydration;