import React from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaArrowLeft, FaList,FaStore } from "react-icons/fa";
  import "../../../../Header.css";
  import Button from "react-bootstrap/Button";
  import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';

   const MySwal = withReactContent(Swal);

class InventoryNPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            product:'',
            category:'',
            unitcost:'',
            unitmeasure:'',
            in_stock:'',
            rest:sessionStorage.getItem('rest'),
            limit:''
        };
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
    }

     add(e){
         console.log(this.state);
        e.preventDefault();
        axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/addinventory.php',JSON.stringify(this.state)).then(function(response){
            console.log(response);

            if(response.status == 200){
                MySwal.fire({
                    title: "Inventory Added",
                    text:"Inventory has been added successfully",
                    icon: "success",
                    button :true
                  }).then(function(){
                    window.location='/administrator/inventory';
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

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }


  render() { 
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
                <li class="sidenav-item active">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
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
        <Link to="/administrator/inventory/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>


    <Row id="invtr">
    <div class="addi c">
           
           <h3>New Inventory</h3>
           <form>
               <Container>
                   <Row>
                       <Col><label>Product</label>
               <input type="text" placeholder="Product" name="product" onChange={this.onChange}/></Col>
                   </Row>
                   <Row>
                     
               <Col>
               <label>Unit Cost Price</label>
               <input type="number" placeholder="Cost Price" name="unitcost" onChange={this.onChange} /></Col>
               <Col><label>Unit of Measurement</label>
                       <select name="unitmeasure" onChange={this.onChange}>
                           <option value="">--Select a unit of measurement--</option>
                           <option value="kg">Kilograms(Kg)</option>
                           <option value="g">Grams(g)</option>
                           <option value="lb">Pounds(lb)</option>
                           <option value="ml">Millimetres</option>
                           <option value="bags">bags</option>  
                       </select>
               </Col>
                   </Row>
                   <Row>
                     
               <Col>
               <label>In Stock</label>
               <input type="number" placeholder="In stock" name="in_stock" onChange={this.onChange}/></Col>
               <Col>
               <label>Stock Limit</label>
               <input type="number" placeholder="Stock limit" name="limit" onChange={this.onChange}/></Col>
                   </Row>
                  
                   <Row><button onClick={this.add}>Add</button></Row>   
               </Container>  
           </form>

       </div>
    </Row>
        </Container>

           

  </div>

// next

  );
}
}

export default InventoryNPage;