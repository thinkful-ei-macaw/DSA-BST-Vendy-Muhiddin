const bst = require('./bst');

function main() {
  let BST = new bst();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  BST.insert(1, 1);
  console.log(thirdLargest(BST));
  // let BST = new bst(4, 4);
  // BST.left = new bst(5, 5);
  // BST.right = new bst(3, 3);
  
  // console.log(isBST(BST, 1, 9));
  // findHeight(BST);
  // console.log(tree(BST));
  // console.log(BST);
  // E A S Y Q U E S T I O N
  // BST.insert('E', 'E');
  // BST.insert('A', 'E');
  // BST.insert('S', 'S');
  // BST.insert('Y', 'Y');
  // BST.insert('Q', 'Q');
  // BST.insert('U', 'U');
  // BST.insert('E', 'E');
  // BST.insert('S', 'S');
  // BST.insert('T', 'T');
  // BST.insert('I', 'I');
  // BST.insert('O', 'O');
  // BST.insert('N', 'N');
  // console.log(BST);

}

// 7. 3rd largest node

function thirdLargest(bst) {
  
  return bst.right.right.value;
}

// 6. Is it a BST?

function isBST(binaryTree, minval, maxval){
  if (binaryTree === null) {
    return true;
  }
  return (
    (minval === null || minval <= binaryTree.value) &&
      (maxval === null || maxval >= binaryTree.value) &&
      isBST(binaryTree.left, minval, binaryTree.value) &&
      isBST(binaryTree.right, binaryTree.value, maxval)
  );
}

// 5. Height of a BST
function findHeight(b) {
  //base case
  if(b === null) {
    return 0;
  }
  else{
    let leftHeight = findHeight(b.left);
    console.log(leftHeight); 
    let rightHeight = findHeight(b.right);
    console.log(rightHeight);
    if(leftHeight > rightHeight) {
      return leftHeight + 1;
    }
    else {
      return rightHeight + 1;
    }
  }
}
//4. What does this program do?
//get sum of all values in tree, 
//runtime: O(1)
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

main();