import React,{useEffect,useState} from 'react';
import "../../../../App.css";
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
              <Link to="/administrator/employee/"> <button><FaList /><div> Employee</div>
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




