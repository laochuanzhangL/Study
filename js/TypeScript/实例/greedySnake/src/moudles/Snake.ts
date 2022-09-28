export default class Snake{
    snakeEle: HTMLElement;
    head:HTMLElement;
        //创建一个属性用来记录蛇是否存活
    bodies:HTMLCollection;
    isLive=true
    constructor(){
        this.snakeEle=document.getElementById('snake')!;
        this.head=document.querySelector('#snake>div') as HTMLElement;
        this.bodies=this.snakeEle.getElementsByTagName('div');
    }
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X(value:number){
        if(this.X===value)
        return;
        if(value>=290||value<=0){
           this.isLive=false
        }
        if(this.bodies[1]&&(this.bodies[1]as HTMLElement).offsetLeft===value){
            //如果发生的掉头，让蛇向反方向继续移动
            if(value>this.X){
                //如果新增value大于旧值X，则说明蛇向右走，此时发生掉头，应让蛇继续向左走，
                //之后的移动便向反方向移动
                value=this.X-10;
            }else{
                value=this.X+10;
            }
        }
        
        this.moveBody();
        this.head.style.left=value+'px';
        this.checkHeadBody()
    }
    set Y(value:number){
        if(this.Y===value)
        return;
        if(value>=290||value<=0){
            this.isLive=false
        }
        if(this.bodies[1]&&(this.bodies[1]as HTMLElement).offsetTop===value){
            //如果发生的掉头，让蛇向反方向继续移动
            if(value>this.Y){
                
                value=this.Y-10;
            }else{
                value=this.Y+10;
            }
        }
        this.moveBody();
        this.head.style.top=value+'px';
        this.checkHeadBody()
  
    }
    //添加身体
    addBody(){
    this.snakeEle.insertAdjacentHTML("beforeend","<div></div>")
    }
    //蛇身体移动
    moveBody(){
        for(let i=this.bodies.length-1;i>0;i--){
            //获取前面身体的位置
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';
        }
    }
    //检查蛇和身体是否相撞
    checkHeadBody(){
        //获取所有身体,检查是否和蛇头的坐标重叠
        for(let i=1;i<this.bodies.length;i++){
            if(this.X===(this.bodies[i]as HTMLElement).offsetLeft&&this.Y===(this.bodies[i]as HTMLElement).offsetTop)
            {
                this.isLive=false
            }
        }
    }
}