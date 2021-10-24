import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
/* We simply can use an array and loop and print each user */
class AdminMPage extends React.Component {
  render() {
    return (
        <div class="proad">
            <div class="accors">
                <button><FiLogOut />Logout</button> 
            </div>
        
            <div class="adm">
                <Container>
                    <Row>
                        <Col><div class="admen"><Link to="/administrator/inventory/"><button class="menunum" id="m1" >Inventory</button></Link></div></Col>
                        <Col><div class="admen"><Link to="/administrator/orders/"><button class="menunum" id="m2" >Orders</button></Link></div></Col>
                        <Col> <div class="admen"><Link to="/administrator/production/"><button class="menunum" id="m3" >Production</button></Link></div></Col>
                    </Row>


                    <Row>
                        <Col> <div class="admen"><Link to="/administrator/mainmenu/"><button class="menunum" id="m4" >Menu</button></Link></div></Col>
                        <Col><div class="admen"><Link to="/administrator/finances/"><button class="menunum" id="m5" >Finances</button></Link></div></Col>
                      
                    </Row>
                </Container>
                
                    
                   
                   
                    
                </div>

   

            </div>

  

// next

  );
}
};

export default AdminMPage;