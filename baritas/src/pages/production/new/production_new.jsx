import React from 'react';
import "../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';

 class ProductionNPage extends React.Component{
    
          

    render() {
       
        return (
          <div class="proda">
            <Container id="prodn">

                <Row>
                
             <Link to="/production/"><button id="pback"><BiArrowBack/>BACK</button></Link> 
         
                </Row>

                <Row>
                <div class="addm c">
         
         <h3>Invoice</h3>
         <form>
             <Container>
                 <Row>
                     <Col><label>Date</label>
             <input type="text" placeholder="Item name"/></Col>
             <Col><label>Branch</label>
                     <select>
                         <option value="Sauces">Adenta</option>
                         <option value="Hot/Spicy">Madina</option>
                         <option value="Hot/Spicy">Campus Hub</option>
                         <option value="Hot/Spicy">Production</option>
                         
                     </select></Col>
             </Row>


             


                 <Row>
                     <Col>
                     <label>Product</label>
                     <select>
                         <option value="Sauces">Adenta</option>
                         <option value="Hot/Spicy">Madina</option>
                         <option value="Hot/Spicy">Campus Hub</option>
                         <option value="Hot/Spicy">Production</option>
                         
                     </select>
             </Col>

             </Row>


             <Row>
             <Col>
             <label>Quantity</label>
             <input type="number" /></Col>
             
                 </Row>

                 

                 <Row><button>Save</button></Row>
                
             </Container>
             


             

             
             
             

             
         </form>

     </div>
                </Row>
            </Container>

          
        
            

          </div>
        );
    }
}

export default ProductionNPage;




