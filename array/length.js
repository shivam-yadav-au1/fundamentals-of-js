let clothing = ['shoes','shirt','socks','sweaters'];
console.log(clothing.length);


let arr = [1,2,3,4,5];
printEntries(arr);

function printEntries(arr){
    let length = arr.length;
    console.log("==========printing entries=========");
    for(i=0;i<length;i++){
        console.log(arr[i]);
    }
}