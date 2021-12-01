import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {FaPlus} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
/* We simply can use an array and loop and print each user */
const CashierOrdersC =()=>{
 

    return (
    <div class="process">
   <Navbar  id="nab" expand="lg" bg="light" fixed="top">
  <Container>
  <Navbar.Brand href="#home">Baritas</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/cashier/order_main/">Orders</Nav.Link>
      <Nav.Link href="/cashier/new/">Pending</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Cashier 1</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      




{/* body */}
<Container id="cashier">
<Row>
    <Link to={'/cashier/new/'}> <Button id="backh">New Order <FaPlus/></Button></Link>
   
</Row>



<Row>
    {/* open and completed */}
   
    <Col id="opc">

    <Row id="opct">
        <Col id="activs"><Link to={'/cashier/order_main/'}>Active</Link></Col>
        <Col id="complits">Completed</Col>
    </Row>
    <Row>
        <Col>
            <Button id="order">
                <Row >
                    <Col id="orderi" >#Order125</Col>
                    <Col id="orderd">12:20pm</Col>
                </Row>
                <Row >
                    <Col id="orderi">Table:Dine-In</Col>
                    <Col id="orderd">Completed</Col>
                </Row>
            </Button>
        </Col>
    </Row>
    </Col>


    {/* order  */}
    <Col id="odc">
    <Card>
        <Card.Header>
            <Row id="details">
                <Row >
                    <h4>#Order125</h4>
                </Row>
                <Row>
                    <h6>Adjoa Mansa</h6>
                </Row>
                <Row>
                    <h6>Dine-In:Table 1</h6>
                </Row>
                <Row>
                    <h6>18th November 2021 12:20pm</h6>
                </Row>
            </Row>
            </Card.Header>
        <Card.Body>
                <Card.Text>
                    <Row id="tableod">
                        <table class="tod">
                            <thead>
                                <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jollof Rice</td>
                                    <td>2</td>
                                    <td>20.00</td>
                                </tr>
                            
                                <tr>
                                    <td>Jollof Rice</td>
                                    <td>2</td>
                                    <td>20.00</td>
                                </tr>
                                
                                <tr>
                                    <td>Jollof Rice</td>
                                    <td>2</td>
                                    <td>20.00</td>
                                </tr>
                                <tr>
                                    <td>Jollof Rice</td>
                                    <td>2</td>
                                    <td>20.00</td>
                                </tr>
                                <tr>
                                    <td>Jollof Rice</td>
                                    <td>2</td>
                                    <td>20.00</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </Row>
                </Card.Text>
            </Card.Body>
            <Card.Footer id="odcf">
            <Row>
                <h6>Notes</h6>
                <input type="text" readonly/>
            </Row>
            <Row>
                <Col><h6>Sub-Total</h6></Col>
                <Col><h6>0.00</h6></Col>
            </Row>
            <Row>
                <Col><h6>Sub-Total</h6></Col>
                <Col><h6>0.00</h6></Col>
            </Row>
            <Row>
                <Col><h6>Sub-Total</h6></Col>
                <Col><h6>0.00</h6></Col>
            </Row>
           
          
            </Card.Footer>
        </Card>
    </Col>
</Row>
    
</Container>
        
      
    </div>
  );

}

export default CashierOrdersC;