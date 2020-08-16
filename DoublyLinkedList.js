class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop(){
    if(!this.head) return undefined;

    let poppedNode = this.tail;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      let newTail = poppedNode.prev;
      this.tail = newTail;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;

    let currentNode;

    if(index < this.length/2){
      let counter = 0;
      currentNode = this.head;
      while(index !== counter){
        currentNode = currentNode.next;
        counter++;
      } 
    }else{
      let counter = this.length;
      currentNode = this.tail;
      while(index !== counter - 1){
        console.log(counter)
        currentNode = currentNode.prev;
        counter--;
      }
    }

    return currentNode;
  }

  set(index, val){
    let foundNode = this.get(index);
    if(foundNode != null){
      foundNode.val = val;
      return true;
    }
    return false;
  }

  traverse(){
    let currentNode = this.head;
    for(let i=0; i<this.length; i++){
      console.log(currentNode.val+' --> ');
      currentNode = currentNode.next;
    }
  }
}

let dll = new DoublyLinkedList();

dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
dll.push(50);
console.log(dll.set(2, 300));
console.log('traverse-->', dll.traverse());

