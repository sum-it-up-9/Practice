import {configureStore,createSlice} from '@reduxjs/toolkit';


const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increment(state,action){
            console.log(state,action);
           state.counter+=action.payload.amount;
        },
        
    }
})

export const actions=counterSlice.actions;

export const store=configureStore({
    reducer:{counter:counterSlice.reducer}
})