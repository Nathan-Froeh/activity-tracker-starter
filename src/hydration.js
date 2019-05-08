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

  calcDateHydration(date) {
    // For a user, how many fluid ounces they consumed for a specific day
    return this.hydrationData.find(x => x.date === date).numOunces;
  }

  calcWeeklyHydration(date) {
    // how many fluid ounces of water consumed each day over the course of a week
    let index = this.hydrationData.findIndex(x => x.date === date)
    let stuff = this.hydrationData.slice(index, index + 7)
    return stuff.map(x => x.numOunces)
  }

}
module.exports = Hydration;