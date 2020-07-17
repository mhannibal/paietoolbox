import initialState from './initialState'; 
import * as actions from '../actions/actions'


export default function netApayerReducer(state = initialState.netApayer, action) {
     
    switch (action.type) {               
        case actions.SET_NET_APAYER:  {          
                 return  action.valeur                    
            }        
        default:
            return state;
    }
}

