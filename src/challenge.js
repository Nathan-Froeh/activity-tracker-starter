if (typeof module !== undefined) {
  var chai = require('chai');
  var expect = chai.expect;
  var testUser = require('../src/testUser');
  var User = require('../src/User');
  var Activity = require('../src/Activity')
  var fullUserList = require('../data/users');
  var fullActiveList = require('../data/activity');

}

class Challenge {
  constructor() {
    this.challengers = [];
    this.challengerNames = [];
    this.challengerStats = [];
  }
  generateChallengers(users) {
    let userList = [...users]
    let shuffled = this.shuffleUserId(userList)
    // console.log(user.userData.id)
    this.challengers = shuffled.reduce((acc, cur) => {
      if (cur !== user.userData.id && acc.length < 4) {
        acc.push(cur)
      }
      return acc
    }, [])
    // console.log(this.challengers)
  }

  shuffleUserId(userList) {
    var shuffle = function (userList) {
      var currentIndex = userList.length;
      var temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = userList[currentIndex];
        userList[currentIndex] = userList[randomIndex];
        userList[randomIndex] = temporaryValue;
      }
      return userList;
    }
    return shuffle(userList.map(x => x.id))
  }

  getChallengeResults(user) {
    let contestants = [user.userData.id, ...this.challengers]
    this.genChallenger(contestants)
    this.genActiveData(contestants)
  }


  genChallenger(contestants) {
    let userInfo = []
    contestants.forEach(x => {
      fullUserList.filter(R => R.id === x ? userInfo.push(R) : null)
    })
    // console.log(userInfo)
    this.getChallengerNames(userInfo)
  }
  getChallengerNames(userInfo) {
    userInfo.forEach(x => {
      let user = new User(x).getFirstName()
      this.challengerNames.push(user)
    })
    console.log(this.challengerNames)
  }

  genActiveData(contestants) {
    let activityInfo = []
    contestants.forEach(x => {
      fullActiveList.filter(R => R.userID === x ? activityInfo.push(R) : null)
    })
    // console.log(activityInfo)
    this.getChallengerStats(activityInfo)
  }

  getChallengerStats(activityInfo) {
    activityInfo.forEach(x => {
      let user = new User(x)
      let activity = new Activity(x.activityData, user)
      let week = activity.getWeeklyActive('13/08/2019')
      let total = week.reduce((acc, cur) => (acc = acc + cur.numSteps), 0)
      this.challengerStats.push(total)
      console.log(total)
    })
  }

  //I need each user object, users activity data, date

  //instantiate user
  //instantiate Activity with today and current user
  //return names of each challenger
  //getWeeklyActive(today) for that user and repeat per challenger
}


// design a step challenge between friends
// assign 4 random friends form the group
// show step count for the last 7 days
// show winner of step challenge


module.exports = Challenge

