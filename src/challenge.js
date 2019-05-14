if (typeof module !== undefined) {
  var chai = require('chai');
  var expect = chai.expect;
  var testUser = require('../src/testUser');
  var User = require('../src/User');
}

class Challenge {
  constructor() {
    this.challengers = [];
  }
  generateChallengers(users) {
    let userList = [...users]
    let shuffled = this.shuffleUserId(userList)
    console.log(user.userData.id)
    this.challengers = shuffled.reduce((acc, cur) => {
      if (cur !== user.userData.id && acc.length < 4) {
        acc.push(cur)
      }
      return acc
    }, [])
    console.log(this.challengers)
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
}


// design a step challenge between friends
// assign 4 random friends form the group
// show step count for the last 7 days
// show winner of step challenge


module.exports = Challenge

