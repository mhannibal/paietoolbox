import * as actions from './actions'
 
export function setNetAPayer(valeur)
{
    return {
        type    : actions.SET_NET_APAYER,
        valeur,
        
    }
}
