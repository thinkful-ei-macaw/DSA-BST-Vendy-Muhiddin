const bst = require('./bst');

function main() {
  let BST = new bst();
  BST.insert(3, 3);
  // 1,4,6,9,2,5,7
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  console.log(BST);
}

main();