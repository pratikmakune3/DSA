// [8,2,3,7,1,10,5]
// After 1st pass [1,2,3,7,8,10,5]
// After 2nd pass [1,2,3,7,8,10,5]
// So on...
function selectionSort(arr) {
  // Dry run of each step in the comment of each step
  for(let i=0; i<arr.length-1; i++){        //  i = 1; 2
    
    let min = arr[i];                       //  min = 2
    let minIdx = i;
    
    for(let j=i+1; j<arr.length; j++){      //  j = 2; 1->6
      if(arr[j] < min){                     //  2 < 2
        min = arr[j];                       //  min = 2
        minIdx = j;
      }
    }
    // Swap - You need the index of min elem, hence we're storing it in minIdx!               
    let temp = arr[i]                       //  temp = 8
    arr[i] = min                            //  arr[0] = 1
    arr[minIdx] = temp;                     //  arr[]
  }
  return arr;
}

console.log(selectionSort([8,2,3,7,1,10,5])); 