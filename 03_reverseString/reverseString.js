const reverseString = function(str) {
    let reversed = "";
    if (str.length == 0) return reversed;
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
