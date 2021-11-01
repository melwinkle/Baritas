import React from "react";
import '../../../App.css';
import { Link,useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import logo from "../../../images/IMG_8850.JPG";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
/* We simply can use an array and loop and print each user */

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function TablePage (){
  let query = useQuery();

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

<Row id="mapr">

<Row>
  

 </Row>
<Row>
  <Col><Link to={{pathname: `/cashier/waiter/?table=Table 1&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 1</Button>{' '}</Link></Col>
<Col><Link to={{pathname: `/cashier/waiter/?table=Table 2&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 2</Button>{' '}</Link></Col>
<Col><Link to={{pathname: `/cashier/waiter/?table=Table 3&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 3</Button>{' '}</Link></Col>
<Col><Link to={{pathname: `/cashier/waiter/?table=Table 4&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 4</Button>{' '}</Link></Col>
</Row>
    
<Row>
  <Col><Link to={{pathname: `/cashier/waiter/?table=Table 5&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 5</Button>{' '}</Link></Col>
<Col><Link to={{pathname: `/cashier/waiter/?table=Table 6&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 6</Button>{' '}</Link></Col>
<Col><Link to={{pathname: `/cashier/waiter/?table=Table 7&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 7</Button>{' '}</Link></Col>
<Col><Link to={{pathname: `/cashier/waiter/?table=Table 8&process=${query.get("process")}`,
    }}><Button  id="tablenum">Table 8</Button>{' '}</Link></Col>
</Row>
<Row>
  <Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 9</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 10</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 11</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 12</Button>{' '}</Link></Col>
</Row>
<Row>
  <Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 13</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 14</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 15</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 16</Button>{' '}</Link></Col>
</Row>
    
<Row>
  <Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 17</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 18</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 19</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 20</Button>{' '}</Link></Col>
</Row>

<Row>
  <Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 21</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 22</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 23</Button>{' '}</Link></Col>
<Col><Link to="/cashier/waiter/"><Button  id="tablenum">Table 24</Button>{' '}</Link></Col>
</Row>
</Row>
</Container>

        

    </div>

// next

  );

}

export default TablePage;