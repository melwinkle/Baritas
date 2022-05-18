import React from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
 class AdminMenuNPage extends React.Component{
    
          

    render() {
       
        const getbranchname=()=>{
            if(id==1){
                setBranch("Adenta")
            }
            else if(id==2){
                setBranch("Atomic")
            }
            else if(id==3){
                setBranch("Legon Campus")
            }
        }
   
    return (
          <div class="proda">
              <div class="accorr">
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>

          
          <div class="back">
             <Link to="/administrator/mainmenu/"><button><BiArrowBack/>BACK</button></Link> 
          </div>
            <div class="addm">
                <h3>New Menu Item</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Menu Name</label>
                    <input type="text" placeholder="Menu name"/></Col>

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
                    <Col>
                    <label>Price</label>
                    <input type="number" /></Col>
                        </Row>

                        <Row><button>Add</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>

          </div>
        );
    }
}

export default AdminMenuNPage;




