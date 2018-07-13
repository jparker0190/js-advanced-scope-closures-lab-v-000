const expect = chai.expect;

describe('closures', function() {
  describe('produceDrivingRange', function(){
    it('returns a function', function(){
      expect(typeof produceDrivingRange()).to.equal('function')
    })


  })

  describe('produceTipCalculator', function(){
    it('returns a function', function(){
      expect(typeof produceTipCalculator()).to.equal('function')
    })

    it('configures the percentage tip returned', function(){
      let tenPercentTip = produceTipCalculator(.10)
      expect(tenPercentTip(50)).to.equal(5)
      expect(tenPercentTip(30)).to.equal(3)
    })
  })

  describe('createDriver', function(){
    const Driver = createDriver()

    it('returns a class that allows us to create a driver with a name attribute', function(){
      expect(new Driver('Sam').name).to.equal('Sam')
    })

    it('increments the driverId each time a driver is created', function(){
      expect(new Driver('Sam').id).to.not.equal(new Driver('Bob').id)
    })
  })
})
