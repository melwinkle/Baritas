import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt,FaWindowClose,FaRegClock} from "react-icons/fa";


import { Container, Row, Col } from 'reactstrap';
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
class ProductionALPage extends React.Component {
    
 
  
   
  render() { 
    
    return (
        
        <div class="proda">
            <div class="naccor">
                <Container>
                    <Row>
                        <Col><Link to="/production/"> <button><FaHome/></button></Link></Col>
                        <Col> <Link to="/production/alert"><button><FaBell /></button> </Link></Col>
                        <Col> <Link to="/production/transact/"><button><FaStoreAlt /></button></Link> </Col>
                        <Col> <Link to="/"><button><FiLogOut /></button> </Link></Col>
                    </Row>
                </Container>
        
               
               
            </div>
        
            <div class="noptprod">
                <Container>
                    <Row>
                        <Col>  <Link to="/production/alert"><button class="o1 ac">GENERAL</button></Link></Col>
                        <Col> <Link to="/production/alert/archive"><button class="o1">ARCHIVE</button></Link></Col>
                    </Row>
                </Container>
            </div>
            
  
   
            <div class="notifs">
                <Container>
                 
                        
                        <div class="snotif">
                            <Row>
                                <Col>  <button><FaWindowClose/></button></Col>
                                <Col id="anotif">

                                <Row>
                              
                              <Col> <h5 id="tnotif">Stock Alert</h5></Col>
                              <Col>  <h6 id="dnotif"><FaRegClock/>19th October,2021 8:10AM</h6></Col>

                          </Row>
                        
                          <h5 id="branch">Legon Campus Hub</h5>
                          <h6 id="mnotif">Legon Branch has run low on Jollof Sauce</h6>
                          </Col>
                            </Row>
                            </div>
                        

                        
                        {/* <hr/> */}
                 
                    

                  
                    
                </Container>

            </div>
            
        </div>

  

// next

  );
}
}

export default ProductionALPage;