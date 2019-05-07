const chai = require('chai');
const expect = chai.expect;

const testUser = require('../src/testUser');
const Hydration = require('../src/Hydration');

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

})