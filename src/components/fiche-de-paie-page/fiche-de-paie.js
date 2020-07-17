import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import  * as entetActions from '../../redux/actions/enteteActions';
import * as pcActions from '../../redux/actions/pcActions';
import * as piActions from '../../redux/actions/piActions';
import * as pniActions from '../../redux/actions/pniActions';
import * as salairesActions from '../../redux/actions/salaireActions';
import * as retenuActions from '../../redux/actions/retenu-actions';
import * as netApayerActions from '../../redux/actions/net-apayer-actions';


import {Table, Badge } from 'react-bootstrap'

import CalculationElementList from './calculations-element-list';
import CalculationElementSimple from './calculation-element-simple';
import InformationHeaderFicheDePaie from './information-header-fiche-de-paie'

import {calcIrg} from '../irg-calculator-page/irg-calculator-page';


 import MoneyConverter from '../common/converters/money-converter'
 

const Months = [{value:1,text:"Janvier"}, {value:2,text:"Fevrier"}, {value:3,text:"Mars"}, {value:4,text:"Avril"},
     {value:5,text:"Mai"}, {value:6,text:"Juin"}, {value:7,text:"Juillet"}, {value:8,text:"Aout"}, {value:9,text:"Septembre"},
     {value:10,text:"Octobre"}, {value:11,text:"Novembre"}, {value:12,text:"Décembre"}]; 
 

export const calcSumPC = (table) =>table.reduce( (pc , c)  => pc + parseFloat(c.valeur) ,0)

const FicheDePaye = (props) => {

  const CalcSumOfActive = (table) => calcSumPC(table.filter(e=>e.active))
  
  
   const  updateFicheState = (event) =>{
      const {name , value} = event.target;
      if (name === 'handicap')
        props.toggleEnteteHandicapField();
      else if (name.split(".").length >1)
        props.setEntetPeriode(name,value)
      else
      props.setEnteteField(name, value);
       
    }

    
    useEffect(() => {
      //console.log('New value', props.primesCotisable[0].valeur) 
      props.recalculateSalaire(CalcSumOfActive(props.primesCotisable))
      return () => {
        //console.log('Prev value', props.primesCotisable[0].valeur) 
      }

  }, [props.primesCotisable,props.salaires.salaireDeBase])

  useEffect(() => {
    //console.log('SBase New value') 
    props.setAllPCBase(props.salaires.salaireDeBase.valeur);
    return () => {
      //console.log('SBase Prev value') 
    }

  }, [props.salaires.salaireDeBase])
 
  useEffect(() => {
    //console.log('SPost New value') 
    props.setRetenueField('R001','R001_base',props.salaires.salaireDePoste.valeur)
    return () => {
      //console.log('SPost Prev value') 
    }

  }, [props.salaires.salaireDePoste])

  useEffect(() => {
    //console.log('SIMPO New value') 
    const x = props.salaires.salaireDePoste.valeur ;
    const y =  calcSumPC(props.primesImposable) ;
    const z =  props.retenus[0].valeur    ;
    
    props.setSalaireField('S003','S003_valeur',x+y-z);
  
    return () => {
      //console.log('SIMPO Prev value') 
    }

  }, [props.salaires.salaireDePoste,props.retenus,props.primesImposable])



  useEffect(() => {
    const x =  calcIrg(props.salaires.salaireImposable.valeur, false);
    props.setRetenueField('IRG','IRG_base',x)         
    return () => {
      //console.log('IRG Prev value') 
    }

  }, [props.salaires.salaireImposable.valeur])

  useEffect(() => {
    
         
    props.setSalaireField('S004','S004_valeur',props.salaires.salaireImposable.valeur-props.retenus[2].valeur);
    return () => {
      //console.log('IRG Prev value') 
    }

  }, [props.retenus[2].valeur,props.salaires.salaireImposable.valeur])


  useEffect(() => {         
    props.setNetAPayer(props.salaires.salaireNet.valeur+calcSumPC(props.primesNonImposable));
    return () => {
      //console.log('IRG Prev value') 
    }

   }, [props.salaires.salaireNet.valeur,props.primesNonImposable])
 
 
  
 

  
  const updatePCField = (event,code) => {
      const {name , value} = event.target;               
      props.setPCField(code,name,value);
        
      
    }          
    const updatePIField = (event,code) => {
      const {name , value} = event.target;
      props.setPIField(code,name,value);
    }           
   
    const updatePNIField= (event,code) => {
      const {name , value} = event.target;
      props.setPNIField(code,name,value);
    }           

    const updateSalaireField = (event,code) => {
      const {name , value} = event.target;
      props.setSalaireField(code,name,value);
    }           
  
    const updateReteueField = (event, code) => {
      const {name, value } = event.target;
      props.setRetenueField(code,name,value);
    }

    return (
        <div className="container">
        <InformationHeaderFicheDePaie updateFicheState={updateFicheState}  Months={Months} title={'Fiche de Paie'} />
          <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Libelle</th>
                <th>Base</th>
                <th>Taux</th>
                <th>Gains</th>
                <th>Retenues</th>
              </tr>
            </thead>
            <tbody>
              <CalculationElementSimple element={props.salaires.salaireDeBase} updateCallBack={updateSalaireField} />
              </tbody>
          </Table>
          
              <CalculationElementList title={'Primes Cotisables'} ElementList={props.primesCotisable} updateCallBack={updatePCField} />
           
          
              <CalculationElementList title={'Primes Imposable'} ElementList={props.primesImposable} updateCallBack={updatePIField} />
   
          
              <CalculationElementList title={'Primes NoN Cotisables / Non Imposable'} ElementList={props.primesNonImposable}  updateCallBack={updatePNIField} />
      
          <Table striped bordered hover>
          <tbody>
              <CalculationElementSimple element={props.salaires.salaireDePoste} updateCallBack={updateSalaireField} />
              </tbody>
          </Table>
    
           <Table striped bordered hover>
          <tbody>
              <CalculationElementSimple element={props.retenus[0]} updateCallBack={updateReteueField} />
              </tbody>
          </Table>
          <Table striped bordered hover>
          <tbody>
              <CalculationElementSimple element={props.retenus[2]} updateCallBack={updateReteueField} />
              </tbody>
          </Table>
    
          <Table striped bordered hover>  
              <tbody>
                <CalculationElementSimple element={props.salaires.salaireImposable}  />      
              </tbody>
          </Table>
          <Table striped bordered hover> 
              <tbody>
                <CalculationElementSimple element={props.salaires.salaireNet} />                
              </tbody>
          </Table>
       

          

          

       
          <Table striped bordered hover>
          <tbody>
              <tr className="calculation-element">
                <td colSpan="4">Total</td>
                
                <td>                  
                {props.sommeGain}
                </td>                                 
                <td >                  
                {props.sommeRetenue}
                </td>                                 
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Net a payer </td>
           
                      <td className="gain-cell" colSpan="2"> <Badge variant="success">{MoneyConverter(  props.netApayer)}</Badge>
            
                </td>                                 
              </tr>
            </tbody>
          </Table>
    

             

            

             
        
            
            
            

          </div>
         </div>
    )
}
 

