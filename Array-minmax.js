function largestElem(arr){
  let max = arr[0];
  let min = arr[0];
  for(let i=0; i<arr.length; i++){
    if(arr[i] > max) max = arr[i];

    if(arr[i] < min) min = arr[i];
  }

  return {
    min,
    max
  }
}

console.log(largestElem([2,6,7,1,10,4,6])) 