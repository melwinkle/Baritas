import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaList,FaStore } from "react-icons/fa";
  import "../../../Header.css";
/* We simply can use an array and loop and print each user */
class AdminMPage extends React.Component {
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
              <Link to="/administrator/"> <button><FaList /><div> Home</div>
             </button></Link>
             
              </div>

              <div class="menuitem c">
              <Link to="/administrator/inventory/"> <button><FaList /><div> Inventory</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/administrator/finances/"> <button><FaList /><div> Finances</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/administrator/orders/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/administrator/mainmenu/"> <button><FaList /><div> Menu</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/administrator/production/"> <button><FaList /><div> Production</div>
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
        

   

            </div>

  

// next

  );
}
};

export default AdminMPage;