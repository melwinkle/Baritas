

import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components




//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../Header.css";
import '../../App.css';
import logo from "../../images/IMG_8850.JPG";
import { FaCheckCircle } from 'react-icons/fa';




const KitchenPage = () => {
  
  

   
 

  return (
      <div class="order">

      
      


      <div class="midbar">
        <section class="pending" id="pending">
        <div class="topbar">
              <Container>
                  <Row>
                      <Col><h4 class="active" id="act"><strong>Open</strong></h4></Col>
                      <Col> <Link to="/kitchen/kitchen_complete/"><h4 class="com">Completed</h4></Link></Col>        
                  </Row>
                </Container>
            </div>

            
        </section>
       
            <section class="bar">
            <div class="bars">
                <div class="bhead">
                <h4>#OrderL123</h4>
                <h6>Delivery</h6>
                </div>
                
                
                <div class="barit">
                    <span><img class="imgf"src={logo} width='50' height="30" alt="logo"></img>Pineapple Juice<span><p>x1</p></span></span>
                </div>
                

                <div class="optbar">
                    <button type="button" class="yes"><FaCheckCircle></FaCheckCircle></button>
                   
                </div>

                
                
            </div>
            </section>

            
      
           
          </div>
      </div>
  );
};

export default KitchenPage;


