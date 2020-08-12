class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Add the node at the end
  push(val){
    let node = new Node(val);
    this.length === 0 ? this.head = node : this.tail.next = node;
    this.tail = node;
    this.length++;  

    return this;
  }

  // Remove the node from the end
  pop(){
    let currentNode = this.head;
    let previousNode = null;
    if(!this.head) return undefined;

    while(currentNode !== this.tail){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }else{
      previousNode.next = null;
      this.tail = previousNode;
    }
    
    return currentNode;
  }

  // Remove the node from the front
  shift(){
    if(!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    return currentHead;
  }

  // Add the node at the front
  unshift(val){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }

    let currentNode = this.head;
    this.head = newNode;
    newNode.next = currentNode;
    this.length++;

    return newNode;
  }

  get(index){
    if(index < 0 || index >= this.length) return undefined;

    let currentNode = this.head;
    for(let i=0; i < index; i++){
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  reverse(){
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev, next = null;

    // Hello -> There -> How -> are -> you
    while(current !== null){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  traverse(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("There!");
list.push("How");
list.push("are");
list.push("you");
// console.log('list->', list);
console.log(list.reverse());

