describe('String Calculator', function() {
	let calculator;
  
	beforeEach(function() {
	  calculator = new StringCalculator();
	});
  
	it('returns 0 for an empty string', function() {
	  expect(calculator.add('')).toEqual(0);
	});
  
	it('returns the number for a single value "1" => 1', function() {
	  expect(calculator.add('1')).toEqual(1);
	});
  
	it('sums two numbers "1,2" => 3', function() {
	  expect(calculator.add('1,2')).toEqual(3);
	});
  
	it('"1,27" => 28', function() {
	  expect(calculator.add('1,27')).toEqual(28);
	});
  
	it('"15,17,21" => 53', function() {
	  expect(calculator.add('15,17,21')).toEqual(53);
	});
  
	it('"1,5,27,45" => 78', function() {
	  expect(calculator.add('1,5,27,45')).toEqual(78);
	});
  
	it('"1,10,100,1000,10000" => 11111', function() {
	  expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
	});
  });
  