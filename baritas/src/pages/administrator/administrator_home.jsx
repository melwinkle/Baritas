import React from "react";
import '../../App.css';
import { Link } from 'react-router-dom';
import { FaStore } from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
/* We simply can use an array and loop and print each user */
class AdminPage extends React.Component {
 
  render() {
    return (
    <div class="proad">
     
     <div class="acco">
       <button><FiLogOut />Logout</button>
     
     </div>

      
      <Container>
                            <Row>
                                <Col><div class="pstore"><Link to="/administrator/menu/"><button  class="pstall" id="adenta" ><FaStore /><h5>Adenta</h5></button></Link></div></Col>
                                <Col><div class="pstore"><Link to="/administrator/menu/"><button  class="pstall" id="legon" ><FaStore /><h5>Legon</h5></button></Link></div></Col>
                                <Col><div class="pstore"><Link to="/administrator/menu/"><button  class="pstall" id="baritas" ><FaStore /><h5>Baritas</h5></button></Link></div></Col>
                               
                            </Row>
                            </Container>
        

        
          

      

       
      
    </div>
  );
}
};

export default AdminPage;