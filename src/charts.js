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