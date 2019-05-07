class UserRepository {
  constructor(users) {
    this.users = users;
  }

  getUser(id) {
    // console.log(this.users)
    return this.users.filter(x => x.id === id)[0]
    // Given a user’s ID, what is their user data?
  }

  calcAvgStepGoal() {
    // Average step goal amongst all users
    return this.users.reduce((acc, cur) => {
       return acc = acc + cur.dailyStepGoal / this.users.length
    }, 0)
  }

  calcAvgLocation() {
    // What state are the most users from?
  }

}

module.exports = UserRepository;