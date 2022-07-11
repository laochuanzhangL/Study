let express=require('express')
let webpack=require('webpack')
let app=express();

//中间件
let middle=require('webpack-dev-middleware')

let config=require('./webpack.common.js')

let compiler=webpack(config)

app.use(middle(compiler))

app.get('/user',(req,res)=>{
    res.json({name:'lcz'})
})

app.listen(3000);