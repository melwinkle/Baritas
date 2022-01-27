import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaArrowLeft, FaList,FaStore } from "react-icons/fa";
  import "../../../Header.css";
  import Button from "react-bootstrap/Button";
  import Badge from 'react-bootstrap/Badge';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';

const MySwal = withReactContent(Swal);



class ProductionANPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            product:'',
            unitmeasure:'',
            in_stock:'',
            limit:'',
            recipe:'',
            alert_num:''
        };
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
        this.alertnum=this.alertnum.bind(this);
     
 
    }

    componentDidMount(){
        this.alertnum();
    }

  

     add(e){
         console.log(this.state);
        e.preventDefault();
        axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/addproduction.php',JSON.stringify(this.state)).then(function(response){
        
            console.log(response.data);
          if(response == true){ 
            MySwal.fire({
                title: "item added",
                text:"Menu item has been added succesfully",
                icon: "success",
                button :true
              }).then(function(){
                window.location='/production/';
              });

        }
        else{
            MySwal.fire({
                title: "item Not added",
                text:"Error adding item",
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
    alertnum(){
        // console.log(this.alert);
        // e.preventDefault();
        // fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php',JSON.stringify(this.alert)).then(function(response){
        //     console.log(response.alert);
        //     // if(this.response.  =="Product created"){
        //     //     window.location='/production';
        //     // }
        // })

       
        fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php')
          .then((response)=>response.json())
          .then((responseJSON)=>{
              console.log(responseJSON.alert);
              this.setState({
                  alert_num:responseJSON.alert_num
              });
          }
          );
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
                  <Col><h3>Baritas</h3></Col>
              
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
                <li class="sidenav-item">
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
           
           <h3>New Product</h3>
           <form>
               <Container>
                   <Row>
                       <Col><label>Product</label>
               <input type="text" placeholder="Product" name="product" onChange={this.onChange}/></Col>
                   </Row>
                  
                   <Row>
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
               <Col>
               <label>In Stock</label>
               <input type="number" name="in_stock" onChange={this.onChange}/></Col>
                   </Row>
                   <Row>
                   <Col>
               <label>Stock Limit</label>
               <input type="number" name="limit" onChange={this.onChange}/></Col>
                       </Row>
                       <Row>
                   <Col>
               <label>Recipe</label>
               <textarea name="recipe" onChange={this.onChange}></textarea> </Col>
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

export default ProductionANPage;