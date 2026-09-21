"use strict";
function ziplist(a1, a2) {
    const retArray = [];
    for (let i = 0; i < a1.length; i++) {
        retArray.push(a1[i]);
        retArray.push(a2[i]);
    }
    return retArray;
}
console.log(ziplist(['a', 'b', 'c'], [1, 2, 3]));
function ziplistTheFunctionalWay(a1, a2) {
    const retArray = [];
    a1.forEach((value, index) => {
        retArray.push(value, a2[index]);
    });
    return retArray;
}
console.log(ziplistTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
