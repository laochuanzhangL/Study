/**
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
    let num=n.toString(2)
    console.log(num)
    let res=0,arr=[]
    for(let i in num){
        if(num[i]=='1'){
            arr.push(parseInt(i))
        }
    }
    for(let i=1;i<arr.length;i++){
        res=Math.max(arr[i]-arr[i-1],res)
    }
    return res
};
console.log(binaryGap(22))