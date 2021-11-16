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
 class AdminMenuNPage extends React.Component{
    
  constructor(props){
    super(props);
    this.state ={
        name:'',
        img:'',
        category:'',
        price:'',
        size:'',
        rest:''
    };
    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
   

}

      add(e){
        this.setState({rest: sessionStorage.getItem('rest')});
        console.log(this.state);
       e.preventDefault();
       axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/addmenu.php',JSON.stringify(this.state)).then(function(response){
           console.log(response.data);
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
    </Row >

    <Row id="invtr">
            <div class="addi c">
                <h3>New Menu Item</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Menu Name</label>
                    <input type="text" name="name" placeholder="Menu name" onChange={this.onChange}/></Col>

                    <Col><label>Image</label>
                    <input type="file" name="img" onChange={this.onFileChange}/></Col>
                        </Row>


                        <Row>
                            <Col><label>Category</label>
                            <select name="category" onChange={this.onChange}>
                              <option>Select a category..</option>
                                <option value="1">Hot&Spicy</option>
                                <option value="2">Hot&Spicy</option>
                                <option value="3">Hot&Spicy</option>
                                <option value="4">Hot&Spicy</option>
                                <option value="5">Hot&Spicy</option>
                            </select>
                    </Col>
                    <Col>
                    <label>Price</label>
                    <input type="number" name="price" onChange={this.onChange}/></Col>
                        </Row>
<Row>
  <Col>
  <label>Size</label>
  <input type="text" name="size" placeholder="N,S,M,L" onChange={this.onChange}/></Col>
  <Col><label>Restaurant</label>
  <select name="restaurant_id" onChange={this.onChange}>
                              <option>Select an option..</option>
                                <option value="1">All</option>
                                <option value="2">Adenta&Atomic</option>
                                <option value="3">Legon Campus Hub</option>
                             
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

export default AdminMenuNPage;




