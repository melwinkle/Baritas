import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {FaPlus,FaTrash} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import { QuantityPicker } from 'react-qty-picker';
import logo from "../../../images/IMG_8850.JPG";
/* We simply can use an array and loop and print each user */
const CashierNew =()=>{
 

    return (
    <div class="process">
      <Container>
    
          <Col id="newnab">
            <Navbar  id="nab" expand="lg"  fixed="top">
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




          {/* body of menu */}
          <Container id="menct" >
            <Row id="menucat"  >
              
              <Col id="scrcat" > 
              <Button id="catme" >Starters</Button>
            
             
              
             

              {/* <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button>
              <Button id="catmec" >Starters</Button> */}
              
           
              </Col>
        

            </Row>

            <Row id="mens">
              <h6>OrderMenu</h6>
              <Row id='fodc' overflow>
                <Col id='foodc'><Button id='fod'>
                  <Image src={logo}></Image>
                  <h6>Pineapple Juice</h6>
                  <p>Ghc 10.00</p>
                  </Button></Col>
               

                

                
                
              </Row>
            </Row>

          </Container>


          </Col>
          <Col id="orderdine">

            <Form id="formdine">
                <Container>
                    <Row>
                      <Form.Group>
                      <GiForkKnifeSpoon/>
                        <select id="dn" name="dine">
                            <option value="Dine-In">Dine-In</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Pickup">Pickup</option>
                        </select>
                      </Form.Group>
                    </Row>

                    <Row>
                      <h3>#Order124</h3>
                    </Row>

                    <Row>
                      <Col><select name="waiter">
                      <option value="Waiter 1">Waiter 1</option>
                      <option value="Ama">Amam</option>
                      <option value="Pearl">Pearl</option>
                  </select></Col>

                  <Col>
                  <select name="table">
                      <option value="Table 1">Table 1</option>
                      <option value="Table 1">Table 1</option>
                      <option value="Table 1">Table 1</option>
                      <option value="Table 1">Table 1</option>
                  </select></Col>
                  </Row>

                  {/* body */}
                  <Row id="food" overflow>


{/* one */}
                      {/* <Row>
                        <Col>
                        <Button id="fod">
                          <Row>
                            <Col><h6>Pineapple Juice</h6></Col>
                            <Col><QuantityPicker smooth/></Col>
                            <Col><h6>Ghc 10.00</h6></Col>
                          </Row>
                          
                          <Row> <p>Ghc 10.00</p></Row>
                          
                         
                        </Button>
                        </Col>
                        <Col>
                        <Button id="trash"><FaTrash/></Button>
                        </Col>
                      </Row> */}


                   


                      

                      

                  </Row>
                  

                  {/* footer */}
                  <Row id="dinefoot">
                  <Row> 
                    <h6>Notes</h6>
                    <textarea name="note"></textarea>
                    </Row>
                  <Row>
                    <h6>Payment Method</h6>
                      <select name="payment">
                          <option value="Cash">Cash</option>
                          <option value="Mobile Money">Mobile Money</option>
                          <option value="E-card">E-card</option>
                          <option value="Bolt">Bolt</option>
                      </select>
                    </Row>



                  <Row>
                      <Col><h6>SubTotal</h6></Col>
                      <Col id="amts"><h6 id="sub">0.00</h6></Col>
                  </Row>
                  <Row>
                      <Col><h6>VAT</h6></Col>
                      <Col id="amt"><h6 id="vat">0.00</h6></Col>
                  </Row>
                  <Row>
                      <Col><h6>Total</h6></Col>
                      <Col id="amt"><h6 id="total">0.00</h6></Col>
                  </Row>

                    <Row>
                      <Button type="submit" name="submitdine">Place Order</Button>
                      
                      
                      </Row>
                    
                  </Row>
                </Container>
              
              
               
                   
                  </Form>
    
          
          
          </Col>
          
         
      </Container>
        
        
      
    </div>
  );

}

export default CashierNew;