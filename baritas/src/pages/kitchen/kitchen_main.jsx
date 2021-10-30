

import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../Header.css";
import '../../App.css';
import logo from "../../images/IMG_8850.JPG";
import { FaCheckCircle } from 'react-icons/fa';

import { FiLogOut } from 'react-icons/fi';


const KitchenPage = () => {
  
  

   
 

  return (
      <div class="order">

      
      


      <div class="midbar">
        <section class="pending" id="pending">
        <div class="topbar">
              <Container>
                  <Row>
                      <Col><h4 class="active" id="act"><strong>Open</strong></h4></Col>
                      <Col> <Link to="/kitchen/kitchen_complete/"><h4 class="com sec" id="rs">Completed</h4></Link></Col>        
                  </Row>
                  <Row id="logs"><FiLogOut/></Row> 
                </Container>
            </div>

            
        </section>
       
       
        <Container id="bar">
           <Row id="rbar">
               <Col>
                    <Card>
                        <Card.Header id="bhead">
                            ORDER #123
                            </Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>
               <Col>
                    <Card>
                        <Card.Header id="bhead">ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>
               <Col>
                    <Card>
                        <Card.Header id="bhead">ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='90' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>

               <Col>
                    <Card>
                        <Card.Header id="bhead">ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>

               
           </Row>

           <Row>
               <Col>
                    <Card>
                        <Card.Header id="bhead">ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>
               <Col>
                    <Card>
                        <Card.Header id="bhead">ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>
               <Col>
                    <Card>
                        <Card.Header id="bhead">ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='90' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>

               <Col>
                    <Card>
                        <Card.Header id="bhead">ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Pineapple Juice</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Button id="yes" ><FaCheckCircle/></Button>
                        </Card.Body>
                    </Card>
               </Col>

               
           </Row>
       </Container>

            
      
           
          </div>
      </div>
  );
};

export default KitchenPage;


