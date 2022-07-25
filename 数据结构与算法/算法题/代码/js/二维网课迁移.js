var shiftGrid = function(grid, k) {
    let m=grid.length;
    let n=grid[0].length;
    let result=new Array(m).fill(new Array(n).fill(0))
    let arr=grid.flat(Infinity)
    let len=arr.length;
    while(k){
        let temp=arr[len-1]
        for(let i=len-1;i>0;i--){
            arr[i]=arr[i-1]
        }
        arr[0]=temp
        k--
    }
    let p=0
    for(let i=0;i<m;i++){
        result[i]=arr.slice(p,n+p)
        p+=n
    }
    return result
};
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1))