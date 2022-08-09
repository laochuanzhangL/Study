/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let tip=Infinity,sum=0
    for(let i of nums){
        sum+=i
        tip=Math.min(tip,sum)
    }
    return tip>=1?1:1-tip
};
nums = [-3,2,-3,4,2]
console.log(minStartValue(nums))