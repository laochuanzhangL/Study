let add = function (a, b) {
     while(b!=0){
        let remain = (a & b)<<1;
        let  carry = a ^ b;
             a = carry;
             b = remain;
     }
  return (a & b)
}
console.log(add(5, 6))
