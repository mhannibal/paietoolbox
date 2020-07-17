import initialState from './initialState'; 
import * as actions from '../actions/actions'


export default function sommeGainReducer(state = initialState.sommeGain, action) {
    switch (action.type) {               
        case actions.SET_SOMME_GAIN:  {          
                 return  action.valeur                    
            }        
        default:
            return state;
    }
}

