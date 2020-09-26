class MaxBinaryHeap {
  constructor(){
    this.values = [41, 39, 33, 18, 27, 12, 6, 7];
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

  extractMax(){
    // [41, 39, 33, 18, 27, 12, 7, 6];
    // [6, 39, 33, 18, 27, 12, 7];
    this.values[0] = this.values.pop();
    let elemIndex = 0;
    let arrayLength = this.values.length;

    while(true){
      let elem = this.values[elemIndex];
      
      let leftChildIndex = 2*elemIndex + 1;
      let leftChild = this.values[leftChildIndex];
  
      let rightChildIndex = 2*elemIndex + 2;
      let rightChild = this.values[rightChildIndex];
  
      if(leftChildIndex < arrayLength && rightChildIndex < arrayLength ){
        if(leftChild < rightChild){
          this.swap(elemIndex, rightChildIndex)
          elemIndex = rightChildIndex;
        }else{
          this.swap(elemIndex, leftChildIndex)
          elemIndex = leftChildIndex;
        }
      }else if(leftChildIndex < arrayLength && rightChildIndex >= arrayLength && elem < this.values[leftChildIndex]){
        this.swap(elemIndex, leftChildIndex)
        elemIndex = leftChildIndex;
      }else{
        break;
      }
    }
  }

  swap(num1, num2){
    let temp = this.values[num1];
    this.values[num1] = this.values[num2];
    this.values[num2] = temp;
  }

}

let heap = new MaxBinaryHeap();
heap.extractMax();
// heap.extractMax();
console.log(heap)