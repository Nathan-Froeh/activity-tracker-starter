const testUserData = [
  {
    "id": 1,
    "name": "Nyasia Weber",
    "address": "270 August Meadows, Maribelside SD 36129",
    "email": "Jordane_Schultz@yahoo.com",
    "strideLength": 4.7,
    "dailyStepGoal": 8000
  },
  {
    "id": 2,
    "name": "Shayne Swift",
    "address": "270 August Meadows, Maribelside SD 36129",
    "email": "Lawson74@yahoo.com",
    "strideLength": 4.5,
    "dailyStepGoal": 11000
  },
  {
    "id": 3,
    "name": "Cleo Lindgren",
    "address": "744 Josephine Parkway, Hellerside OH 17625",
    "email": "Zachery.Von49@gmail.com",
    "strideLength": 5.1,
    "dailyStepGoal": 4000
  },
  {
    "id": 4,
    "name": "Elaina Rau",
    "address": "73488 Cole Ways, Jakubowskimouth AK 48498",
    "email": "Adah_Friesen@hotmail.com",
    "strideLength": 5.4,
    "dailyStepGoal": 8000
  }
]

const testHydrationData = [
  {
    "userID": 1,
    "hydrationData": [
      {
        "date": "06/05/2019",
        "numOunces": 64
      },
      {
        "date": "07/05/2019",
        "numOunces": 80
      },
      {
        "date": "08/05/2019",
        "numOunces": 39
      },
      {
        "date": "09/05/2019",
        "numOunces": 40
      },
      {
        "date": "10/05/2019",
        "numOunces": 65
      },
      {
        "date": "11/05/2019",
        "numOunces": 84
      },
      {
        "date": "12/05/2019",
        "numOunces": 33
      },
      {
        "date": "13/05/2019",
        "numOunces": 60
      },
      {
        "date": "14/05/2019",
        "numOunces": 30
      },
      {
        "date": "15/05/2019",
        "numOunces": 59
      },
      {
        "date": "16/05/2019",
        "numOunces": 86
      }
    ]
  }
]

const testSleepData = [
  {
    "userID": 1,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 8,
        "sleepQuality": 4.8
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 10.7,
        "sleepQuality": 4.8
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 8.1,
        "sleepQuality": 1.9
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 4.5,
        "sleepQuality": 3.4
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 10.7,
        "sleepQuality": 4.3
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 5.6,
        "sleepQuality": 3.5
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 10.1,
        "sleepQuality": 1.7
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 10.1,
        "sleepQuality": 3.2
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 10.5,
        "sleepQuality": 2
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 6.1,
        "sleepQuality": 2.9
      }
    ]
  },
  {
    "userID": 2,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 6.3,
        "sleepQuality": 2.2
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 9.2,
        "sleepQuality": 4.8
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 6.6,
        "sleepQuality": 4.5
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 6.8,
        "sleepQuality": 1.4
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 9.3,
        "sleepQuality": 4.8
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 8.5,
        "sleepQuality": 1.7
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 5.9,
        "sleepQuality": 3.2
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 4.1,
        "sleepQuality": 2.1
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 4.3,
        "sleepQuality": 4.2
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 9.6,
        "sleepQuality": 3.8
      }
    ]
  },
  {
    "userID": 3,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 7.2,
        "sleepQuality": 5
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 5.4,
        "sleepQuality": 4.1
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 4.7,
        "sleepQuality": 1.2
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 10.2,
        "sleepQuality": 1.7
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 7.9,
        "sleepQuality": 2.7
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 5.6,
        "sleepQuality": 3.7
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 10.2,
        "sleepQuality": 2.4
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 6.4,
        "sleepQuality": 1.7
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 4.5,
        "sleepQuality": 4
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 7.8,
        "sleepQuality": 2.4
      }
    ]
  },
  {
    "userID": 4,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 7.6,
        "sleepQuality": 1.5
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 10.3,
        "sleepQuality": 4
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 10.2,
        "sleepQuality": 3.2
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 5.3,
        "sleepQuality": 4.9
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 7.8,
        "sleepQuality": 2.6
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 6.5,
        "sleepQuality": 3.9
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 5,
        "sleepQuality": 1.5
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 9.4,
        "sleepQuality": 1.6
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 6.3,
        "sleepQuality": 3
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 7.1,
        "sleepQuality": 2.5
      }
    ]
  }
]

const testActivityData = [
  {
    "userID": 1,
    "activityData": [
      {
        "date": "06/05/2019",
        "numSteps": 7368,
        "minutesActive": 204,
        "flightsOfStairs": 46
      },
      {
        "date": "07/05/2019",
        "numSteps": 3079,
        "minutesActive": 115,
        "flightsOfStairs": 4
      },
      {
        "date": "08/05/2019",
        "numSteps": 2387,
        "minutesActive": 179,
        "flightsOfStairs": 4
      },
      {
        "date": "09/05/2019",
        "numSteps": 6326,
        "minutesActive": 126,
        "flightsOfStairs": 26
      },
      {
        "date": "10/05/2019",
        "numSteps": 13644,
        "minutesActive": 220,
        "flightsOfStairs": 13
      },
      {
        "date": "11/05/2019",
        "numSteps": 4337,
        "minutesActive": 294,
        "flightsOfStairs": 15
      },
      {
        "date": "12/05/2019",
        "numSteps": 9068,
        "minutesActive": 97,
        "flightsOfStairs": 3
      },
      {
        "date": "13/05/2019",
        "numSteps": 2925,
        "minutesActive": 274,
        "flightsOfStairs": 10
      },
      {
        "date": "14/05/2019",
        "numSteps": 3338,
        "minutesActive": 142,
        "flightsOfStairs": 24
      },
      {
        "date": "15/05/2019",
        "numSteps": 12224,
        "minutesActive": 228,
        "flightsOfStairs": 32
      }
    ]
  },
  {"userID": 2,
    "activityData": [
      {
        "date": "06/05/2019",
        "numSteps": 9101,
        "minutesActive": 202,
        "flightsOfStairs": 1
      },
      {
        "date": "07/05/2019",
        "numSteps": 11825,
        "minutesActive": 77,
        "flightsOfStairs": 28
      },
      {
        "date": "08/05/2019",
        "numSteps": 4423,
        "minutesActive": 266,
        "flightsOfStairs": 31
      },
      {
        "date": "09/05/2019",
        "numSteps": 6241,
        "minutesActive": 146,
        "flightsOfStairs": 43
      },
      {
        "date": "10/05/2019",
        "numSteps": 3455,
        "minutesActive": 154,
        "flightsOfStairs": 47
      },
      {
        "date": "11/05/2019",
        "numSteps": 2629,
        "minutesActive": 150,
        "flightsOfStairs": 19
      },
      {
        "date": "12/05/2019",
        "numSteps": 9521,
        "minutesActive": 240,
        "flightsOfStairs": 30
      },
      {
        "date": "13/05/2019",
        "numSteps": 10671,
        "minutesActive": 161,
        "flightsOfStairs": 23
      },
      {
        "date": "14/05/2019",
        "numSteps": 10847,
        "minutesActive": 248,
        "flightsOfStairs": 40
      },
      {
        "date": "15/05/2019",
        "numSteps": 3838,
        "minutesActive": 243,
        "flightsOfStairs": 10
      },
    ]
  },
]
if(typeof module !== "undefined") {
  module.exports = {
    testUserData, testHydrationData, testSleepData, testActivityData
  };
}


