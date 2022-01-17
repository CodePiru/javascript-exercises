const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
