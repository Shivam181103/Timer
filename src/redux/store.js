import { createStore, combineReducers} from 'redux'
import timerReducer from './timerReducer'
import lapReducer from './lapReducer'
const combineReducer = combineReducers({
    tmr : timerReducer,
    lps: lapReducer
})

const store =  createStore(combineReducer);


export default store