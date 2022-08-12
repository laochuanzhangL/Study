/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
    if(num<2)return false
    let sum=1
    for(let d=2;d*d<num;d++){
        if(num%d==0)
        sum+=d+num/d
    }
    return sum==num
};
console.log(checkPerfectNumber(28))