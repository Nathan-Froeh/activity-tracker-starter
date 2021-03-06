class UserRepository {
  constructor(users) {
    this.users = users;
  }

  getUser(id) {
    return this.users.filter(x => x.id === id)[0]
  }

  calcAvgStepGoal() {
    return this.users.reduce((acc, cur) => {
      return acc = acc + cur.dailyStepGoal / this.users.length
    }, 0)
  }

  calcAvgLocation() {
    let locations = this.users.map(user => {
      return user.address.split(' ')[user.address.split(' ').length -2]
    })
    let counts = locations.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).reduce((acc, cur) => counts[acc] > counts[cur] ? acc : cur);
  }

}

if (typeof module !== "undefined") {
  module.exports = UserRepository;
}