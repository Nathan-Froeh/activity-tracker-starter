$(document).ready(() => {
  let userRepository = new UserRepository(userData)
  let user;

  function makeRandomUser() {
    let randomNumber = Math.floor(Math.random() * userData.length - 1)
    user = new User(userData[randomNumber])
    getHydrationData(randomNumber)
    getActivityData(randomNumber, user)
  }

  makeRandomUser() 
  console.log(user)
  $('.welcome__name').text(user.getFirstName())
  $('.user__address').text(user.userData.address)
  $('.user__email').text(user.userData.email)
  $('.user__stride__length').text(user.userData.strideLength)
  $('.user__step__goal').text(user.userData.dailyStepGoal)

  function getHydrationData(id) {
    let data = hydrationData.find(x => x.userID === id + 1)
    hydration = new Hydration(data.hydrationData)
  }
  function getActivityData(id) {
    let data = activityData.find(x => x.userID === id + 1)
    activity = new Activity(data.activityData)
  }

  $(".hide__user__card").click(function() {
    $('.user--card').slideToggle('slow')
  })



});