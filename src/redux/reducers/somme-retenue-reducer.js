import initialState from './initialState'; 
import * as actions from '../actions/actions'


export default function sommeRetenueReducer(state = initialState.sommeRetenue, action) {
    switch (action.type) {               
        case actions.SET_SOMME_RETENUE:  {          
                 return  action.valeur                    
            }        
        default:
            return state;
    }
}

