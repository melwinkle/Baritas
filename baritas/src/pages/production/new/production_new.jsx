import React from 'react';
import "../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";

 class ProductionNPage extends React.Component{
    
          

    render() {
       
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
         
         <h3>Invoice</h3>
         <form>
             <Container>
                 <Row>
                     <Col><label>Date</label>
             <input type="text" placeholder="Item name"/></Col>
             <Col><label>Branch</label>
                     <select>
                         <option value="Sauces">Adenta</option>
                         <option value="Hot/Spicy">Madina</option>
                         <option value="Hot/Spicy">Campus Hub</option>
                         <option value="Hot/Spicy">Production</option>
                         
                     </select></Col>
             </Row>


             


                 <Row>
                     <Col>
                     <label>Product</label>
                     <select>
                         <option value="Sauces">Adenta</option>
                         <option value="Hot/Spicy">Madina</option>
                         <option value="Hot/Spicy">Campus Hub</option>
                         <option value="Hot/Spicy">Production</option>
                         
                     </select>
             </Col>

             </Row>


             <Row>
             <Col>
             <label>Quantity</label>
             <input type="number" /></Col>
             
                 </Row>

                 

                 <Row><button>Save</button></Row>
                
             </Container>
             


             

             
             
             

             
         </form>

     </div>
                </Row>
            </Container>

          
        
            

          </div>
        );
    }
}

export default ProductionNPage;




