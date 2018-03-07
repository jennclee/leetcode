/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  // BFS of tree into an array
  // keep track of nulls
  // for each level in tree
  // split level array in half
  // if firstHalf.reverse() !== secondHalf, return false
  // return true;
  const array = [];
  if (root === null) {
    return true;
  }

  const addNode = (root, level) => {
    if (array.length === level) {
      array.push([]);
    }
    if (root === null) {
      array[level].push('null');
      return;
    } else {
      array[level].push(root.val);
      addNode(root.left, level + 1);
      addNode(root.right, level + 1);
    }
  }
  addNode(root, 0);

  for (let i = 0; i < array.length; i++) {
    let arr = array[i];
    if (arr.length > 1) {
      let secondHalf = arr.splice(0, arr.length / 2);
      let firstHalf = arr.reverse();
      for (var j = 0; j < arr.length; j++) {
        if (firstHalf[j] !== secondHalf[j]) {
          return false;
        }
      }
    }
  }
  return true;
};
