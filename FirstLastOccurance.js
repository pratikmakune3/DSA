/* 
  Find the first/last occurances in an array
  e.g -> [2,4,10,10,10,10,18,20], 10
  First occurance at 3
  Last occurance at 4
*/

function BinarySearch(A, n, x) {
  let start = 0;
  let end = n-1;

  result = -1;

  while(start <= end){
    let mid = (start + end)/2;
    
    if(A[mid] === x){
      result = mid;
      // First occurance ->
      end = mid - 1
      // Last occurance
      start = mid + 1
    }else if(x < A[mid]){
      end = mid-1 
    }else{
      start = mid+1
    }
  }

  return result;
}

console.log(BinarySearch([2,4,10,10,10,10,18,20], 7, 10));