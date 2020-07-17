import React from 'react';
import PropTypes from 'prop-types'; 

import { Table } from 'react-bootstrap';


const ListView = ({elementList, title, onUpdateCallback }) => {
    
    
   
    return (
        <div>
            <h5>{ 'Cochez les elements actifs' || 'Filter List' }</h5>
            <Table striped bordered hover>
                <tbody>                    
                    {                        
                        elementList.map(element => {
                            return (
                            <tr className="calculation-element-simple" key={element.code}>
                                <td>
                                    <input type="checkbox" 
                                        name ={`${element.code}_active`}    
                                        onClick ={e=> {  onUpdateCallback(e,element.code);} }   
                                        checked= {element.active?true:false} />
                                </td>
                                <td>{element.code}</td>
                                <td>{element.libelle}</td>
                            </tr>   
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>

    );
}


export default ListView;


ListView.propTypes = {
    title : PropTypes.string,
    elementList : PropTypes.array.isRequired
}