import React from 'react';
import "../../../../App.css";
import {MDBBtn} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaList,FaArrowLeft} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const id=sessionStorage.getItem("rest");
 class EmployeeNew extends React.Component{
    
  constructor(props){
    super(props);
    this.state ={
        fname:'',
        lname:'',
        pass:'',
        role:'',
        rest:id,
        user:''
    };
    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
   

}

      add(e){
     
        console.log(this.state);
       e.preventDefault();
       axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/addemployee.php',JSON.stringify(this.state)).then(function(response){

           console.log(response.data);

           if(response.data == 1){
            MySwal.fire({
                title: "New Employee dded",
                text:"New Employee has been added successfully",
                icon: "success",
                button :true
              }).then(function(){
                window.location='/administrator/employee/';
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
   onFileChange = event => {
    
    // Update the state
    this.setState({ img: event.target.files[0].name });
  
  };
  
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
                  <Col><h3>Baritas </h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                <li class="sidenav-item">
                  <a href="/administrator/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
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
        <Link to="/administrator/employee/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row >

    <Row id="invtr">
            <div class="addi c">
                <h3>New Employee</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>First Name</label>
                    <input type="text" name="fname" placeholder="First name" onChange={this.onChange}/></Col>

                    <Col><label>Last Name</label>
                    <input type="text" name="lname" placeholder="Last name" onChange={this.onChange}/></Col>
                        </Row>


                       
<Row>

  <Col><label>Username</label>
  <input type="text" name="user" placeholder="username" onChange={this.onChange}/>
  </Col>
  <Col><label>Password</label>
  <input type="text" name="pass" placeholder="username" onChange={this.onChange}/>
  </Col>
</Row>

<Row>

  <Col><label>User Role</label>
  <select name="role" onChange={this.onChange}>
  <option>Select an option..</option>
                                <option value="4">Cashier</option>
                                <option value="2">Kitchen</option>
                                <option value="3">Bar</option>
                                <option value="6">Branch Manager</option>
                                <option value="5">General Manager</option>
                                <option value="Waiter">Waiter</option>
                   
                             
                            </select>
  </Col>
  
</Row>
                        <Row><button onClick={this.add}>Add</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>
            </Row>
</Container>
          </div>
        );
    }
}

export default EmployeeNew;




