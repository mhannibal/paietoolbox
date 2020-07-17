import { combineReducers } from 'redux';
import entete  from './enteteReducer';
import primesCotisable from './pcReducer'
import primesImposable from './piReducer'
import primesNonImposable from  './pniReducer'
import salaires from './salaires-reducer'
import sommeGain from './somme-gain-reducer' 
import sommeRetenue     from './somme-retenue-reducer' 
import netApayer from './net-apayer-reducer' 
import retenus from './retenu-reducer'

const rootReducer = combineReducers( {
    entete,
    primesCotisable,
    primesImposable, 
    primesNonImposable,
    salaires,  
    retenus,
    sommeGain,
    sommeRetenue,    
    netApayer,
 
});

export default rootReducer;