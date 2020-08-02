function selectionSort(arr){
  
  const swap = (array, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  };

  for(let i=0; i<arr.length; i++){
    let tempMin = arr[i];
    let tempMinIndex = i;
    for(let j=i+1; j<arr.length; j++){
      if(tempMin > arr[j]){
        tempMin = arr[j];
        tempMinIndex = j;
      }
    }
    if(tempMinIndex !== i){
      swap(arr, i, tempMinIndex);
    }
    console.log(arr);
  }

  return arr;
}

console.log(selectionSort([5,3,4,1,2,7,9,8]));
