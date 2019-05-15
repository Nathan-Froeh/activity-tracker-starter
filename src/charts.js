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
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 2
    }, {
      label: 'Quality of Sleep',
      data: [sleep.getSleepQulityByWeek(date)[0], sleep.getSleepQulityByWeek(date)[1]
        , sleep.getSleepQulityByWeek(date)[2], sleep.getSleepQulityByWeek(date)[3]
        , sleep.getSleepQulityByWeek(date)[4], sleep.getSleepQulityByWeek(date)[5]
        , sleep.getSleepQulityByWeek(date)[6]],
      backgroundColor: [
        'rgba(1, 99, 132, 0.2)', 'rgba(1, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 129, 64, 0.2)'
      ],
      borderColor: [
        'rgba(1, 99, 132, 1)', 'rgba(1, 99, 132, 1)',
        'rgba(1, 99, 132, 1)', 'rgba(1, 99, 132, 1)',
        'rgba(1, 99, 132, 1)', 'rgba(1, 99, 132, 1)',
        'rgba(1, 99, 132, 1)'
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

var activityRepoNumSteps = $('#activity-repo-numsteps')
var activityRepo = new Chart(activityRepoNumSteps, {
  type: 'bar',
  data: {
    labels: [`${user.getFirstName()}`, 'FitLit Average'],
    datasets: [{
      label: 'Number of Steps' ,
      data: [`${activity.getSteps(date)}`, `${activityRepository.calcAvgSteps(date)}`],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 129, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 2
    }]
  }, 
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
activityRepo.AspectRatio = 0


var activityRepoActiveTime = new Chart($('#activity-repo-active-time'), {
  type: 'bar',
  data: {
    labels: [`${user.getFirstName()}`, 'FitLit Average'],
    datasets: [{
      label: 'Active Time' ,
      data: [`${activity.getActiveTimeByDate(date)}`, `${activityRepository.calcAvgActive(date)}`],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 129, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 2
    }]
  }, 
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
activityRepo.AspectRatio = 0


var activityRepoStairs = new Chart($('#activity-repo-flightsOfStairs'), {
  type: 'bar',
  data: {
    labels: [`${user.getFirstName()}`, 'FitLit Average'],
    datasets: [{
      label: 'Flights Of Stairs',
      data: [activity.getStairsClimbByDate(date), activityRepository.calcAvgStairClimb(date)],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 129, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 2
    }]
  }, 
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});



console.log(hydration.calcWeeklyHydration(date))
var hydrationChart = new Chart($('#hydration-chart'), {
  type: 'line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
      label: 'Hydration By Week',
      data: hydration.calcWeeklyHydration(date),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 129, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 2
    }, {
      label: 'Average Hydration',
      data: [hydration.calcAllTimeHydration(), hydration.calcAllTimeHydration(), hydration.calcAllTimeHydration(),
        hydration.calcAllTimeHydration(), hydration.calcAllTimeHydration(), hydration.calcAllTimeHydration(), 
        hydration.calcAllTimeHydration()],
      backgroundColor: [
        'rgba(1, 99, 132, 0.2)', 'rgba(1, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
        'rgba(255, 129, 64, 0.2)'
      ],
      borderColor: [
        'rgba(1, 99, 132, 1)', 'rgba(1, 99, 132, 1)',
        'rgba(1, 99, 132, 1)', 'rgba(1, 99, 132, 1)',
        'rgba(1, 99, 132, 1)', 'rgba(1, 99, 132, 1)',
        'rgba(1, 99, 132, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});