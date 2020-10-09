/* 
  Find the number of times the given element has occured in the sorted
  array!

  Sorted array - one should always think of a binary search algorithm
  to solve the sorted array problem
*/

function BinarySearch(A, n, x, firstOccurance) {
  let start = 0;
  let end = n-1;

  result = -1;

  while(start <= end){
    let mid = (start + end)/2;
    
    if(A[mid] === x){
      result = mid;
      // First occurance ->
      if(firstOccurance){
        end = mid - 1
      }else{
        // Last occurance
        start = mid + 1
      }
    }else if(x < A[mid]){
      end = mid-1 
    }else{
      start = mid+1
    }
  }

  return result;
}

let firstOccurance = BinarySearch([1,1,3,3,5,5,5,5,5,9,9,11], 12, 5, true)
let lastOccurance = BinarySearch([1,1,3,3,5,5,5,5,5,9,9,11], 12, 5, false)

let count = (lastOccurance - firstOccurance) + 1;

console.log('duplicate count-->', count);