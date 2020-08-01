function bubbleSort(arr){
  for(let j=0; j<arr.length; j++){
    console.log(arr);
    // The way bubble sort works -> at every iteration, we have 
    // the largest value at the end of an sorted array. 
    // The Second pass, has the second largest value at the end but the 1 position
    // Hence, after every pass, we should reduce the inner loop by 1
    for(let i=0; i< arr.length - j - 1; i++){
      console.log(arr[i], arr[i+1]);
      if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([23,19,30,7,90,19,3,0,-4]));