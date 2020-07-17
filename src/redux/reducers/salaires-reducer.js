import initialState from './initialState'; 
import * as actions from '../actions/actions'



export default function salairesReducer(state = initialState.salaires, action) {
    switch (action.type) {               
        case actions.SET_SALAIRES_FIELD:  {        
                let salaireKey =   Object.keys(state).filter(key => state[key].code === action.code)[0]
                const fieldName = action.fieldName.split('_')[1]                
                return Object.assign({...state},{[salaireKey]:{...state[salaireKey],[fieldName]:action.value}} );
            }        
        case actions.RECALCE_SALAIRES:  {
 
            return Object.assign({...state},
                {   salaireDePoste:{...state['salaireDePoste'],                
                    valeur:action.TotalPC+parseFloat(state['salaireDeBase'].valeur)
                    
                }
            });
        }        

        default:
            return state;
    }
}


 