const removeFromArray = function (array, toRemove1, toRemove2, toRemove3, toRemove4) {

    const tempArray1 = [];
    const tempArray2 = [];
    const tempArray3 = [];
    const tempArray4 = [];

    if (!(toRemove1 === undefined)) {

        removeFromArrayHelper(array, tempArray1, toRemove1);
    }
    else {
        return array;
    }

    if (!(toRemove2 === undefined)) {

        removeFromArrayHelper(tempArray1, tempArray2, toRemove2);
    }
    else {
        return tempArray1;
    }

    if (!(toRemove3 === undefined)) {

        removeFromArrayHelper(tempArray2, tempArray3, toRemove3);
    }
    else {
        return tempArray2;
    }

    if (!(toRemove4 === undefined)) {

        removeFromArrayHelper(tempArray3, tempArray4, toRemove4);
    }
    else {
        return tempArray3;
    }

    return tempArray4;

};

let removeFromArrayHelper = function (oldArray, newArray, toRemove) {
    for (let i = 0; i < oldArray.length; i++) {
        if (oldArray[i] !== toRemove) {
            newArray.push(oldArray[i])
        }
    }
}

// Do not edit below this line
module.exports = removeFromArray;
