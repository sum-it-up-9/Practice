export const AuthReducer=function(state={loggedIn:false},action){
    //no asynchronous code
    //do not mutate original state
    if(action.type === 'toggle'){
        return {...state,counter:state.counter+action.amount};
    }

    return state;
}