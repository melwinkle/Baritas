import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt,FaWindowClose,FaRegClock} from "react-icons/fa";

import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
function ProductionALPage () {
    
 
  
   

    
    return (
        
        <div class="proad">
           <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h2>B</h2></Col>
              
              </Row>
              
              
            </div>
            
          </SidebarHeader>
          <SidebarContent id="menuit">
              <div class="menuitem">
              <Link to="/production/"> <button><FaHome /><div> Home</div>
             </button></Link>
             
              </div>

              <div class="menuitem c">
              <Link to="/production/alert/"> <button><FaBell/><div> Alerts</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/production/transact/"> <button><FaStoreAlt/><div> Sales</div>
             </button></Link>
             
              </div>
           
              <div class="menuitem">
              <Link to="/"> <button><FiLogOut/><div> LogOut</div>
             </button></Link>
             
              </div>
            
             
             
             
             
            
          </SidebarContent>
          {/* <SidebarFooter>
            Baritas (c)
          </SidebarFooter> */}
        </ProSidebar>
      </div>
        
        <Container  id="ret">

       <Row id="mt">
                        <Col>  <Link to="/production/alert"><button class="o1 ac">Unread</button></Link></Col>
                        <Col> <Link to="/production/alert/archive"><button class="o1">Read</button></Link></Col>
       </Row>
           
            
        <Row id="nt">
             
                <Card id="salert">
                <Card.Header id="chead"><button id="nclose"><FaWindowClose/></button> <span id="salt">Stock Alert </span><span id="daten"><FaRegClock/>19th October,2021 8:10AM</span></Card.Header>
                <Card.Body>
                    <Card.Title>  Legon Campus Hub has run low on Jollof Sauce</Card.Title>
                    
                    
                </Card.Body>
                </Card>
              
                
               
               

        
        </Row>
        </Container>
            
        </div>

  

// next

  );

}

export default ProductionALPage;