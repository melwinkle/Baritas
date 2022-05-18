import React,{useState,useEffect} from 'react';
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
  import Badge from 'react-bootstrap/Badge';
  import axios from "axios";
  import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
function ProductionUPage(props){
  
    const[alert,setAlert]=useState({
      alert_num:""
    });
  const[production,setInventory]=useState({
    production_name:"",
    stock_limit:"",
    measurement:"",
    in_stock:"",
    recipe:""
});
const{alert_num}=alert;
const{production_name,stock_limit,measurement,in_stock,recipe}=production;

useEffect(async ()=>{
 produp();
 alertnum();
 getbranchname();
},[]);

function onChange(e){
  const newproduction ={...production}
  newproduction[e.target.name]=e.target.value;
  setInventory(newproduction);
}

function update(e){
  console.log(production); 
 e.preventDefault();
  axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updateproduction.php' ,JSON.stringify(production)).then(function(response){
 console.log(response.data);
 })
}
const produp=()=>{
   fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getaproduct.php?id='+props.match.params.id)
    .then((response)=>response.json())
    .then((responseJSON)=>{
        setInventory(responseJSON.production);
        console.log(responseJSON.production);
    }
    );

}
const alertnum=()=>{
  fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php')
    .then((response)=>response.json())
    .then((responseJSON)=>{
        setAlert(responseJSON.alert);
        console.log(responseJSON.alert);
    }
    );
}





       const id=sessionStorage.getItem('rest');
        const[branch,setBranch]=useState("");
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
                <li class="sidenav-item active">
                  <a href="/production/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/production/alert/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-bell me-3"></i><span>Alerts</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/production/transact" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Transactions</span></MDBBtn></a>
                </li>
                
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>
          
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
<input type="text" placeholder="Item name" value={production_name} name="production_name" onChange={(e)=>onChange(e)}/></Col>
<Col>
<label>Stock Limit</label>
<input type="number"value={stock_limit} name="stock_limit" onChange={(e)=>onChange(e)}/></Col>

</Row>

<Row>
<Col>
<label>Measurement</label>
<input type="text" value={measurement} name="measurement" onChange={(e)=>onChange(e)}/></Col>
<Col>
<label>In Stock</label>
<input type="number" value={in_stock} name="in_stock" onChange={(e)=>onChange(e)}/></Col>
 </Row>

 <Row>
     <Col>
     <label>Recipe</label>
     <textarea value={recipe} name="recipe" onChange={(e)=>onChange(e)}></textarea>
     </Col>
 </Row>

 

 <Row><button onClick={update}>Save</button></Row>

</Container>










</form>

</div>
</Row>
</Container>


          </div>
        );
    
}

export default ProductionUPage;




