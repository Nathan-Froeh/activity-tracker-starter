class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calcSleepTime() {
    let timeSlept = this.sleepData.reduce((acc, cur) => {
      return acc = acc + cur.hoursSlept
    }, 0)
    return Number((timeSlept / this.sleepData.length).toFixed(1))
  }

  calcSleepQuality() {
    let totalQuality = this.sleepData.reduce((acc, cur) => {
      return acc = acc + cur.sleepQuality
    }, 0)
    return Number((totalQuality / this.sleepData.length).toFixed(1))
  }

  getSleepTimeByDate(date) {
    return this.sleepData.find(x => x.date === date).hoursSlept;
  }

  getSleepQualityByDate(date) {
    return this.sleepData.find(x => x.date === date).sleepQuality;
  }

  getSleepTimeByWeek(date) {
    let index = this.sleepData.findIndex(x => x.date === date)
    let stuff = this.sleepData.slice(index - 6, index + 1)
    return stuff.map(x => x.hoursSlept)
  }

  getSleepQulityByWeek(date) {
    let index = this.sleepData.findIndex(x => x.date === date)
    let stuff = this.sleepData.slice(index - 6, index + 1)
    return stuff.map(x => x.sleepQuality)
  }

  getSleepDates(date) {
    let index = this.sleepData.findIndex(x => x.date === date)
    let stuff = this.sleepData.slice(index - 6, index + 1)
    return stuff.map(x => x.date)
  }

}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
