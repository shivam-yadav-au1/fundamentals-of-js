let arr = [1, 30, 39, 43, 10, 13];

function isBelowThreshold(currentValue){
    return currentValue < 40;
}


console.log(arr.every(isBelowThreshold));