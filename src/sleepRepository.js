
class SleepRepository {
  constructor(users) {
    this.users = users;
  }

  calcTotalUserSleepQuality() {
    // For all users, the average sleep quality
    let total = this.users.reduce((acc, cur) => {
      cur.sleepData.forEach(x => acc = acc + x.sleepQuality)
      return acc
    }, 0) 
    return Number((total / 40).toFixed(1))
  }

  calcTopQualitySleepWeek(date) {
    // Find all users who average a sleep quality greater than 3 for a given week
    let total = this.users.reduce((acc, cur) => {
      let day = cur.sleepData.findIndex(x => x.date === date)
      let week = cur.sleepData.slice(day, day + 7)
      acc.push(Number((week.reduce((accu, curr) => (
        accu = accu + curr.sleepQuality
      ), 0) / 7).toFixed(1)))
      return acc
    }, []) 
    return this.getTopQualityIndex(total)
  }

  getTopQualityIndex(total) {
    let topQuality = []
    total.forEach((x, i) => x >= 3 ?  topQuality.push(i + 1) : null)
    return topQuality
  }

  calcLongestSleepWeek(date) {
    // find the users who slept the most number of hours (one or more if they tied)
    let people = this.users.reduce((acc, cur) => {
      let day = cur.sleepData.findIndex(x => x.date === date)
      let week = cur.sleepData.slice(day, day + 7)
      acc.push(Number((week.reduce((accu, curr) => (
        accu = accu + curr.hoursSlept
      ), 0) / 7).toFixed(1)))
      return acc
    }, [])
    return this.getLongestSleeper(people)
  }

  getLongestSleeper(people) {
    console.log(people)
    return people.indexOf(people.reduce((acc, cur) => acc > cur ? acc : cur)) + 1
  }

  calcEfficientSleep() {
    // [find top 5 best sleeper (hours * quality) / days] and rating

    
  }
}

if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}

