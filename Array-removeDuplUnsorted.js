/* 
  Print unique/distinct elements from an array
  Approach - Use Hashmap
*/

function removeDuplicate(arr){
  let hashMap = {};
  for(let i=0; i<arr.length; i++){
    if(!(arr[i] in hashMap)){
      hashMap[arr[i]] = true;
      console.log(arr[i]);
    }
  }
}

removeDuplicate([2,10,5,5,10,15]);