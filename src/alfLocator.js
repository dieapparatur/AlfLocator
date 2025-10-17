function StringCalculator() {}

StringCalculator.prototype.add = function(string_numbers) {
  // Empty input -> 0
  if (string_numbers === '') return 0;

  // Split by comma, trim whitespace, convert to number, sum
  return string_numbers
    .split(',')
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(Number)
    .reduce((sum, n) => sum + n, 0);
};