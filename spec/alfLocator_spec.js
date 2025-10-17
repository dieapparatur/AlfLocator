describe('alfLocator', function() {
	let locator;
  
	beforeEach(function() {
	  locator = new alfLocator();
	});
  
	it("return spaceship lost forever with input of an empty string", function() {
	  expect(locator.findSpaceship('')).toEqual("Spaceship lost forever");
	});
  
  });
  