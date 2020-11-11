function secondLargest(A){
  max = A[0];
  secondMax = A[0];
  
  for(let i=0; i<=A.length; i++){  
    if(A[i] > max){
      secondMax = max;
      max = A[i];
    }else{
      if(A[i] > secondMax && A[i] !== max){
        secondMax = A[i]
      }  
    }
  }
  
  return secondMax;
}

console.log(secondLargest([2,1,10,8,10,5,9,12]));