// Remove the duplicates from the SORTED ARRAY
// Return the size of new array

/* 
  Approach - Instead of actually removing the duplicates from an array,
             we change the elements and track the count of unique elem
*/

function removeDuplicate(arr){
  // j = no of unique/distinct elements.
  let j = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[i+1]){
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}

console.log(removeDuplicate([2,10,10,15]));
