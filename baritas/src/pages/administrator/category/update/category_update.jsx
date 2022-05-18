import React,{useEffect,useState} from "react";
import {MDBBtn} from 'mdb-react-ui-kit';
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
    const id=sessionStorage.getItem('rest');
    const[branch,setBranch]=useState("");
    useEffect(async ()=>{
        await fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getacategory.php?id='+props.match.params.id)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setInventory(responseJSON.category);
            console.log(responseJSON.category);
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
              <nav
              id="sidenav-1"
              class="sidenav"
              data-mdb-hidden="false"
            >
              <div className="logotext">
              <Row>
                  <Col><h3>Baritas {branch}</h3></Col>
              
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