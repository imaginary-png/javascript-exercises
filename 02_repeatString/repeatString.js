const repeatString = function(toRepeat, times) {

    let result ='';

    if (times <0){
        return 'ERROR';
    }
    if (times == 0){
        return '';
    }

    while (times > 0){
        result += toRepeat;
        times--;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
