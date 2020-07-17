import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Form, Button, Collapse} from 'react-bootstrap'
import SelectInput from '../common/select-input'
import TextInput from '../common/text-input'
 
const InformationHeaderFicheDePaie = ({updateFicheState,Months,title}) => {
    const [open, setOpen] = useState(true);

    return (
        <>
        <div>
                <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                { open?'-':'+'}
                </Button> 
                { !open && <label>{title}</label> }
            </div>
        <Collapse className="information-header" in={open}>
        <div id="example-collapse-text">
        <h1>Fiche de paye</h1>
        <Row>
          <Col>
            <Form.Group >
                <Form.Label>Information d employeur</Form.Label>
                <Form.Control name="employerInfo" as="textarea" rows="3"  onChange={updateFicheState} />
            </Form.Group>           
          </Col>
          <Col>
            <div>              
              <Row>
                <Col>
                  <SelectInput
                    name="periode.month"
                    label="Periode"                                          
                    onChange={updateFicheState}
                    options={Months}              
                    placeholder="Mois"  
                  />            
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextInput
                  name="periode.year"                                       
                  label=""
                  placeholder="Année"  
                  onChange={updateFicheState}/> 
                </Col>
              </Row>
               
            </div>
          </Col>
        </Row>
        
            <Row>
            <Col>
                <TextInput
                name="matricule"
                label="Matricule"  
                onChange={updateFicheState}             
                />
            </Col>
            <Col>
                <TextInput
                name="ssNumber"
                label="N° SS"   
                placeholder={"Numero de securite sociale"}
                onChange={updateFicheState}            
                />
            </Col>
            </Row>

              
       
            <Row>           
                <Col>
        <TextInput
          name="fullName"
          label="Nom et Prenom"  
          placeholder={"Nom et Prenom"}
          onChange={updateFicheState}             
        />
        </Col>
        </Row> 
        <Row>           
                <Col>
        <TextInput
          name="embaucheDate"
          label="DATE Entree"  
          placeholder={"Date d'embauche"}
          onChange={updateFicheState}             
        />
         </Col>
        </Row> 
        <Row>
          <Col>
            <TextInput 
              name="situationFamilliale"
              label="Situation Familliale"  
              placeholder={"Situation Familliale"}  
              onChange={updateFicheState}                         
            />                
          </Col>
          <Col>
             
             <Form.Check 
                type={'checkbox'}                  
                label={'Handicape'}
                name='handicap'
                onChange={updateFicheState}
              />
        
          </Col>
        </Row>
        </div>
            </Collapse>
       </>   
    );
}

InformationHeaderFicheDePaie.propTypes = {
    updateFicheState : PropTypes.func,
    Months : PropTypes.array,
    title: PropTypes.string
}


export default  InformationHeaderFicheDePaie;

