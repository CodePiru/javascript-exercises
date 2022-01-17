const removeFromArray = function(arr, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        let index = arr.indexOf(elements[i]);
        if (index < 0) continue;
        arr.splice(index, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
