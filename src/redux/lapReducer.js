
import {CREATELAP , REMOVELAP , RESETLAP} from './actions'
const initialState = {
    laps:[]
} 
const reducer =(state =initialState , action)=>{
    switch(action.type){
        case CREATELAP:
             const newlaps = [...state.laps]
            return {
                ...state,
                laps:newlaps.concat(action.payload)
            }
        case REMOVELAP: 
            return {
                ...state,
                laps:state.laps.filter((lap,index)=> index!== action.payload)
            }
        case RESETLAP:
        return{
            ...state,
            laps:[]
        }
        default: return state
            
    }
}


export default reducer