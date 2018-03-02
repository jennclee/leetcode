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
    array = inorderTraversal(node.left, array);
    array.push(node.val);
    array = inorderTraversal(node.right, array);
  }
  return array;
};