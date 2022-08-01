/**
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
    let result=new Array(n)
    if(n%2==0){
        result.fill('x')
        result[result.length-1]='y'
    }else{
        result.fill('x')
    }
    return result.join('')
};
console.log(generateTheString(12))
