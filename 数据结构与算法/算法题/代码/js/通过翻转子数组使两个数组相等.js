/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    if(target.length!=arr.length)return false
    target.sort((a,b)=>{return a-b})
    arr.sort((a,b)=>{return a-b})
    for(let i in target){
        if(target[i]!==arr[i])return false
    }
    return true
};
let target = [1,6,2,3,4], arr = [2,4,1,3]
console.log(canBeEqual(target, arr))