class MaxBinaryHeap {
  constructor(){
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp(element);
  }
  bubbleUp(){
    let elementIdx = this.values.length - 1;

    while(true){
      
      let element = this.values[elementIdx];
      let parentIdx = Math.floor((elementIdx - 1)/2);
      let parent = this.values[parentIdx];
      
      if(element < parent || parentIdx < 0) break;

      // else swap
      let temp = parent;
      this.values[parentIdx] = element;
      this.values[elementIdx] = temp;

      // Change the element id
      elementIdx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(5);
console.log(heap)