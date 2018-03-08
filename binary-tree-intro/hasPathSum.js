/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

 /*
=== TEST CASES ===
[5,4,8,11,null,13,4,7,2,null,null,null,1]  22     // true  5 -> 4 -> 11 -> 2
[1,2] 1                                           // false
[-2,null,-3] -5                                   // true  -2 -> -3
[1,-2,-3,1,3,-2,null,-1] -1                       // true
 */

const hasPathSum = (root, sum) => {
  if (root === null || root === undefined) {
    return false;
  }
  sum -= root.val;
  if (sum === 0 && root.left === null && root.right === null) {
    return true;
  }
  return (hasPathSum(root.left, sum) || hasPathSum(root.right, sum));
};
