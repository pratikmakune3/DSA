let rotateToLeftByk = function(arr, k) {
  let l = arr.length;
  
  for(let i=0; i<k/2; i++){
      let temp = arr[i];
      arr[i] = arr[k-1-i];
      arr[k-1-i] = temp;
  }
  
  for(let j=k; j<k+(l-k)/2; j++){
      let temp = arr[j];
      arr[j] = arr[l-1]
      arr[l-1] = temp;
      l--;
  }
  
  for(let i=0; i<arr.length/2; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }

  return arr;
};

rotate([1,2,3,4,5,6,7,8,9,10,11], 5);

