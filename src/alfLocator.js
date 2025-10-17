function alfLocator() { }


alfLocator.prototype.findSpaceship = function (map) {
  if (map === "") {
    return "Spaceship lost forever.";
  }

  if (map === "X") {
    return "[0,0]"
  }

  
  let rows = map.split("\n"); //converts the string into an array for each new line
  let height = rows.length;

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let x = row.indexOf("X");

    if (x !== -1) {
      let y = height - 1 - i;
      return [x,y];
    }
  }

  return "Spaceship lost forever."
};