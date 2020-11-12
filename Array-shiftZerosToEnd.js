/*  
  TC - O(n)
  SC - O(n)
*/
function naiveShiftZerosToLeft(arr){
  let tempArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== 0) tempArr.push(arr[i]);
  }
  for(let j=tempArr.length; j<arr.length; j++){
    tempArr.push(0);
  }
  console.log(tempArr);
}

naiveShiftZerosToLeft([2,4,0,0,5,1,0,0,10,5]);

/* 
  TC - O(n)
  SC - O(1)
*/
function shiftZerosToLeft(arr){
  let count = 0;                      
  for(let i=0; i<arr.length; i++){    
    if(arr[i] !== 0){                   
      let temp = arr[count];          
      arr[count] = arr[i];            
      arr[i] = temp;                  
      
      count++;                        
    }
  }

  return arr
}

console.log(shiftZerosToLeft([2,4,0,0,5,1,0,0,10,5]));