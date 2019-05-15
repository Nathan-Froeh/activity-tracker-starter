class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData
  }

  calcAllTimeHydration() {
    let total = this.hydrationData.reduce((acc, cur) => {
      return acc = acc + cur.numOunces
    }, 0)
    return Math.round(total / this.hydrationData.length)
  }

  calcDateHydration(date) {
    return this.hydrationData.find(x => x.date === date).numOunces;
  }

  calcWeeklyHydration(date) {
    let index = this.hydrationData.findIndex(x => x.date === date)
    let stuff = this.hydrationData.slice(index - 6, index + 1) 
    return stuff.map(x => x.numOunces)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}