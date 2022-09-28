export default class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    maxLevel:number;
    constructor(maxLevel:number =10){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.maxLevel=maxLevel;
    }
    scoreAdd(){
        this.scoreEle.innerHTML=++this.score+'';
        if(this.score%5===0){this.levelAdd()}
    }
    levelAdd(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+'';
        }
    }
}