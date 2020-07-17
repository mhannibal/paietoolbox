import * as actions from './actions'
 
export const  setRetenueField = (code, fieldName, value) =>  {
      return  {
            type    : actions.SET_RETENU_FIELD,
            fieldName,
            value,
            code
        };
    }
    
   
 
 
    
   

