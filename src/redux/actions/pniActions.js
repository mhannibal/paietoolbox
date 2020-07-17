import * as actions from './actions'
 
export function setPNIField(code, fieldName, value)
{
    return {
        type    : actions.SET_PNI_FIELD,
        fieldName,
        value,
        code
    }
}
