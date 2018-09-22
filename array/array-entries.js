let arry = [1,2,3,4,5];

let iterator = arry.entries();

for(let i of iterator){
    console.log(i);
}

/**
 * Output 
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
 */