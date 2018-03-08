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
  // DFS method to find sum
  // stop if over sum
  // subtract node values from sum to determine if we can reach sum on that path
  // only need to find one path
  let pathExists = false;
  if (root === null) {
    pathExists = false;
  } else {
    if (sum - root.val === 0) {
      if (!root.left && !root.right) {
        pathExists = true;
        return pathExists;
      } else {
        pathExists = false;
      }
    } else if (sum - root.val < 0) {
      pathExists = false;
    } else {
      sum -= root.val;
      const leftPath = hasPathSum(root.left, sum);
      const rightPath = hasPathSum(root.right, sum);
      if (leftPath) {
        return true;
      }
      if (rightPath) {
        return true;
      }
    }
  }
  return pathExists;
};
