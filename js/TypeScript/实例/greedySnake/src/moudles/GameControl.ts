import Snake from "./Snake";
import Food from "./Food";
import ScorePanel  from "./ScorePanel";
export default class GameControl{
    food:Food;
    snake:Snake;
    scorePanel:ScorePanel;
    //蛇的移动方向
    direction:string='ArrowRight';


    constructor(){
        this.food=new Food();
        this.snake=new Snake();
        this.scorePanel=new ScorePanel();
    }

    //键盘按下的响应函数
    init(){
        document.addEventListener('keydown',e=>{
            this.direction=e.key;
        })
        this.run();
    }

    //蛇移动的方法
    run(){
        let X=this.snake.X;
        let Y=this.snake.Y;
        switch(this.direction){
            case "ArrowUp":
            Y -=10;
            break;
            case "ArrowDown":
            Y +=10;
            break;
            case "ArrowLeft":
            X -=10;
            break;
            case "ArrowRight":
            X+=10;
            break;
        }
        //游戏结束后就不会继续移动
        if(this.snake.isLive){
            this.snake.X=X;
            this.snake.Y=Y;
            this.checkEat(X,Y)
            setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)

        }
        else{
            alert("游戏结束!")
        }
    }
    checkEat(X:number,Y:number){
        if(X==this.food.X&&Y==this.food.Y){
            console.log("吃到食物了")
            //食物位置重置
            this.food.change();
            //分数增加
            this.scorePanel.scoreAdd();
            //蛇要增加一节
            this.snake.addBody();
        }
    }

}