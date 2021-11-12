import React from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import rooster from "../../../../images/IMG_8850.JPG";

import { Container, Row, Col } from 'reactstrap';

 function AdminOrderVPage (){
    
          


       
        return (
          <div class="proda">
              <div class="accorr c">
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>

          
          <div class="back">
             <Link to="/administrator/orders/"><button><BiArrowBack/>BACK</button></Link> 
          </div>


          <div class="head">
                <h2>ORDER#123</h2>
                <h4>TB-S4 DINE-IN</h4>
                </div>
            <div class="addm c">
                

                <div class="dt">
                    <Container>
                        <Row>
                            <Col><h6 id="date">01/09/2021</h6></Col>
                            <Col><h6 id="time">12:30:39PM</h6></Col>
                        </Row>
                    </Container>
                    
                    

                </div>
                
                <div class="menus">
                    <button>
                        <Container>
                            <Row>
                                <Col><img src={rooster} alt="product"/></Col>
                                <Col> <h5 id="product">Meat Spring Rolls(3)</h5>
                    <h6 id="number">x1</h6>
                    <h5 id="price">Ghc 15</h5></Col>
                            </Row>



                            <Row>
                                <Col>
                                <h6 id="paym">Payment Mode</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <label><input id="paymod" type="radio" />Cash</label>
                                
                                </Col>
                            </Row>
                        </Container>

                    

                   

                    </button>

                </div>
            </div>

          </div>
        );
    
}

export default AdminOrderVPage;




