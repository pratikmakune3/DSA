/* 
  Selection Sort - O(n2), potentially better than bubble sort
  Lesser swaps than bubble sort
*/

function selectionSort(arr){
  // ES2015 syntax for swap
  const swap = (arr, idx1, idx2) => {
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  }

  for(let i=0; i<arr.length; i++){
    let lowest = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j] < arr[lowest]) lowest = j;
    }
    if(i !== lowest) swap(arr, i, lowest);
    console.log(arr);
  }

  return arr;
}

console.log(selectionSort([0,1,5,3,4,2]));
