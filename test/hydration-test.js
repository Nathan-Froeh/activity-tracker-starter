
if(typeof module !== undefined) {
  var chai = require('chai');
  var expect = chai.expect;
  
  var testUser = require('../src/testUser');
  var Hydration = require('../src/Hydration');
}

describe('Hydration', function() {
  let hydration;
  beforeEach(() => {
    hydration = new Hydration(testUser.testHydrationData[0].hydrationData);
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

  it('should be a new instance of User', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  })

  it('should be instantiated with a users hydration data', () => {
    expect(hydration.hydrationData).to.deep.equal(testUser.testHydrationData[0].hydrationData)
  })

  it('should calulate average fluid ounces consumed per day for all time', () => {
    expect(hydration.calcAllTimeHydration()).to.equal(58)
  })

  it('should return hydration by specific date', () => {
    expect(hydration.calcDateHydration("06/05/2019")).to.equal(64)
    expect(hydration.calcDateHydration("09/05/2019")).to.equal(40)
    expect(hydration.calcDateHydration("15/05/2019")).to.equal(59)
  })

  it('should return average fluid ounces consumed that week', () => {
    expect(hydration.calcWeeklyHydration("06/05/2019")).to.deep.equal([64, 80, 39, 40, 65, 84, 33])
  })

})
