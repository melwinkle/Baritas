import React from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import rooster from "../../../../images/IMG_8850.JPG";
 class AdminMenuNPage extends React.Component{
    
          

    render() {
       
        return (
          <div class="proda">
              <div class="accorr c">
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>

          
          <div class="back">
             <Link to="/administrator/mainmenu/"><button><BiArrowBack/>BACK</button></Link> 
          </div>
            <div class="addm c">
            <img src={rooster} alt="product"/>
                <h3>Spicy Chicken Wings</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Menu Name</label>
                    <input type="text" placeholder="Menu name"/></Col>
                    </Row>


                    <Row>
                    <Col><label>Image</label>
                    <input type="file"/></Col>
                        </Row>


                        <Row>
                            <Col><label>Category</label>
                            <select>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select>
                    </Col>

                    </Row>


                    <Row>
                    <Col>
                    <label>Price</label>
                    <input type="number" /></Col>
                        </Row>

                        <Row><button>Save</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>

          </div>
        );
    }
}

export default AdminMenuNPage;




