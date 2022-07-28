/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
    this.arr=new Array()
    this.size=size
    this.result=0
    this.sum=0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    const {arr,sum,size,result}=this
    arr.push(val);
    let i=0
    sum=0
    while(i<size){
        if(arr[arr.length-1-i]){
            sum+=arr[arr.length-1-i]
        }
        i++
    }
    result=sum/(arr.length<size?arr.length:size)
    return result
    
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */