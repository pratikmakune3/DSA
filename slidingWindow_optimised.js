function maxSubarraySum(arr, num){
  // [2,4,1,4,3,2,6,3]
  // Substract and add
  
  let maxSum = 0;
  let tempSum = 0;

  for( let i=0; i < num ; i++ ) {
    tempSum += arr[i];
  }

  maxSum = tempSum;  
  
  for( let i=0; i < arr.length - num + 1; i++ ){
    tempSum = tempSum - arr[i] + arr[i + num];
    if(tempSum > maxSum){
      maxSum = tempSum;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([2,4,1,4,3,2,6,3], 4));

