import * as actions from './actions'
 
export const  setPCField = (code, fieldName, value) =>  {
      return  {
            type    : actions.SET_PC_FIELD,
            fieldName,
            value,
            code
        };
    }


export const setAllPCBase = (value) => {
        return {
            type    : actions.SET_ALL_PC_BASE,
            value
        }
    }