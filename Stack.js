/* 
  BIG(O) of stacks ->
    Insertion O(1)
    Removal O(1)

    Stacks can be implemented by using Arrays/Singly linked list

    If searching or access -> O(N)

    Usecases - 
    1. Handle function invocations
    2. undo/redo
    3. routing(pages visited)
    4. Web browser history
*/

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  
  push(val){
    let newNode = new Node(val);

    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }

    return ++this.length;
  }

  pop(){
    if(!this.first) return null;
    let temp = this.first;

    if(this.length === 1){
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);