const mapStateToProps = (state,) => {
  
  return {
    entete : state.entete,
    primesCotisable :state.primesCotisable,
    primesImposable : state.primesImposable,
    primesNonImposable : state.primesNonImposable,
    retenus : state.retenus, 
    salaires : state.salaires,
    sommeGain: state.sommeGain,
    sommeRetenue : state.sommeRetenue,
    netApayer : state.netApayer,
    

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEnteteField : (fieldName, value) => dispatch(entetActions.setEnteteField(fieldName, value)),
    setEntetPeriode : (fieldName, value) =>dispatch(entetActions.setEntetePeriodeField(fieldName,value)),
    toggleEnteteHandicapField :()=>dispatch(entetActions.toggleEnteteHandicapField()),
    setPCField : (code,fieldName, value) =>  dispatch(pcActions.setPCField(code,fieldName, value)),              
    setPIField : (code,fieldName, value) =>dispatch(piActions.setPIField(code,fieldName, value)),
    setPNIField:  (code,fieldName, value) =>dispatch(pniActions.setPNIField(code,fieldName, value)),    
    setNetAPayer : (valeur) => dispatch(netApayerActions.setNetAPayer(valeur)),
    setSalaireField : (code,fieldName, value) =>dispatch(salairesActions.setSalaireField(code,fieldName, value)),
    recalculateSalaire:(sumpc)=> dispatch(salairesActions.recalceSalaires(sumpc)),
    setRetenueField : (code,fieldName, value) =>  dispatch(retenuActions.setRetenueField(code,fieldName, value)),
    setAllPCBase:  (value) =>  dispatch(pcActions.setAllPCBase(value)),              
  }
}



FicheDePaye.propTypes = {
  dispatch : PropTypes.func,
  entete : PropTypes.object,
  salaires : PropTypes.object,
  primesCotisable :PropTypes.array,
  primesImposable : PropTypes.array,
  primesNonImposable : PropTypes.array,
  setEnteteField :  PropTypes.func,
  setEntetPeriode : PropTypes.func,
  toggleEnteteHandicapField :PropTypes.func,
  setPCField :PropTypes.func,
  setPIField : PropTypes.func,
  setPNIField: PropTypes.func,
  setSalaireField: PropTypes.func,
  sommeGain: PropTypes.number,
  sommeRetenue : PropTypes.number,
  netApayer : PropTypes.number,
  calcSumPC: PropTypes.func,
  recalculateSalaire: PropTypes.func,
  retenus  :PropTypes.array,
  setAllPCBase: PropTypes.func,
  setRetenueField: PropTypes.func,
  setNetAPayer: PropTypes.func,
}

export default connect(mapStateToProps,mapDispatchToProps)(FicheDePaye);