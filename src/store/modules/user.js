import {createSlice} from "@reduxjs/toolkit"

const userStore = createSlice({
  name:'user',
  initialState:{
    token:'',
  },
  //同步修改方法
  reducers:{
    setToken(state,action){
      state.token = action.payload
    }
  }
})

//解构actionCreater
export const {setToken} = userStore.actions

// 获取reducer函数
 const userReducer = userStore.reducer;
 
 export default userReducer;