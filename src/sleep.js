class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calcSleepTime() {
    // the average number of hours slept per day
    let timeSlept = this.sleepData.reduce((acc, cur) => {
      return acc = acc + cur.hoursSlept
    }, 0)
    return Number((timeSlept / this.sleepData.length).toFixed(1))
  }

  calcSleepQuality() {
    // their average sleep quality per day over all time
    let totalQuality = this.sleepData.reduce((acc, cur) => {
      return acc = acc + cur.sleepQuality
    }, 0)
    return Number((totalQuality / this.sleepData.length).toFixed(1))
  }

  getSleepTimeByDate(date) {
    // how many hours they slept for a specific day 
    return this.sleepData.find(x => x.date === date).hoursSlept;
  }

  getSleepQualityByDate(date) {
    // their sleep quality for a specific day
    return this.sleepData.find(x => x.date === date).sleepQuality;
  }

  getSleepTimeByWeek(date) {
    // [how many hours slept each day over the course of a given week] 
    let index = this.sleepData.findIndex(x => x.date === date)
    let stuff = this.sleepData.slice(index, index + 7)
    return stuff.map(x => x.hoursSlept)
  }

  getSleepQulityByWeek(date) {
    // [their sleep quality each day over the course of a given week] 
    let index = this.sleepData.findIndex(x => x.date === date)
    let stuff = this.sleepData.slice(index, index + 7)
    return stuff.map(x => x.sleepQuality)
    
  }

  calcTotalUserSleepQuality() {
    // For all users, the average sleep quality
  }

  calcTopQualitySleepWeek() {
    // Find all users who average a sleep quality greater than 3 for a given week
  }

  calcLongestSleepWeek() {
    // find the users who slept the most number of hours (one or more if they tied)
  }

  calcEfficientSleep() {
    // [find top 5 best sleeper (hours * quality) / days] and rating
  }




}

module.exports = Sleep;