class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  /* 
      Start with the root node, assign currentNode = root
      checks for val < or >, 
      e.g. IF val < currentNode.val and currentNode.left == null THEN insert ELSE 
      change the currentNode!

      In a nutshell, IF null THEN insert ELSE Change currentNode
  */

  insert(val){
    const newNode = new Node(val);
    if(!this.root){
      return this.root = newNode;
    }
    let currentNode = this.root;

    while(true){
      // Duplicate value insertion return undefined
      if(val === currentNode.val) return undefined;

      // < val
      if(val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = newNode;
          return this;
        }else{
          currentNode = currentNode.left;
        }
      // > val
      } else if(val > currentNode.val) {
        if(currentNode.right === null){
          currentNode.right = newNode;
          return this;
        }else{
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(13);
tree.insert(2);
tree.insert(22);
tree.insert(21);
tree.insert(27);
console.log(JSON.stringify(tree));