import React , { useState } from 'react';
import PropTypes from 'prop-types'

import ListView from './list-view';

import { Button, Collapse, Table, Modal  } from 'react-bootstrap';
import { ArrowsAngleExpand, ArrowsAngleContract, ListCheck }  from 'react-bootstrap-icons'
import CalculationListItemFactory from './calculation-list-item-factory';


 

export default  function CalculationElementList({ElementList, updateCallBack , retenu, title}) {
    
    //toolbuttons state
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);
    //modal state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <div className='list-title'>
            <div>
            { !open && (
                <>
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        title = "maximiser"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    ><ArrowsAngleExpand/></Button> 
                    <label>{title}</label> 
                </>)
            }
            </div>
            <Collapse  in={open}>
                <div id="example-collapse-text" onMouseEnter={(e)=>setHover(true)}  onMouseLeave={(e)=>setHover(false)}>
                        {hover &&  (
                            <>
                            <div className="float-panel panel-top-left"> 
                                <Button
                                title="minimiser"
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}><ArrowsAngleContract/></Button>
                                
                            </div>
                            <div className="float-panel panel-btn"> 
                                <Button
                                title="modifier"
                                variant="outline-secondary"
                                
                                onClick={handleShow}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}><ListCheck /></Button>
                                
                            </div>
                            </>
                            )
                            } 
                    <Table striped bordered hover>
                        <tbody>
                            
                            {
                                
                                ElementList.map(elem => {
                                    return (elem.active && CalculationListItemFactory.build(elem,updateCallBack, retenu));
                                })
                            }
                        </tbody>
                    </Table>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <ListView elementList={ElementList} title={title} onUpdateCallback={updateCallBack} />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Enregistrer les modifications
                        </Button>
                        </Modal.Footer>
                    </Modal>
              
                </div>               
            </Collapse>
            
        </div>
    );
        
}

CalculationElementList.propTypes = {
    ElementList: PropTypes.array,
    updateCallBack : PropTypes.func ,
    retenu: PropTypes.bool,
    title:PropTypes.string,
} 