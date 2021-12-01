import React,{useEffect,useState} from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import rooster from "../../../../images/IMG_8850.JPG";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaArrowLeft, FaList,FaStore } from "react-icons/fa";
import Button from "react-bootstrap/button";

 function AdminMenuVPage(props){
    
    const[Menu,setMenu]=useState({
        name:"",
        category:"",
        price:"",
        size:""
});

    const{name,category,price,size}=Menu;

    useEffect(async ()=>{
        await fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getonemenu.php?id='+props.match.params.id)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setMenu(responseJSON.Menu);
            console.log(responseJSON.Menu);
        }
        );
    },[]);
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
              <Link to="/general_manager/"> <button><FaList /><div> Home</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/employee/"> <button><FaList /><div> Employee</div>
             </button></Link>
             
              </div>

              <div class="menuitem c">
              <Link to="/general_manager/inventory/"> <button><FaList /><div> Inventory</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/finances/inventory/"> <button><FaList /><div> Finances</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/orders/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>

             
              <div class="menuitem">
              <Link to="/general_manager/production/"> <button><FaList /><div> Production</div>
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
    </Row>

    <Row id="invtr">
            <div class="addi c">
                <h3>UPDATE MENU</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Menu Name</label>
                    <input type="text" placeholder="Menu name" value={name}/></Col>
                    </Row>


                    


                        <Row>
                            <Col><label>Category</label>
                            <select>
                            <option value={category}>{category}</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select>
                    </Col>

                    </Row>


                    <Row>
                    <Col>
                    <label>Price</label>
                    <input type="number"  value={price}/></Col>
                    <Col> <label>Size</label>
                    <input type="text"  value={size}/></Col>
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

export default AdminMenuVPage;




