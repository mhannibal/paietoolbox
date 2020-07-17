import initialState from './initialState'; 
import * as actions from '../actions/actions'



export default function enteteReducer(state = initialState.entete, action) {
    switch (action.type) {        
        case actions.TOGGLE_ENTETE_HANDICAP_FIELD:
            return  {...state, handicap:!state.handicap};
        case actions.SET_ENTETE_PERIODE_FIELD:
            return  {...state, periode: {...state.periode, [action.fieldName.split(".")[1]]: action.value} };
        case actions.SET_ENTETE_FIELD:            
            return  {...state, [action.fieldName]: action.value };
        
        default:
            return state;
    }
}



 