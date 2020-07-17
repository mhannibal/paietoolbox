import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

import NumberInput from '../common/number-input';
import MoneyConverter from '../common/converters/money-converter'

export default  function CalculationElementSimple({element, updateCallBack, retenu}) {
    return (   
        <tr className="calculation-element-simple" key={element.code}>
                <td>{element.code}</td>
                <td>{element.libelle}</td>
                <td colSpan="2">
                  <NumberInput 
                    readonly= {element.readonly?true:false}                      
                    name ={`${element.code}_valeur`}                
                    placeholder={element.acro}
                    value={element.valeur}
                    onChange={(e)=>updateCallBack(e,element.code)}       
                  />  
                </td>                

                <td className="gain-cell">{ !retenu &&  (   <Badge variant="success">{MoneyConverter(element.valeur)}</Badge>)  }</td>
               <td className="retenu-cell">{ retenu && (   <Badge variant="danger">{MoneyConverter(element.valeur)}</Badge>)  }</td>
              </tr>     
     
    )
}


CalculationElementSimple.propTypes = {
    element : PropTypes.object,
    retenu : PropTypes.bool,
    updateCallBack :  PropTypes.func,
 
  }
  