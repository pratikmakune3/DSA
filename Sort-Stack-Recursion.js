// import your required classes
const {
  Stack,
} = require('datastructures-js');

const stack = new Stack();

stack.push(1)
stack.push(0)
stack.push(5)
stack.push(2)

console.log(stack)

function sortStack(stack){

  if(!stack.size()) return;

  if(stack.size() === 1) return stack;

  let elem = stack.pop();

  sortStack(stack)

  insert(stack, elem)
  
  return stack
}

function insert(stack, elem){
  if(!stack.size() || stack.peek() <= elem){
    stack.push(elem)
    return;
  }

  let popped = stack.pop()
  
  insert(stack, elem)

  stack.push(popped)
}

sortStack(stack)

console.log(stack)