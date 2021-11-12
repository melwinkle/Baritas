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



class ProductionANPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            product:'',
            category:'',
            unitcost:'',
            unitmeasure:'',
            in_stock:'',
            rest:'1',
            limit:''
        };
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
    }

     add(e){
         this.setState({rest:'1'});
         console.log(this.state);
        e.preventDefault();
        axios.post('http://localhost/Baritas/Baritas_backend/apis/addinventory.php',JSON.stringify(this.state)).then(function(response){
            console.log(response.data);
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
          <div class="menuitem c">
              <Link to="/production/"> <button><FaHome /><div> Home</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/production/alert/"> <button><FaBell/><div> Alerts</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/production/transact/"> <button><FaStoreAlt/><div> Sales</div>
             </button></Link>
             
              </div>
           
              <div class="menuitem">
              <Link to="/"> <button><FiLogOut/><div> LogOut</div>
             </button></Link>
             
              </div>
           
            <div class="accor">
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>
            
     
            </SidebarContent>
          {/* <SidebarFooter>
            Baritas (c)
          </SidebarFooter> */}
        </ProSidebar>
      </div>
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
                   {/* <Row>
                       {/* <Col><label>Category</label>
                       <select name="category" onChange={this.onChange}>
                           <option value="">--Select a category--</option>
                           <option value="Fresh Food">Fresh Food</option>
                           <option value="Hot/Spicy">Hot&Spicy</option>
                           <option value="Hot/Spicy">Hot&Spicy</option>
                           <option value="Hot/Spicy">Hot&Spicy</option>
                       </select>
               </Col> 
                <Col>
               <label>Unit Cost Price</label>
               <input type="number" name="unitcost" onChange={this.onChange} /></Col> 
                   </Row> */}
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
               <textarea onChange={this.onChange}></textarea> </Col>
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