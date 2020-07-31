function binarySearch(arr, val){
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end)/2);

  while(arr[middle] !== val && start <= end){
    // Too Small case
    if(val < arr[middle]) end = middle - 1;
    // Too large case
    else start = middle + 1;
    middle = Math.floor((start + end)/2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([2,5,7,9,12,15,18,21,26,30,35], 31));