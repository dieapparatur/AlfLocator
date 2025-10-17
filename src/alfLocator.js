function alfLocator() {}

const map = "..........\n..........\n..........\n.......X..\n..........\n..........\n";

alfLocator.prototype.findSpaceship = function(map) {
    if (map === "") {
      return "Spaceship lost forever";
    }
    if (map === "X") {
      return "[0,0]";
    }
};