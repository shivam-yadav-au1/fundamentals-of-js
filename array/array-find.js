/**
 * The find() method returns the value of the first element in the array that 
 * satisfies the provided testing function.
 * Otherwise undefined is returned.
 */


let arr = [5,8,12,37,29];

let found = arr.find((i)=>{
    return i>10;
})
console.log(found);