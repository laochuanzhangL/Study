/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let arr = nums.sort((a, b) => a - b),min=arr[0],max=arr[arr.length-1]
  for(let i=min;i>0;i--){
    if(min%i==0&&max%i==0){
        return i
    }
  }
}

let nums = [2,5,6,9,10]
console.log(findGCD(nums))