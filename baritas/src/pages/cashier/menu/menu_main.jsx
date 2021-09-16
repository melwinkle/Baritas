

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
import "../../../Header.css";
import '../../../App.css';




const MenuPage = () => {
  
  

   
 

  return (
      <div class="menu">

      
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
              <MenuItem active={true} icon={<FiHome />}>
                New
              </MenuItem>
              <MenuItem  icon={<FaList />}>Order <Link to="/cashier/kitchen_view/"></Link></MenuItem>
            
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>


      <div class="midmenu">
            <div class="top">
              <Container>
                  <Row>
                      <Col><h3><strong>Order</strong>Menu</h3></Col>
                      <Col> <form ><input type="search" placeholder="Search for food,drinks,etc"></input><button variant="outline-success">Search</button></form></Col>        
                  </Row>
                </Container>
            </div>

            <div class="topmenu">
                   {/* <img src={start} alt="startes" width="100" height="50"></img> */}
                        <Container>
                            <Row>
                                <Col><Link to="/cashier/waiter/"><button class="menuop" id="starter">Starter</button></Link></Col>
                                <Col><Link to="/cashier/waiter/"><button class="menuop" id="starter">Starter</button></Link></Col>
                                <Col><Link to="/cashier/waiter/"><button class="menuop" id="starter">Starter</button></Link></Col>
                                <Col><Link to="/cashier/waiter/"><button class="menuop" id="starter">Starter</button></Link></Col>
                            </Row>
                            </Container>
                        
                </div>

            <div class="top">
            <h3><strong>Order</strong>Menu</h3>
            </div>

            <div class="menuitem">
              <Container>
                  <Row>
                      <Col><Link to="/cashier/table/"><button class="met" id="s1" >Wings</button></Link></Col>
                      <Col><Link to="/cashier/table/"><button class="met" id="s2" >Spring Rolls</button></Link></Col>
                      <Col><Link to="/cashier/table/"><button class="met" id="s3" >Meatballs</button></Link></Col>
                    </Row>

                    <Row>
                      <Col><Link to="/cashier/table/"><button class="met" id="s1" >Wings</button></Link></Col>
                      <Col><Link to="/cashier/table/"><button class="met" id="s2" >Spring Rolls</button></Link></Col>
                      <Col><Link to="/cashier/table/"><button class="met" id="s3" >Meatballs</button></Link></Col>
                    </Row> 
                </Container>
            </div>

          </div>

        <div class="ordern">
      

        </div>
      </div>
  );
};

export default MenuPage;


