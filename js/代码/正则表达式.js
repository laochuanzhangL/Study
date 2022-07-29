// var reg3 = /\d(\w)\d/;
// var str = '1a2b3c4d5e';
// var arr = reg3.exec(str);
// console.log(arr)
var reg4 = /\d(\w)(\w)\d/g;
var str = '$1az2bb3cy4dd5ee';

while(arr = reg4.exec(str)){
  console.log(reg4.lastIndex + '\t' + arr.index + '\t' + arr.toString());
  //5    1   1az2,a,z
  //11   7   3cy4,c,y
console.log(arr)
}
