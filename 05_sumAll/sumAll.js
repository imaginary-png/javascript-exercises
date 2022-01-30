const sumAll = function (first, second) {
    let result = 0;
    let start = 0;
    let end = 0;

    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second) ) {
        return 'ERROR';
    }

    if (first <= second){
        start = first;
        end = second;
    }
    else {
        start = second;
        end = first;
    }  

    for (start; start <= end; start++) {
        result += start;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
