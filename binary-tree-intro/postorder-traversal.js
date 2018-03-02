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
const postorderTraversal = (root, arr) => {
  let array = arr || [];
  if (root === null) {
    return array;
  } else {
    if (root.left !== null || root.right !== null) {
      postorderTraversal(root.left, array);
      postorderTraversal(root.right, array);
    }
    array.push(root.val);
  }
  return array;
};