/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function(arr) {
    let res=0
    let i =0,lmax=0,rmin
    while(i<arr.length){
        lmax=Math.max(lmax,arr[i])
        rmin=getMin(arr,i)
        if(lmax<=getMin(arr,i))res++
        i++
    }
   return res
};
var getMin=function(arr,i){
    let min=Infinity
    for(++i;i<arr.length;i++)
    min=Math.min(min,arr[i])
    return min
}
let arr=[2,1,3,4,4]
console.log(maxChunksToSorted(arr))