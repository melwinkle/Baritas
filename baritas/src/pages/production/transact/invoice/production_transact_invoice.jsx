import React from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col, Button } from 'reactstrap';
import Table from "react-bootstrap/Table";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import {FiLogOut} from "react-icons/fi";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
function ProductionIPage (){
    
          

  
       
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

              <div class="menuitem">
              <Link to="/production/alert/"> <button><FaBell/><div> Alerts</div>
             </button></Link>
             
              </div>
              <div class="menuitem c">
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

            <Container id="invt">

            <Row>
        <Link to="/production/transact/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>


                <Row id="invtr">
                <div class="addi c">
         
         <h3>Invoice#124</h3>
         <Container>
             <Row>
                 <Col>From:</Col>
                 <Col><h4>From</h4></Col>
                
             </Row>
             <Row>
             <Col>To:</Col>
                 <Col><h4>To</h4></Col>

             </Row>

             <Row>
             <Table  bordered id="invtb">
            <thead>
                <tr>
                <th>#</th>
                <th>Item</th>
                <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>500</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>500</td>
                </tr>
                <tr>
                
                <td colSpan="2">TOTAL</td>
                <td>GHC 1000</td>
                </tr>
            </tbody>
            </Table>
             </Row>

             <Button id="dinv" >Download Invoice</Button>
         </Container>
       
     </div>

     
                </Row>

                
            </Container>

          
        
            

          </div>
        );
    }


export default ProductionIPage;




