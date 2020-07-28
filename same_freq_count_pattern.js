// same([1,2,3,2], [4,1,9])  true

function same(arr1, arr2) {
  // Short circuit case!
  if(arr1.length !== arr2.length){
    return false
  }
  // frequency for arr1
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  
  for(let num of arr1){
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  // console.log(frequencyCounter1);
  
  for(let num of arr2){
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }
  // console.log(frequencyCounter2);

  for(let key in frequencyCounter1){
    console.log(key, arr1[key], arr2[key ** 2]);
    if(arr1[key] !== arr2[key ** 2]){
      return false; 
    }
  }
  return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [4,1]));
console.log(same([1,2,3], [4,1,4]));

// O(n**2) indexOf inside for