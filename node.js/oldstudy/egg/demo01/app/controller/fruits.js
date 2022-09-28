const Controller = require("egg").Controller;

const fruitList = ["苹果", "香蕉", "鸭梨"];
class fruitsController extends Controller {
  async index() {
    this.ctx.body = fruitList;
  }

  async new() {
    this.ctx.body = `<form method='post' action='/fruits'>
        <input  name="fruitName" type="text"/>
        <button>添加</button>
      `;
  }
  async create() {
    let fruit = this.ctx.request.body.fruit;
    fruitList.push(fruit.fruitName);
    //重定向
    this.ctx.body = "添加成功";
    this.ctx.redirect("/fruits");
  }
  async show() {
    let query = this.ctx.params.id;
    this.ctx.body = `传递的数据是${query}`;
  }
  async destory() {
    this.ctx.redirect("/fruits");
  }
}

module.exports = fruitsController;
