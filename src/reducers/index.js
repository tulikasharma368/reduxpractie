import counterReducer from "./counter";
import loggedReducer from './isloggedin'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter:counterReducer,//counter is name and counterReducer is the reducer
    isLogged: loggedReducer
})

export default allReducers;