import { INCREMENT, DECREMENT , COUNTDOWN , DEFAULTCOUNTDOWN , RESET , STOP } from "./actions";

const initialState = {
    seconds:0 
}

const reducer = (state = initialState , actions)=>{
    switch(actions.type){
        case INCREMENT:
            return {
                ...state,
                seconds:state.seconds+60  
            }

        case DECREMENT:
            return {
                ...state,
                seconds: state.seconds-60 
            } 
        case RESET:
            return {
                seconds:0, 
            }
        case COUNTDOWN:
            return{
                seconds:state.seconds-1 
            }
        case STOP:
                return{
                    ...state  
                }
        case DEFAULTCOUNTDOWN:
            return {
                seconds:0 
                
            } 
        default: return state
    }
}

export default reducer