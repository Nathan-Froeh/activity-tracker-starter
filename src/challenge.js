if (typeof module !== undefined) {
  var chai = require('chai');
  var expect = chai.expect;
  var testUser = require('../src/testUser');
  var User = require('../src/User');
  var fullUserList = require('../data/users');
  var fullActiveList = require('../data/activity');
}

class Challenge {
  constructor() {
    this.challengers = [];
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
    this.genChallengers(user)
  }


  genChallengers(user) {
    let contestants = [user.userData.id, ...this.challengers]
    let userInfo = []
    let activityInfo = []
    contestants.forEach(x => {
      fullUserList.filter(r => r.id === x ? userInfo.push(r) : null)
      fullActiveList.filter(l => l.userID === x ? activityInfo.push(l) : null)
    })
    console.log(userInfo)
    console.log(activityInfo)
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

