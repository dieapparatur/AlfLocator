describe('alfLocator', function () {
	let locator;

	beforeEach(function () {
		locator = new alfLocator();
	});

	it("return spaceship lost forever with input of an empty string", function () {
		expect(locator.findSpaceship("")).toEqual("Spaceship lost forever");
	});

	it("return 0,0 when string is just 'X'", function () {
		expect(locator.findSpaceship('X')).toEqual("[0,0]");
	});

	it("returns 'Spaceship lost forever.' when there is no X", function () {
		expect(locator.findSpaceship('..........')).toEqual("Spaceship lost forever.");
	});

	it("matches the kata example [7, 2]", function () {
		const map = "..........\n" +
			"..........\n" +
			"..........\n" +
			".......X..\n" +
			"..........\n" +
			"..........";
		expect(locator.findSpaceship(map)).toEqual([7, 2]);
	});


	it("returns lost when no X in multiple lines", function () {
		const map = "..........\n" +
			"..........\n" +
			"..........";
		expect(locator.findSpaceship(map)).toEqual("Spaceship lost forever.");
	});
});
