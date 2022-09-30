/* 为Count组件生成action对象 */
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction=data=>({type:INCREMENT,data})

export const createDecrementAction=data=>({type:DECREMENT,data})
//异步action 就是值action的值为函数 ， 异步action一般会调用同步action
export const createIncrementAsyncAction=(data,time)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
            console.log("@@");
        },time)
    }
}