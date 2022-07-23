import express from 'express'
import { DataStore } from './data'
const app=express()
console.log(DataStore)
app.get('/',(req,res)=>{
    // res.end("DataStore.list")
    res.json(DataStore.list)
})

app.listen(8080,()=>{
    console.log("服务开启了")
})