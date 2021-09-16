

import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components




//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../Header.css";
import '../../App.css';
import logo from "../../images/IMG_8850.JPG";



const BarPage = () => {
  
  

   
 

  return (
      <div class="order">

      
      


      <div class="midbar">
        <section class="pending" id="pending">
        <div class="topbar">
              <Container>
                  <Row>
                      <Col><h4 class="active" id="act"><strong>Pending</strong></h4></Col>
                      <Col> <Link to="/cashier/kitchen_view/kitchen_complete/"><h4 class="com">Completed</h4></Link></Col>        
                  </Row>
                </Container>
            </div>

            
        </section>
       
            <section class="bar">
            <div class="bars">
                <h4>#OrderL123</h4>
                <h6>Delivery:Waiter 1</h6>
                
                <div class="barit">
                    <span><img class="imgf"src={logo} width='60' height="40" alt="logo"></img>Pineapple Juice<span><p>x1</p></span></span>
                    <h6>Ghc 10</h6>
                </div>

                
                
            </div>
            </section>
      
           
          </div>
      </div>
  );
};

export default BarPage;


