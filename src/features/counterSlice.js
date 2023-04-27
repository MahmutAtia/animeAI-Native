import { createSlice } from "@reduxjs/toolkit";

initState = {
    num:0
}

counterSlice = createSlice({

    name: "counter",
    initialState:initState,
    reducers:{
        add : state=>{state.num++},
        substract : state=>{state.num--},
        add_payload : (state,action)=>{state.num += action.payload}
    }
})

export default counterSlice
export const {add,substract,add_payload} = counterSlice.actions