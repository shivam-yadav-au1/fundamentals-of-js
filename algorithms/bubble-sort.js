function bubbleSort(array){
    let originalArray = array.slice();
    let length = array.length-1;
    do{
        var swapped = false;
        for(let i = 0;i<length;i++){
            if(originalArray[i] > originalArray[i+1]){
                let temp = originalArray[i];
                originalArray[i] = originalArray[i+1];
                originalArray[i+1] = temp;
                swapped = true;
            }
        }

    }while(swapped === true);
    return originalArray;
}

  let arr = [9, 8, 3, 7, 2];
  console.log(bubbleSort(arr));
