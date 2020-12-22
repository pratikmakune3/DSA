/* 
  Frequencies in an Array
*/
const printFreq = (arr) => {
  let count  = 1;
  for(let i=1; i<arr.length; i++){
    let prev = arr[i-1];
    let curr = arr[i];
  
    if(curr !== prev){
      console.log(arr[i-1] + ' ' + count);
      count = 1;
    }else{
      count += 1;
    }
  }
  
  console.log(arr[arr.length - 1] + ' ' + count)
}

printFreq([10,10,10,25,30,30,1]);