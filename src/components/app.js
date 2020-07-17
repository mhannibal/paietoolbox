import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import IrgCalculator  from './irg-calculator-page/irg-calculator-page';
import FicheDePaye from './fiche-de-paie-page/fiche-de-paie'
import { Col,  } from 'react-bootstrap';

const HeaderPage =( ) =>(
    <ul>
        <li><Link to="/" > Irg Calculator</Link></li>
        <li><Link to="/reversecalc" > reverse calc</Link></li>
        <li><Link to="/fichedepaye">fiche de paye</Link> </li>
        <li><Link to="/clecalcule" >Calcule Clé  </Link></li>
        <li><Link to="/montantlettre">montantlettre</Link> </li> 
        <li><Link to="/apropos">help</Link></li>
    </ul>
)



const ReverseCalc = () =>(<p>Reverse Calc</p>);
const NetCalc = () =>(<p>Netcalc</p>);
const CleCalcule = () =>(<p>Cle Calcule</p>);
const MontantLettre = () =>(<p>Montant Lettre</p>);
const APropos = () =>(<p>A Propos</p>);
const PageNotFound = () =>(<p>Page Not Found</p>);



const App = (props)=> {


    return (
        <div className="container-fluid row">
           <Col lg={2}>
            <HeaderPage />
           </Col>
           <Col>
                <Switch id="switch">
                    <Route exact path="/" render={() => 
                        <IrgCalculator title="Hello" {...props} />} 
                    />
                    <Route exact path="/reversecalc" component={ReverseCalc}/>
                    <Route exact path="/netcalc" component={NetCalc}/>
                    <Route exact path="/fichedepaye" component={FicheDePaye}/>
                    <Route exact path="/clecalcule" component={CleCalcule}/>
                    <Route exact path="/montantlettre" component={MontantLettre}/>
                    <Route exact path="/apropos" component={APropos}/>
                    <Route  component={PageNotFound}/>
                </Switch>
            </Col>
        </div>    
    )
}


export default App;