import React,{useEffect,useState} from 'react';
import "../../../../App.css";
import {MDBBtn} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack, BiShowAlt} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import rooster from "../../../../images/IMG_8850.JPG";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaArrowLeft, FaList,FaStore } from "react-icons/fa";
import Button from "react-bootstrap/button";
import axios from 'axios';
import Toast from "react-bootstrap/Toast";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

 function AdminMenuVPage(props){
    
    const[Menu,setMenu]=useState({
        name:"",
        category:"",
        price:"",
        size:"", 
        catid:"",
        restaurant:""
});

    const{name,category,price,size,catid,restaurant}=Menu;

    useEffect(async ()=>{
        await fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getonemenu.php?id='+props.match.params.id)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setMenu(responseJSON.Menu);
            console.log(responseJSON.Menu);
        }
        );
    },[]);
    function onChange(e){
        const newMenu ={...Menu}
        newMenu[e.target.name] = e.target.value;
        setMenu(newMenu);
    }

    function update(e){
        console.log(Menu);
        e.preventDefault();
        axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updatemenu.php' ,JSON.stringify(Menu)).then(function(response){

        console.log(response.data);

        if(response.data == 1){
            MySwal.fire({
                title: "Menu item Updated",
                text:"Menu item has been updated succesfully",
                icon: "success",
                button :true
              }).then(function(){
                window.location='/administrator/mainmenu';
              });

        }
        else{
            MySwal.fire({
                title: "Inventory Not added",
                text:"Error adding inventory",
                icon: "error",
                button :true
              });

        }
        })
  
    }

    function showToast(){
        
            return (
                <Toast id="tbt">
                    <Toast.Header>
                        <strong className="mr-auto">
                            Order #{props.match.params.id}
                        </strong>
                        <small>
                             READY
                        </small>
                    </Toast.Header>
                    <Toast.Body id="tb" >
                        Drink is ready!
                    </Toast.Body>
              </Toast>
                   
                    );
            
    }
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
                  <a href="/administrator/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/administrator/mainmenu/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-utensils me-3"></i><span>Menu</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/reports/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-clipboard me-3"></i><span>Reports</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/production/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
                </li>
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>
          <Container id="invt">
          <Row>
        <Link to="/administrator/mainmenu/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>


    <Row>
        {showToast}
    </Row>
   


    <Row id="invtr">
            <div class="addi c">
                <h3>UPDATE MENU</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Menu Name</label>
                    <input type="text" placeholder="Menu name" name="name" value={name} onChange={(e)=>onChange(e)}/></Col>
                    </Row>


                    


                        {/* <Row>
                            {/* <Col><label>Category</label>
                            <select name="category" onChange={this.onChange}>
                            <option value={catid}>{category}</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select>
                    </Col> */}
                    {/* <Col><label>Restaurant</label>
  <select name="restaurant" onChange={this.onChange}>
  <option value={restaurant}>{restaurant}</option>
                              <option>Select an option..</option>
                                <option value="1">All</option>
                                <option value="2">Adenta&Atomic</option>
                                <option value="3">Legon Campus Hub</option>
                             
                            </select>
  </Col> 

                    </Row> */}


                    <Row>
                    <Col>
                    <label>Price</label>
                    <input type="number"  name ="price" value={price} onChange={(e)=>onChange(e)}/></Col>
                    <Col> <label>Size</label>
                    <input type="text"  name ="size" value={size} onChange={(e)=>onChange(e)}/></Col>
                        </Row>

                        <Row><button onClick={update}>Update</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>
            </Row>

           
    
            </Container>
    
          </div>
       
        );
    
}

export default AdminMenuVPage;




