import { createSlice } from "@reduxjs/toolkit";

const  requestSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addrequest:(state,action)=>{
            return action.payload

        },
        removerequest:(state,action)=>{
            return null
        }
    }
})
export const {addrequest,removerequest} = requestSlice.actions;
export default requestSlice.reducer;