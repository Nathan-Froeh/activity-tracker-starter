
class SleepRepository {
  constructor(users) {
    this.users = users;
  }

  calcTotalUserSleepQuality() {
    // For all users, the average sleep quality
    let count = 0;
    let total = this.users.reduce((acc, cur) => {
      cur.sleepData.forEach(x => {
        count++;
        return acc = acc + x.sleepQuality
      })
      return acc
    }, 0) 
    return Number((total / count).toFixed(1))
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
    // return this.getTopQualityIndex(total)
    return total
  }

  getTopQualityIndex(date) {
    let total = this.calcTopQualitySleepWeek(date)
    let topQuality = []
    total.forEach((x, i) => x >= 3 ?  topQuality.push(i + 1) : null)
    // console.log(total)
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
    return people;
  }

  getLongestSleeper(date) {
    // console.log(people)
    let people = this.calcLongestSleepWeek(date)
    return people.indexOf(people.reduce((acc, cur) => acc > cur ? acc : cur)) + 1
  }

  calcEfficientSleep(date) {
    // [find top 3 best sleeper (hours * quality) / days] and rating
    let percents = this.calcTopQualitySleepWeek(date).reduce((acc, cur, idx) => {
      acc.push(Number(((cur / this.calcLongestSleepWeek(date)[idx] * 2) * 100)
        .toFixed(2)))
      return acc;
    }, [])
    return this.getTopEfficient(percents)
  }
  getTopEfficient(percents) {
    let stuff = [...percents]
    let topThree = []
    stuff.sort((a, b) => b - a).splice(3, stuff.length - 3)
    percents.forEach((x, i) => {
      stuff.forEach(xx => xx === x ? topThree.push(i + 1) : null)
    })
    return topThree.filter(x => x)
  }
}

// sort the array into a new array
// take the first three values (slice)
// map through the first array and find the index of the number in the parent array and return it




if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}

