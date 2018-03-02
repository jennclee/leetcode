/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (node, arr) => {
  let array = arr || [];
  if (node === null) {
    return array;
  } else {
    if (node.left !== null) {
      array = inorderTraversal(node.left, array);
    }
    array.push(node.val);
    if (node.right !== null) {
      array = inorderTraversal(node.right, array);
    } else {
      return array;
    }
  }
  return array;
};