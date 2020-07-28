// same([1,2,3], [4,1,9])  true

function same(arr1, arr2) {
  // Short circuit case!
  if(arr1.length !== arr2.length){
    return false
  }
  for(let i=0; i<arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if(correctIndex === -1){
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [4,1]));
console.log(same([1,2,3], [4,1,4]));

// O(n**2) indexOf inside for