class UserRepository {
  constructor(users) {
    this.users = users;
  }

  getUser() {
    console.log(this.users)
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