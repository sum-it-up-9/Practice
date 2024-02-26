import {createStore,combineReducers}  from 'redux';
import { Countreducer } from './counter';


const rootReducer=combineReducers({
    count:Countreducer
});

const store=createStore(rootReducer);

export default store;