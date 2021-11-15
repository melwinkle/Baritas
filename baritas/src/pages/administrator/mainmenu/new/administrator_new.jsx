import React from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaList,FaArrowLeft} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import Button from "react-bootstrap/Button";
import axios from "axios";
 class AdminMenuNPage extends React.Component{
    
    state = {
 
        // Initially, no file is selected
        selectedFile: null
      };
      
      // On file select (from the pop up)
      onFileChange = event => {
      
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      
      };
      
      // On file upload (click the upload button)
      onFileUpload = () => {
      
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
      
      };

    render() {
       
        return (
          <div class="proad">
                      <div id="header">
            {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar >
            <SidebarHeader>
            <div className="logotext">
                <Row>
                    <Col><h3>Baritas:Adenta</h3></Col>
                
                </Row>
                
                
              </div>
              
            </SidebarHeader>
            <SidebarContent id="menuit">
                <div class="menuitem">
                <Link to="/administrator/"> <button><FaList /><div> Home</div>
               </button></Link>
               
                </div>
  
                <div class="menuitem">
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
  
                <div class="menuitem c">
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
              

          
        <Container id="invt">
            <Row>
        <Link to="/administrator/mainmenu/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row >

    <Row id="invtr">
            <div class="addi c">
                <h3>New Menu Item</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Menu Name</label>
                    <input type="text" placeholder="Menu name"/></Col>

                    <Col><label>Image</label>
                    <input type="file" onChange={this.onFileChange}/></Col>
                        </Row>


                        <Row>
                            <Col><label>Category</label>
                            <select>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select>
                    </Col>
                    <Col>
                    <label>Price</label>
                    <input type="number" /></Col>
                        </Row>

                        <Row><button>Add</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>
            </Row>
</Container>
          </div>
        );
    }
}

export default AdminMenuNPage;




