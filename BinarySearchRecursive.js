function binarySearch(arr, val, start, end){
  console.log(start, end);
  let middle = Math.floor((start + end)/2); 

  if(start > end) return;
  
  if(arr[middle] === val) return middle;

  if(val < arr[middle]){       
    end = middle - 1;     
  }else{ 
    start = middle + 1;   
  }

  return binarySearch(arr, val, start, end);

}

console.log(binarySearch([2,5,7,9,12,15,18,21,26,30,35], 18, 0, 10));