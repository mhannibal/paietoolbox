import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

import NumberInput from '../common/number-input';
import MoneyConverter from '../common/converters/money-converter'


export default  function CalculationElement({element, updateCallBack, retenu}) {
    return (        
      <tr className="calculation-element" key={element.code}>
        <td>{element.code}</td>
        <td>{element.libelle}</td>
        <td>
          <NumberInput 
            name ={`${element.code}_base`}
            placeholder={element.acro}  
            value={element.base}
            onChange={(e)=>updateCallBack(e,element.code)}           
          />  
        </td>                
        <td>
          <NumberInput 
              name ={`${element.code}_taux`}
              placeholder={`${element.acro} taux`}  
              value={element.taux}
              onChange={(e)=>updateCallBack(e,element.code)}          
              />  
        </td>
        <td className="gain-cell">{ !retenu &&  (   <Badge variant="success">{MoneyConverter(element.valeur)}</Badge>)  }</td>
        <td className="retenu-cell">{ retenu && (   <Badge variant="danger">{MoneyConverter(element.valeur)}</Badge>)  }</td>
      </tr>
    )
}


CalculationElement.propTypes = {
    element : PropTypes.object,
    retenu : PropTypes.bool,
    updateCallBack :  PropTypes.func,
 
  }
  