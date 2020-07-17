import React , { useState } from 'react';

import NumberInput from '../common/number-input'
import MoneyConverter from '../common/converters/money-converter'

export const arrondiAuDizaineInferier = x => x-x%10;
const calcIRGAncien = (BruteImposable,handicap) => { 
    console.log(handicap)
    const table = {
        10000:0,
        20000:0.2,
        90000:0.3,
        90001:0.35        
        }

    let R = arrondiAuDizaineInferier(BruteImposable);
    let irg = 0;
    for(var t in table) {
        if (R<=0) break;
        if (R >= t)
            irg = irg + t*table[t];
        else 
            irg = irg + R*table[t];
        R = R-t;
        
    }
    let abbat = irg*0.4;
    if (abbat<1000) 
        abbat = 1000
    if (abbat >1500)
        abbat = 1500
    return  irg - abbat ;
}
export const calcIrg = (BruteImposable,handicap) => {
   
        console.log(handicap)
    if (BruteImposable<=30000)
        return 0;
    else if (BruteImposable<=35000)
        return Math.round(calcIRGAncien(BruteImposable)*(8/3)-(20000/3));
    else {
        return calcIRGAncien(BruteImposable);        
    }
}


const IrgCalculator = () => {

    const [ bruteImposable,setBruteImposable] = useState(0);

    const handleChange =(event)=>{
        event.preventDefault();
        setBruteImposable(event.target.value)
    }
    return (        
        <>
            <h1>Irg Calculator of </h1>
            <NumberInput 
                name ="salaireImposable_edit"
                placeholder="Salaire Imposable"                   
                onChange={(e)=>handleChange(e)}           
            />  
            
            Handicapé <input type="checkbox" />
            <h3>{ MoneyConverter(calcIrg(bruteImposable,false)) }</h3>
        </>
    )
}

 export default IrgCalculator; 


  