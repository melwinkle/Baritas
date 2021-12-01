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
function EditCategory(props) {
    
    const[inventory,setInventory]=useState({
        name:"",
        restaurant:"",
        restr:""
});

    const{name,restaurant,restr}=inventory;

    useEffect(async ()=>{
        await fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getacategory.php?id='+props.match.params.id)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setInventory(responseJSON.category);
            console.log(responseJSON.category);
        }
        );
    },[]);
     function onChange(e){
        const newInventory ={...inventory}
        newInventory[e.target.name]=e.target.value;
        setInventory(newInventory);
     }

     function update(e){
         console.log(inventory); 
        e.preventDefault();
         axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updatecategory.php' ,JSON.stringify(inventory)).then(function(response){
        console.log(response);

        if(response.status == 200){
            MySwal.fire({
                title: "Category Update",
                text:"Category has been update successfully",
                icon: "success",
                button :true
              }).then(function(){
                window.location='/administrator/category/view/';
              }); 
        }
        })
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
        <Link to="/administrator/category/view"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>

                <Row id="invtr">
                <div class="addi c">
                

               
           
                <form>
                    <Container>
                        <Row>
                            <Col><label>Category</label>
                    <input type="text" name="name" defaultValue={name} onChange={(e)=>onChange(e)}/></Col>



                    </Row>


                    <Row>
                    
                        
                            <Col><label>Unit of Measurement</label>
                            <select name="restaurant" onChange={(e)=>onChange(e)}>
                                <option value={restaurant}>{restr}</option>
                                <option>Select an option..</option>
                                <option value="1">All</option>
                                <option value="2">Adenta&Atomic</option>
                              
                                
                            </select>
                    </Col>
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


export default EditCategory;