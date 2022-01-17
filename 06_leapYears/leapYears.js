const leapYears = function(year) {
    if (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) return false;
    return true;
};

/*TOP's solution
const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
};
*/

// Do not edit below this line
module.exports = leapYears;
