import * as actions from './actions'

export function setEnteteField(fieldName, value)
{
    return {
        type    : actions.SET_ENTETE_FIELD,
        fieldName,
        value
    }
}


export function  setEntetePeriodeField(fieldName, value) 
{
    return {
        type    : actions.SET_ENTETE_PERIODE_FIELD,
        fieldName,
        value
    }
}

export function toggleEnteteHandicapField(){
    return {
        type    : actions.TOGGLE_ENTETE_HANDICAP_FIELD,
    }
}
 