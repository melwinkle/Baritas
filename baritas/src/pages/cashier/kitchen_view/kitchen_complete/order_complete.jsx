

import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import { FiHome, FiLogOut} from "react-icons/fi";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../../../Header.css";
import '../../../../App.css';
import logo from "../../../../images/IMG_8850.JPG";



const OrderCPage = () => {
  
  

   
 

  return (
      <div class="order">

      
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>Baritas</p>
            </div>
            
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem  icon={<FiHome />}>
                New <Link to="/cashier/menu/"></Link>
              </MenuItem>
              <MenuItem active={true} icon={<FaList />}>Order</MenuItem>
              
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>


      <div class="midorder">
        <section class="completed" id="completed">
        <div class="topop">
              <Container>
                  <Row>
                      <Col><Link to="/cashier/kitchen_view/"><h4 class="com">Pending</h4></Link></Col>
                      <Col> <h4 class="active" id="act"><strong>Completed</strong></h4> </Col>        
                  </Row>
                </Container>
            </div>

            <div class="orders">
                <h4>#OrderL123</h4>
                <h6>Delivery:Waiter 1</h6>
                <div class="menit">
                    <span><img class="imgf"src={logo} width='60' height="40" alt="logo"></img>Meat Spring Rolls(3)<span><p>x1</p></span></span>
                    <h6>Ghc 10</h6>
                </div>

                <button class="totod">Total:Ghc 100.00</button>
                
            </div>
        </section>
      
           
          </div>
      </div>
  );
};

export default OrderCPage;


