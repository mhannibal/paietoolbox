import initialState from './initialState'; 
import * as actions from '../actions/actions'


export default function retenuReducer(state = initialState.retenus, action) {
    switch (action.type) {               
        case actions.SET_RETENU_FIELD:  {          
                 return state.map(e => {
                        if(e.code===action.code) {                            
                            const valeur = action.fieldName.split('_')[1] === 'base'?action.value*e['taux']:action.value*e['base'];
                            return {...e,[action.fieldName.split('_')[1]]: action.value,valeur }
                        }    
                        else 
                            return e
                    });                             
            }        
        default:
            return state;
    }
}