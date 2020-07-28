function validAnagram(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  
  let frequenctCounter1 = {};
  let frequenctCounter2 = {};
  
  for(let i=0; i<str1.length; i++){
    frequenctCounter1[str1.charAt(i)] = (frequenctCounter1[str1.charAt(i)] || 0) + 1;
  }

  for(let i=0; i<str2.length; i++){
    frequenctCounter2[str2.charAt(i)] = (frequenctCounter2[str2.charAt(i)] || 0) + 1;
  }

  for (const key in frequenctCounter1) {
    if(frequenctCounter1[key] !== frequenctCounter2[key]){
      return false;
    }
  }

  return true;
};

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));