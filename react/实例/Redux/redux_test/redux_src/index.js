import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'
ReactDOM.render(<App/>,document.getElementById('root'))
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})