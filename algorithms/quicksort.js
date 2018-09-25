
const quickSort =(arr)=>{
    if(arr.length < 2){
        return arr;
    }
    const pivot = arr[Math.floor(Math.random()*arr.length)];

    let left = [];
    let equal = [];
    let right = [];

    for(let element of arr){
        if(element < pivot){
            left.push(element);
        }else if(element > pivot){
            right.push(element);
        }else{
            equal.push(element);
        }
    }

    return quickSort(left).concat(equal).concat(quickSort(right));
}

console.log(quickSort(arr=[6,3,1,12,7,4,10]));