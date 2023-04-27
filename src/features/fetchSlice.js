import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

init = {url :""}




const urlSlice = createSlice(
   { name:"fetch",
    initialState:init,
    reducers:{
        changeUrl : (state,action)=>{
            state.url = action.payload
        }


    }}
)

export default urlSlice
export const {changeUrl} = urlSlice.actions