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

  getSleepTimeByDate() {
    // how many hours they slept for a specific day 
  }

  getSleepQualityByDate() {
    // their sleep quality for a specific day
  }

  getSleepTimeByWeek() {
    // [how many hours slept each day over the course of a given week] 
  }

  getSleepQulityByWeek() {
    // [their sleep quality each day over the course of a given week] 
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