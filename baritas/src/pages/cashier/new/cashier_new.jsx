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

/* We simply can use an array and loop and print each user */
const CashierNew =()=>{
 

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


<Container>

{/* body */}
<Row>
    <Link to={'/cashier/new/'}> <Button id="backh">New Order <FaPlus/></Button></Link>
   
</Row>
    
</Container>
        
      
    </div>
  );

}

export default CashierNew;