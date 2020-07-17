import * as actions from './actions'
 
export function setPIField(code, fieldName, value)
{
    return {
        type    : actions.SET_PI_FIELD,
        fieldName,
        value,
        code
    }
}
