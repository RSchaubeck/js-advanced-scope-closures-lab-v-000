function produceDrivingRange(blockRange) {
  return function(start, end) {
    let requestedDist = parseInt(end) - parseInt(start);
    if ((requestedDist) > blockRange) {
      return `${requestedDist - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - requestedDist}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(amount) {
    return amount * percentage;
  }
}

function creadteDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
