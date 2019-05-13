// $(document).ready(() => {
let userRepository = new UserRepository(userData)
let user;
let hydration;
let sleep;
let activity;

function makeRandomUser() {
  let randomNumber = Math.floor(Math.random() * userData.length)
  user = new User(userData[randomNumber])
  getHydrationData(randomNumber)
  getSleepData(randomNumber)
  getActivityData(randomNumber)
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
  console.log(today)
  // console.log(allTimeHydration)
  // console.log(dateHydration)
}
loadHydration(hydration)

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
  $('.sleep--box').append(`<p>Your Average Sleep quality: ${sleepQualityWeek} out of 5<p>`)
  // console.log(today)
  // console.log(sleepTime)
}
loadSleep(sleep)
  
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
  

// make function to automate dates
// find object by date entered
// assign a var to the array of sliced dates

let date = sleep.sleepData[sleep.sleepData.length - 1].date;
var ctx = document.getElementById('sleep-chart');
var sleepChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [`${sleep.getSleepDates(date)[0]}`, `${sleep.getSleepDates(date)[1]}`
      , `${sleep.getSleepDates(date)[2]}`, `${sleep.getSleepDates(date)[3]}`
      , `${sleep.getSleepDates(date)[4]}`, `${sleep.getSleepDates(date)[5]}`
      , `${sleep.getSleepDates(date)[6]}`],
    datasets: [{
      label: 'Hours of Sleep',
      data: [sleep.getSleepTimeByWeek(date)[0], sleep.getSleepTimeByWeek(date)[1]
        , sleep.getSleepTimeByWeek(date)[2], sleep.getSleepTimeByWeek(date)[3]
        , sleep.getSleepTimeByWeek(date)[4], sleep.getSleepTimeByWeek(date)[5]
        , sleep.getSleepTimeByWeek(date)[6]],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 129, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
        'rgba(255, 129, 64, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
// });


