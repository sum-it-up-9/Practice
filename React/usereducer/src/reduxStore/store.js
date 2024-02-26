import {createStore,combineReducers} from "redux";

const reducer=combineReducers({
    //this contians all reducers
})

const initialState={
    count:0,
    num:0
};


//two arguments: reducer function and initialState
export const store=createStore(reducer,initialState);

console.log(store.getState());

