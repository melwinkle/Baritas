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
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import { Container, Row, Col } from 'reactstrap';

const MySwal = withReactContent(Swal);

/* We simply can use an array and loop and print each user */
function EditInventory(props) {
    
    const[inventory,setInventory]=useState({
        name:"",
        unit:"",
        inn:"",
        Measure:"",
        limit:""
});

    const{name,unit,inn,Measure,limit}=inventory;
const id=sessionStorage.getItem('rest');
const[branch,setBranch]=useState("");
    useEffect(async ()=>{
        await fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getainventoryitem.php?id='+props.match.params.id)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setInventory(responseJSON.inventory);
            console.log(responseJSON.inventory);
        }
        );
        getbranchname();
    },[]);
     function onChange(e){
        const newInventory ={...inventory}
        newInventory[e.target.name]=e.target.value;
        setInventory(newInventory);
     }

     function update(e){
         console.log(inventory); 
        e.preventDefault();
         axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updateinventory.php' ,JSON.stringify(inventory)).then(function(response){
        console.log(response);

        if(response.status == 200){
            MySwal.fire({
                title: "Inventory Update",
                text:"Inventory has been update successfully",
                icon: "success",
                button :true
              }).then(function(){
                window.location='/administrator/inventory';
              }); 
        }
        })
     }

    const getbranchname=()=>{
            if(id==1){
                setBranch("Adenta")
            }
            else if(id==2){
                setBranch("Atomic")
            }
            else if(id==3){
                setBranch("Legon Campus")
            }
        }
   
    return ( 
        <div class="proad">
             <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h3>Baritas {branch}</h3></Col>
              
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
                    <input type="text" name="name" defaultValue={name} onChange={(e)=>onChange(e)}/></Col>



                    </Row>


                    <Row>
                    <Col>
                    <label>Unit Cost Price</label>
                    <input type="number" name="unit" value={unit} onChange={(e)=>onChange(e)}/></Col>
                        
                            <Col><label>Unit of Measurement</label>
                            <select name="Measure" onChange={(e)=>onChange(e)}>
                                <option value={Measure}>{Measure}</option>
                                <option value="Pounds(lb)">Pounds(lb)</option>
                                <option value="Millimetres(ml)">Millimetres</option>
                                <option value="bags">bags</option>
                              
                                
                            </select>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                    <label>In Stock</label>
                    <input type="number" name="inn" value={inn} onChange={(e)=>onChange(e)}/></Col>
                    
                    <Col>
                    <label>Stock Limit</label>
                    <input type="number" name="limit" value={limit} onChange={(e)=>onChange(e)}/></Col>
                        </Row>

                        <Row><button onClick={update}>Update</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>
                </Row>
            </Container>

            
        
            
  
   
            

  </div>

// next

  );

}


export default EditInventory;