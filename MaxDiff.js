/* 
    Maximum Difference problem is to find the maximum of 
    arr[j] - arr[i] where j>i.
 */

const maxDifference = (arr) => {

  if(!arr.length) return;

  if(arr.length === 1) return arr[0];

  let min = arr[0];
  
  let maxDiff = arr[1] - arr[0]
  
  for(let j=2; j < arr.length; j++){
    maxDiff = Math.max(arr[j] - min, maxDiff)
    min = Math.min(arr[j], min);
  }

  return maxDiff;
}

maxDifference([2,3,10,6,4,8,1,20])
