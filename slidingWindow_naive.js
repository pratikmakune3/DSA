let arr = [-2,4,-1,4,-3,2,-6,3];

let num = 4;

// To support negating array elements also
let maxSum = -Infinity;

for(let i=0; i<(arr.length - num + 1); i++){
  let tempSum = 0;
  for(let j=i; j<i+num; j++){
    console.log(arr[j]);
    tempSum += arr[j];
  }
  console.log('sum',tempSum);
  console.log('---------');
  if(tempSum > maxSum){
    maxSum = tempSum;
  }
}

console.log('maxSum-->',maxSum)