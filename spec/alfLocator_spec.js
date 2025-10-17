describe('alfLocator', function() {
	let locator;
  
	beforeEach(function() {
	  locator = new alfLocator();
	});
  
	it("return spaceship lost forever with input of an empty string", function() {
	  expect(locator.findSpaceship('')).toEqual("Spaceship lost forever");
	});
	
	it("return 0,0 when string is just 'X'", function() {
		expect(locator.findSpaceship('X')).toEqual("[0,0]");
	});

  });
  