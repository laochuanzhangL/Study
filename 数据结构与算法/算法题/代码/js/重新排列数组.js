/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr1 = nums.slice(0, n),
    arr2 = nums.slice(n),res=[]
    for(let i=0;i<n;i++){
        res.push(arr1[i])
        res.push(arr2[i])
    }
  return res
}
let nums = [2, 5, 1, 3, 4, 7],
  n = 3

console.log(shuffle(nums, n))
