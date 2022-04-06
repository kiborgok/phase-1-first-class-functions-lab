const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = (arr) => {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arr, cb) => {
    return cb(arr)
}