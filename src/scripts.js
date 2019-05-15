// $(document).ready(() => {
let userRepository = new UserRepository(userData)
let user;
let hydration;
let sleep;
let activity;
let activityRepository = new ActivityRepository(activityData)
let challenge;


function makeRandomUser() {
  let randomNumber = Math.floor(Math.random() * userData.length)
  user = new User(userData[randomNumber])
  getHydrationData(randomNumber)
  getSleepData(randomNumber)
  getActivityData(randomNumber)
  getChallengeData()
}

makeRandomUser() 
// console.log('user ', user)
// console.log('hydration ', hydration)
// console.log('sleep ', sleep)
// console.log('activity ', activity)

$('.welcome__name').text(user.getFirstName())
$('.user__address').text(user.userData.address)
$('.user__email').text(user.userData.email)
$('.user__stride__length').text(user.userData.strideLength)
$('.user__step__goal').text(user.userData.dailyStepGoal)

function getHydrationData(id) {
  const data = hydrationData.find(x => x.userID === id + 1)
  hydration = new Hydration(data.hydrationData)
  // console.log('hydration data ', data)
}
function getSleepData(id) {
  const data = sleepData.find(x => x.userID === id + 1)
  sleep = new Sleep(data.sleepData)
  // console.log('sleep data ', data)
}
function getActivityData(id) {
  const data = activityData.find(x => x.userID === id + 1)
  activity = new Activity(data.activityData, user)
}

function getChallengeData() {
  challenge = new Challenge(activityData)
}

// function getHydrationData(id) {
//   const data = hydrationData.find(x => x.userID === id + 1)
//   hydration = new Hydration(data.hydrationData)
// }

// function getActivityData(id) {
//   const data = activityData.find(x => x.userID === id + 1)
//   activity = new Activity(data.activityData, user)
// }


$(".hide__user__card").click(function() {
  $('.user--card').slideToggle('slow')
})
  
function loadHydration(hydration) {
  let today = hydration.hydrationData[hydration.hydrationData.length - 1].date
  let allTimeHydration = hydration.calcAllTimeHydration() 
  let dateHydration = hydration.calcDateHydration(today)
  let weeklyHydration = hydration.calcWeeklyHydration(today)
  $('.water--box').append(`<p>Today you drank ${dateHydration} ounces</p>`);
  $('.water--box').append(`<p>On average you drink ${allTimeHydration} ounces</p>`);
  // $('.water--box').append(`<p>This week you drank ${weeklyHydration} ounces</p>`);
}
loadHydration(hydration)

function loadDailyActivity(activity) {
  let today = activity.activityData[activity.activityData.length - 1].date
  let activeTime = activity.getActiveTimeByDate(today)
  let milesWalked = activity.getMilesWalked(today);
  loadDailyStepGoal(today)
  $('.active__day__time__info').append(`<img src = '../images/stopwatch.svg' class = 'stopwatch'>
      <p>Active Time: ${activeTime} minutes</p>`);
  $('.active__day__miles__info').append(`<img src = '../images/footsteps.svg' class = 'footsteps'>
    <p>Miles Walked: ${milesWalked}</p>`);
}
  
function loadDailyStepGoal(today) {
  let steps = activity.getSteps(today)
  let stepGoal = activity.getStepGoal(today) === true ? 
    'You have reached your step goal!': 'Keep on walking! You have not reached your goal!'
  $('.active__day__goal__info').append(`<p>${stepGoal}</p>`);
  $('.active__day__goal__info').append(`<p>You walked <b>${steps} </b>steps today.</p>`);

  let dailyPercent = activity.getStepGoalPercentage(today) > 100 ? 100 : activity.getStepGoalPercentage(today)
  // $('#progress__bar__active__goal').css( "width", dailyPercent ) 
  // $('#active__goal__percentage').text(dailyPercent)
  $('#progress__bar__activity').val(dailyPercent)
  $('#step__percentage').append(`${activity.getStepGoalPercentage(today)}%`)
}
function loadWeeklyActivity(activity) {
  let today = activity.activityData[activity.activityData.length - 1].date
  let weeklyAverage = activity.getWeeklyAvgActive(today)
  let weeklyData = createWeeklyData(today)
  $('.active__week__tab').hide()
  $('.active__week__tab').append(`<p>Weekly Average Active Time:${weeklyAverage}</p>`);
  $('.active__week__tab').append(`<table class = "weekly--active"><tr><th><b>Day</b><th>Step</th>
    <th>Minutes</th><th>Stairs</th>${weeklyData}</table>`);
    // $('#activity-repo-flightsOfStairs').hide()
  }
  function createWeeklyData(day) {
    let weeksActivityData = activity.getWeeklyActive(day)
    let sortedData = weeksActivityData.map((day, index) => {
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${day.numSteps} </td>
          <td>${day.minutesActive}</td> 
          <td>${day.flightsOfStairs}</td>
        </tr>`
  })
  return sortedData.join(' ')
}

loadDailyActivity(activity)
loadWeeklyActivity(activity)
  
$( '.current--active--box' ).click(function() {
  $('.active__day__tab').toggle()
  $('.active__week__tab').toggle()
});

// $( '.average--active--box' ).click(function() {
//   $('#activity-repo-numsteps').toggle()
//   $('#activity-repo-active-time').toggle()
//   $('#activity-repo-flightsOfStairs').toggle()
// });


function loadSleep(sleep) {
  let today = sleep.sleepData[sleep.sleepData.length - 1].date
  let sleepTime = sleep.calcSleepTime()
  let sleepQuality = sleep.calcSleepQuality()
  let sleepTimeDate = sleep.getSleepTimeByDate(today)
  let sleepQualityDate = sleep.getSleepQualityByDate(today)
  let sleepTimeWeek = sleep.getSleepTimeByWeek(today)
  let sleepQualityWeek = sleep.getSleepQulityByWeek(today)
  $('.sleep--box').append(`<p>Sleep Time: ${sleepTime} hours<p>`)
  $('.sleep--box').append(`<p>Sleep Quality: ${sleepQuality} out of 5<p>`)
  $('.sleep--box').append(`<p>Sleep Time by Date: ${sleepTimeDate} hours<p>`)
  $('.sleep--box').append(`<p>Sleep Quality by Date: ${sleepQualityDate} hours<p>`)
  // $('.sleep--box').append(`<p>Your Average Sleep Time: ${sleepTimeWeek} hours<p>`)
  // $('.sleep--box').append(`<p>Your Average Sleep quality: ${sleepQualityWeek} out of 5<p>`)
  // console.log(today)
  // console.log(sleepTime)
}
loadSleep(sleep)

function loadChallenge() {
  challenge.generateChallengers(user, userRepository.users)
  let stuff = challenge.getChallengeResults(user, userRepository.users)
  // console.log(stuff)
  // let names = challenge.challengerNames
  // let stats = challenge.challengerStats
}
// $('.user--card').append(startEndDate)
// console.log(startEndDate)
loadChallenge()

  

