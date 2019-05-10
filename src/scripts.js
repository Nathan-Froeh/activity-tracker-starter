$(document).ready(() => {
  let userRepository = new UserRepository(userData)
  let user;
  let activity;

  function getTodaysDate () {
    let today = new Date
    return `"${today.getDate()}/0${(today.getMonth() + 1)}/${today.getFullYear()}"`
  }

  function makeRandomUser() {
    let randomNumber = Math.floor(Math.random() * userData.length - 1)
    user = new User(userData[randomNumber])
    getHydrationData(randomNumber)
    getActivityData(randomNumber)
  }

  makeRandomUser() 
  console.log(user)
  console.log(activity)
  console.log(hydration)

  $('.welcome__name').text(user.getFirstName())
  $('.user__address').text(user.userData.address)
  $('.user__email').text(user.userData.email)
  $('.user__stride__length').text(user.userData.strideLength)
  $('.user__step__goal').text(user.userData.dailyStepGoal)

  function getHydrationData(id) {
    const data = hydrationData.find(x => x.userID === id + 1)
    hydration = new Hydration(data.hydrationData)
  }
  function getActivityData(id) {
    const data = activityData.find(x => x.userID === id + 1)
    activity = new Activity(data.activityData, user)
  }

  $(".hide__user__card").click(function() {
    $('.user--card').slideToggle('slow')
  })
  
  function loadHydration(hydration) {
    let today = hydration.hydrationData[hydration.hydrationData.length - 1].date
    let allTimeHydration = hydration.calcAllTimeHydration() 
    let dateHydration = hydration.calcDateHydration(today)
    let weeklyHydration = hydration.calcWeeklyHydration(today)
    $(".water--box").append(`<p>You drank ${dateHydration} ounces</p>`);
    $(".water--box").append(`<p>On average you drink ${allTimeHydration} ounces</p>`);
    $(".water--box").append(`<p>This week you drank ${weeklyHydration} ounces</p>`);
  }
  loadHydration(hydration)

  function loadActivity(activity) {
    let today = activity.activityData[activity.activityData.length - 1].date
    let stepGoal = activity.getStepGoal === true ? "You reached your step goal!" : "You have not reached your step goal, keep on walking!"
    let milesWalked = activity.getMilesWalked(today);
    let activeTime = activity.getActiveTimeByDate(today)
    let weeklyAverage = activity.getWeeklyAvgActive(today)
    $(".current--active--box").append(`<p>Active Time: ${activeTime} minutes</p>`);
    $(".current--active--box").append(`<p>Weekly Average Active Time:${weeklyAverage}</p>`);
    $(".current--active--box").append(`<p>Miles Walked: ${milesWalked}</p>`);
    $(".current--active--box").append(`<p>${stepGoal}</p>`);
  }
  loadActivity(activity)

 

});
