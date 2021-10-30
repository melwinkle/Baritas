import React from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col, Button } from 'reactstrap';
import Table from "react-bootstrap/Table";

 class ProductionIPage extends React.Component{
    
          

    render() {
       
        return (
          <div class="proda">
            <Container id="prodn">

                <Row>
                
             <Link to="/production/transact/"><button id="pback"><BiArrowBack/>BACK</button></Link> 
         
                </Row>

                <Row>
                <div class="addm c">
         
         <h3>Invoice#124</h3>
         <Container>
             <Row>
                 <Col>From:</Col>
                 <Col><h4>From</h4></Col>
                
             </Row>
             <Row>
             <Col>To:</Col>
                 <Col><h4>To</h4></Col>

             </Row>

             <Row>
             <Table  bordered >
            <thead>
                <tr>
                <th>#</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                
                <td colSpan="3">TOTAL</td>
                <td>GHC 1000</td>
                </tr>
            </tbody>
            </Table>
             </Row>

             <Button id="dinv" >Download Invoice</Button>
         </Container>
       
     </div>

     
                </Row>

                
            </Container>

          
        
            

          </div>
        );
    }
}

export default ProductionIPage;




