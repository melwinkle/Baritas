

import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList,FaStore } from "react-icons/fa";
import {  FiLogOut} from "react-icons/fi";
import logo from "../../../../images/IMG_8850.JPG";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../../../Header.css";
import '../../../../App.css';
import {MdDelete} from "react-icons/md";
import Modal from "react-bootstrap/Modal";




const MenuPage = () => {
  
  
 
   
 


   
    return (
    <div class="menu">

    
         
          <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h2>B</h2></Col>
              
              </Row>
              
              
            </div>
            
          </SidebarHeader>
          <SidebarContent id="menuit">
              <div class="menuitem c">
              <Link to="/cashier/menu/"> <button><FaList /><div> New</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/cashier/kitchen_view/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/"> <button><FiLogOut/><div> LogOut</div>
             </button></Link>
             
              </div>
           
             
            
             
             
             
             
            
          </SidebarContent>
          {/* <SidebarFooter>
            Baritas (c)
          </SidebarFooter> */}
        </ProSidebar>
      </div>

     


        <Container id="mainmenu">
            <Row>
              
              <div class="maintop">
                <Container fluid>
                    <Row>
                        <Col><h3><strong>Order</strong>Menu</h3></Col>  
                        <Col><input type="text"
                  placeholder="Search ..."
                  class="mainsb"/></Col>
                    </Row>
                  </Container>
              </div>
            
            </Row>

            <Row >
              <div id="menuc">        
                  <div class="menuoptc c">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                  </div>
              
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                    

                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                  </div>
                  <div class="menuoptc">
                      <img class="imgm"src={logo} width='80' height="80" alt="logo"></img>
                      <h6 id="menuname">Starters</h6>
                  </div>
                </div>
            </Row>

            <Row id="select">
                <div class="select">
                  <Container fluid>
                    <Row><h3><strong>Order</strong>Menu</h3></Row>  
                  </Container>
               
                </div>
                
              </Row>
              <Row id="zmen">
                <Row id="rci">
                         
                         <div  id="menuci">
                         <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo}width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  
              
                           
                         </div>
          
                         </Row>

                         <Row id="rci">
                         
                         <div  id="menuci">
                         <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo}width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  <div class="menuoptcn">
                                      <img class="imgm"src={logo} width='90' height="80" alt="logo"></img>
                                      <p id="menuname">Meat Spring Rolls(3)</p>
                                      <p id="value">Ghc 15.00</p>
          
                                  </div>
                                  
              
                           
                         </div>
          
                         </Row>
                        </Row>
                   

        </Container>

        <Container fluid>
        <Card id="orderform">
              <Card.Body>
                <Card.Title><h1>#ORDER 123</h1></Card.Title>
                <Card.Subtitle className="mb-2 ">TB:S4:Waiter 1</Card.Subtitle>
                <Card.Subtitle className="mb-2 ">Dine-In</Card.Subtitle>
                <Card.Text>
                  <Row>
                  <div class="orderm">
                    
                    <div class="ords">
                            <Row id="prod">
                           
                        <Col> <img class="imgf"src={logo} width='80' height="70" alt="logo"></img></Col>
                        <Col id="mp"> <h6>Meat Spring Rolls(3)</h6></Col>
                        <Col > <h6>Ghc 15.00</h6></Col>
                         <div id="dele"> <button id="del"><MdDelete/></button> <input type="quantity" placeholder="1"/></div>
                        </Row>
                        
                    </div>
                    
                   
                    
                </div>
                  </Row>
                 
                </Card.Text>
            
              </Card.Body>
              <Card.Footer>
              <Card.Text>
                  Payment Mode
                  <Row><Col><label>
                        <input type="radio"/>
                            Cash
                        </label></Col>
                        <Col><label>
                        <input type="radio"/>
                            E-card
                        </label></Col>
                        <Col><label>
                        <input type="radio"/>
                           Momo
                        </label></Col></Row>
                </Card.Text>
                <Card.Text>
                <Row id="pay">
                           <Col> <h6>Sub-Total</h6></Col>
                          <Col> <h6 id="pv">200.00</h6></Col>
                               

                                </Row>


                       <Row id="pay">
                           <Col><h6>VAT(2.5%)</h6></Col>
                           
                           <Col >  <h6 id="tb">200.00</h6></Col>
                     </Row>
                </Card.Text>
                <Button id="totalb">TOTAL:GHc 0.00</Button>
                </Card.Footer>
            </Card>

      

        </Container>

       
 


 
 
    </div>
  );
};
function basket(menuname,value){
    const orderitem=document.getElementById('orderl');
    const orderb=document.createElement('ords');
    const mname=document.createTextNode(menuname);
    const mvalue=document.createTextNode(value);
    orderb.appendChild(mname);
    orderb.appendChild(mvalue);
    orderitem.appendChild(orderb);


}
export default MenuPage;


