import React,{useEffect,useState} from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import rooster from "../../../../images/IMG_8850.JPG";
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
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
          <nav
              id="sidenav-1"
              class="sidenav"
              data-mdb-hidden="false"
            >
              <div className="logotext">
              <Row>
                  <Col><h3>Baritas Adenta</h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                
                <li class="sidenav-item">
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/branch_manager/inventory/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
               
              
                <li class="sidenav-item">
                  <a href="/branch_manager/production/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
                </li>
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>
           
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