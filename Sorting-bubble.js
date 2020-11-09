// 2,7,5,4,1 
// i=0  2,5,7,4,1
// i=1  2,5,4,7,  

function bubbleSort(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i; j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2,7,5,4,1,10])) 