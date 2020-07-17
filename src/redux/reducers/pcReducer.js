import initialState from './initialState'; 
import * as actions from '../actions/actions'



export default function pcReducer(state = initialState.primesCotisable, action) {
    switch (action.type) {               
        case actions.SET_PC_FIELD:  {          
                 return state.map(e => {
                      
                        if(e.code===action.code) {
                            let  valeur = false
                            if  (action.fieldName.split('_')[1] === 'active') {
                                    valeur = !e.active;
                                    return {...e,[action.fieldName.split('_')[1]]: valeur }
                            } else 
                            {
                                valeur = action.fieldName.split('_')[1] === 'base'?action.value*e['taux']:action.value*e['base'];
                                return {...e,[action.fieldName.split('_')[1]]: action.value,valeur }
                            }    
                            
                        }
                            
                        else 
                            return e
                    });                             
            }        
        case actions.SET_ALL_PC_BASE:{
            return state.map( ( pc ) => {
                let x ={ ...pc, ['base']:action.value||0,['valeur']:parseFloat(action.value)*parseFloat(pc['taux'])} 
                 
                return   x
            });
        }          
        default:
            return state;
    }
}


