/* 该文件用来暴露一个store对象，整个应用只有一个store */

//引入createStore,专门创建redux中最核心的store对象
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//暴露store
export default createStore(countReducer,applyMiddleware(thunk))