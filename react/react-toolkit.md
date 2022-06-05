
# Slice
```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//createAsyncThunk创建异步action,被触发时会有三个状态
//pending(进行中) fulfilled(成功) rejected(失败)
const initialState = {
  userId: null,
}
export const loadData= createAsyncThunk('movie/loadData',async()=>{
		const res =await loadMoviesAPi()//请求数据的函数
    return res//此处的返回结果会在.fulfilled中作为payload的值
	})
export const userInfoSlice = createSlice({
  //命名空间
  name: 'userInfo',
  //初始值
  initialState:{},

  reducers: {
    getUserId: (state, action) => {
      state.userId = action.payload
    },
  },
  //可以额外的触发其他slice中的数据关联改变
  extraReducers: {
  [loadData.fulfilled](state,{payload}){
		console.log(payload);
    state.list=payload.data.list;
  },
    [loadData.rejected](state,err){
		console.log(err);
  },
    [loadData.pending](state){
		console.log('进行中');
  },
  },
})
//导出reducer
export const userInfoSliceReducer = userInfoSlice.reducer
//导出actions
export const { getUserId: getUserIdAC } = userInfoSlice.actions
```

# store
```javascript
import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  userInfoSliceReducer,
} from "./reducers";

const rootReducer = combineReducers({
  userInfo: userInfoSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
```

在运用react-toolkit需要在最外层添加Provider<br />例如：
```javascript

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  document.getElementById('root')
```


# 使用数据
```javascript
import { useSelector } from 'react-redux'

 const userId = useSelector((state) => state.userInfo.userId)
```

# 更改数据

```javascript
//引入action
import { getUserIdAC } from '../../../redux/actionCreators'

import { useDispatch } from 'react-redux'

  // 拿到派发action的工具
const dispatch = useDispatch()
// 通过getUserIdAC生成action，然后dispatch出去更改reducer中的userId
dispatch(getUserIdAC(userId))
```
