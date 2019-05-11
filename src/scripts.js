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

  function loadDailyActivity(activity) {
    let today = activity.activityData[activity.activityData.length - 1].date
    let activeTime = activity.getActiveTimeByDate(today)
    let milesWalked = activity.getMilesWalked(today);
    loadDailyStepGoal(today)
    $(".active__day__time__info").append(`<img src = '../images/stopwatch.svg' class = 'stopwatch'>
      <p>Active Time: ${activeTime} minutes</p>`);
    $(".active__day__miles__info").append(`<img src = '../images/footsteps.svg' class = 'footsteps'>
    <p>Miles Walked: ${milesWalked}</p>`);
  }
  
  function loadDailyStepGoal(today) {
    let steps = activity.getSteps(today)
    let stepGoal = activity.getStepGoal(today) === true ? 
      'You have reached your step goal!': 'Keep on walking! You have not reached your goal!'
    $(".active__day__goal__info").append(`<p>${stepGoal}</p>`);
    $(".active__day__goal__info").append(`<p>You walked ${steps} steps today</p>`);
    let dailyPercent = activity.getStepGoalPercentage(today)
    $("#progress__bar__active__goal").css( "width", dailyPercent ) 
    $("#active__goal__percentage").text(dailyPercent)
  }
  function loadWeeklyActivity(activity) {
    let today = activity.activityData[activity.activityData.length - 1].date
    let weeklyAverage = activity.getWeeklyAvgActive(today)
    $(".active__week__tab").append(`<p>Weekly Average Active Time:${weeklyAverage}</p>`);
    $(".active__week__tab").hide()
  }
  loadDailyActivity(activity)
  loadWeeklyActivity(activity)
  
  $( ".current--active--box" ).click(function() {
    $(".active__day__tab").toggle()
    $(".active__week__tab").toggle()
  });




 

});
