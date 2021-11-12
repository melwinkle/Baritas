import React from 'react';
import "../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col,Button } from 'reactstrap';
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import rooster from "../../../images/IMG_8850.JPG";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
 class ProductionUPage extends React.Component{
    
          

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
              <div class="menuitem c">
              <Link to="/production/"> <button><FaHome /><div> Home</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
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

          
             <Container id="invt">

             <Row>
        <Link to="/production/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>


<Row id="invtr">
<div class="addi c">
<h3>Update Product</h3>
<form>
<Container>
 <Row>
     <Col><label>Name</label>
<input type="text" placeholder="Item name"/></Col>
<Col>
<label>Stock Limit</label>
<input type="number" /></Col>

</Row>

<Row>
<Col>
<label>Measurement</label>
<input type="text" /></Col>
<Col>
<label>In Stock</label>
<input type="number" /></Col>
 </Row>

 <Row>
     <Col>
     <label>Recipe</label>
     <textarea></textarea>
     </Col>
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

export default ProductionUPage;




