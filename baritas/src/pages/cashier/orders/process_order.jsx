import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import logo from "../../../images/IMG_8850.JPG";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

/* We simply can use an array and loop and print each user */
class UsersPage extends React.Component {
 
  render() {
    return (
    <div class="process">
      <Container id="nas"> 
      <Navbar id="nab" bg="light" fixed="top">
  <Container>
    <Navbar.Brand href="#home">Baritas</Navbar.Brand>
    <Navbar.Toggle />
    <Nav className="me-auto">
        <Nav.Link href="#home">Adenta Branch</Nav.Link>
       
      </Nav>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
       Cashier 1 
     
      </Navbar.Text>
  
    </Navbar.Collapse>
  </Container>
</Navbar>




<Row>
  <Col><Link to="/cashier/table/?process=dine"><Button  id="porder">DINE IN</Button>{' '}</Link></Col>
<Col><Link to="/cashier/takeaway/?process=takeaway"><Button  id="porder">TAKEAWAY</Button>{' '}</Link></Col>

<Link
    to={{pathname: `/cashier/table/?process=Dine-In`
    }}>
    Press Me
</Link>

       
                            
                         </Row>
    
</Container>
        
      
    </div>
  );
}
}

export default UsersPage;