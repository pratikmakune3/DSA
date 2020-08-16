class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val){
    let newNode = new Node(val);

    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.length;
  }

  dequeue(){
    if(!this.first) return null;

    let temp = this.first;

    if(this.length === 1){
      this.first = null;
      this.last = null;
    }else{
      this.first = temp.next;
      temp.next = null;  
    }
    this.length--;
    return temp;
  }
}

let q = new Queue();

console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.enqueue(4));

console.log('dequeued->', q.dequeue());

console.log(q);
