import React from 'react';
import "../../../../App.css";
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


                <div class="menuitem c">
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




