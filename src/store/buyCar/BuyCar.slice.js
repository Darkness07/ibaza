import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [],
}

export const buycarSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addBuycar:(state, action)=>{
            if(!state.value.some(lol=>lol.id===action.payload.id)){
                state.value.push(action.payload)
            }
            else{
                state.value = state.value.filter(lol => lol.id!==action.payload.id)
            }
        }

    },
})
export const {addBuycar}=buycarSlice.actions
export default buycarSlice.reducer