import React from 'react';
import CalculationElement from './calculation-element';
import CalculationElementSimple from './calculation-element-simple';

export default class CalculationListItemFactory {
    static build(elem, updateCallBack, retenu) {
        if (elem.readonly) 
            return( <CalculationElementSimple key={elem.id} element={elem} updateCallBack={updateCallBack}  retenu={retenu} />);
        else 
            return( <CalculationElement key={elem.id} element={elem} updateCallBack={updateCallBack}  retenu={retenu} />);
    }
}

 
