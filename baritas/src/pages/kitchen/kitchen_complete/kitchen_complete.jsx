

import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components




//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../../Header.css";
import '../../../App.css';
import logo from "../../../images/IMG_8850.JPG";
import { FaCheckCircle } from 'react-icons/fa';




const KitchenCPage = () => {
  
  

   
 

  return (
      <div class="order">

      
      


      <div class="midbar">
        <section class="pending" id="pending">
        <div class="topbar">
              <Container>
                  <Row>
                      <Col><Link to="/kitchen/"><h4  id="act" class="com"><strong>Open</strong></h4></Link></Col>
                      <Col> <h4 class="active" >Completed</h4></Col>        
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

export default KitchenCPage;


