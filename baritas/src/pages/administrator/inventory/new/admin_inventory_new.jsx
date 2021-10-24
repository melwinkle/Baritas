import React from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';


/* We simply can use an array and loop and print each user */
class InventoryNPage extends React.Component {
    
  render() { 
    return (
        
        <div class="proda">
            <div class="accor">
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>
            <div class="back">
            <Link to="/administrator/inventory/"><button><BiArrowBack/>BACK</button></Link>
            </div>

            
        
            
  
   
            <div class="addi">
           
                <h3>New Inventory</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Product</label>
                    <input type="text" placeholder="Product"/></Col>

                    <Col><label>Image</label>
                    <input type="file"/></Col>
                        </Row>


                        <Row>
                            <Col><label>Category</label>
                            <select>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select>
                    </Col>
                    <Col>
                    <label>Unit Cost Price</label>
                    <input type="number" /></Col>
                        </Row>
                        <Row>
                            <Col><label>Unit of Measurement</label>
                            <select>
                                <option value="kg">kg</option>
                                <option value="lb">Pounds(lb)</option>
                                <option value="ml">Millimetres</option>
                                <option value="bags">bags</option>
                                
                            </select>
                    </Col>
                    <Col>
                    <label>In Stock</label>
                    <input type="number" /></Col>
                        </Row>

                        <Row><button>Add</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>

  </div>

// next

  );
}
}

export default InventoryNPage;