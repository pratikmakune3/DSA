function bubbleSort(arr){
  for(let i=0; i<arr.length; i++){
    // Optimisation: if array is already sorted!
    let isSwapped = false;
    for(let j=0; j<arr.length-i; j++){
      if(arr[j]>arr[j+1]){
        // Swap
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;

        isSwapped = true;
      }
    }
    if(!isSwapped) break;
  }
  return arr;
}

console.log(bubbleSort([2,7,5,4,1,10])) 