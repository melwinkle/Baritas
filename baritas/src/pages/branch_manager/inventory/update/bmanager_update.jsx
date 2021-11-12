import React,{useEffect,useState} from "react";
import '../../../../App.css';
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
  import "../../../../Header.css";
  import Button from "react-bootstrap/Button";
// import { Container, Row, Col } from 'reactstrap';


/* We simply can use an array and loop and print each user */
function EditBInventory(props) {
    
    const[inventory,setInventory]=useState({
        name:"",
        category:"",
        unit:"",
        inn:"",
        Measure:"",
        limit:""
});

    const{name,category,unit,inn,Measure,limit}=inventory;

    useEffect(async ()=>{
        await fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getainventoryitem.php?id='+props.match.params.id)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setInventory(responseJSON.inventory);
            console.log(responseJSON.inventory);
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
           
            <Container id="invt">
            <Row>
        <Link to="/administrator/inventory/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>

                <Row id="invtr">
                <div class="addi c">
                

                <img src={rooster} alt="product"/>
                <h3>TOMATO</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Product</label>
                    <input type="text" name="name" value={name}/></Col>

                    <Col><label>Category</label>
                            <select name="category">
                                <option value={category}>{category}</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select></Col>

                    </Row>
                        


                   

                    <Row>
                    <Col>
                    <label>Unit Cost Price</label>
                    <input type="number" name="unit" value={unit}/></Col>
                        
                            <Col><label>Unit of Measurement</label>
                            <select name="Measure">
                                <option value={Measure}>{Measure}</option>
                                <option value="lb">Pounds(lb)</option>
                                <option value="ml">Millimetres</option>
                                <option value="bags">bags</option>
                                
                            </select>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                    <label>In Stock</label>
                    <input type="number" name="inn" value={inn}/></Col>
                    
                    <Col>
                    <label>Stock Limit</label>
                    <input type="number" name="limit" value={limit}/></Col>
                        </Row>

                        <Row><button>Update</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>
                </Row>
            </Container>

            
        
            
  
   
            

  </div>

// next

  );

}


export default EditBInventory;