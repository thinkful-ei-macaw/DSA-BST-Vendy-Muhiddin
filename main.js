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
  //#4.
  console.log(tree(BST));
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
 // 5. Height of a BST
}

//4. What does this program do?
//get sum of all values in tree, 
//runtime: O(1)
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}
main();