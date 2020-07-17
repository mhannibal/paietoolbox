import * as actions from './actions'
 
export function setSalaireField(code, fieldName, value)
{
    return {
        type    : actions.SET_SALAIRES_FIELD,
        fieldName,
        value,
        code
    }
}
 
export function recalceSalaires(TotalPC)
{
    return {
        type    : actions.RECALCE_SALAIRES,         
        TotalPC
    }
}

