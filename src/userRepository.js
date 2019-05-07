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
  }

  calcAvgLocation() {
    // What state are the most users from?
  }

}

module.exports = UserRepository;