//定义食物类Food
export default class Food{
    //定义一个属性表示食物所对应的元素
    foodEle:HTMLElement;
    constructor(){
        //将页面中的food元素赋值给element
        this.foodEle=document.getElementById("food")!;
    }
    //定义获得食物X轴,Y轴坐标的方法
    get X(){
        return this.foodEle.offsetLeft;
    }
    get Y(){
        return this.foodEle.offsetTop;
    }
    //修改食物的位置
    change(){
        let x=Math.round((Math.random()*29))*10;
        let y=Math.round((Math.random()*29))*10;
        this.foodEle.style.left=`${x}px`;
        this.foodEle.style.top=`${y}px`;
    }
}