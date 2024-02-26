
export const Countreducer=function(state={counter:0},action){
    //no asynchronous code
    //do not mutate original state
    if(action.type === 'increment'){
        return {...state,counter:state.counter+action.amount};
    }

    return state;
}

