

import React,{useState} from "react";
import {Link,useLocation} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaPlusCircle, FaWindowClose } from "react-icons/fa";
import {  FiLogOut} from "react-icons/fi";


import Card from 'react-bootstrap/Card';
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../../Header.css";
import '../../../App.css';
import logo from "../../../images/IMG_8850.JPG";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


//   function aler(){
//     let query = useQuery();
//       if(query.get("id")=="1"){
//           document.getElementById(aler).style.display="visible";
//       }
//   }

  
function OrderPage(){

  const[showe,setshow]=useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
 

   
    return (
      <div class="order">

      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <h3>B</h3>
            </div>
            
          </SidebarHeader>
          <SidebarContent>
          <div class="menuitem">
            <Link to="/cashier/menu/"> <button><FaList /><div> New</div>
           </button></Link>
           
            </div>

            <div class="menuitem c">
            <Link to="/cashier/kitchen_view/"> <button><FaList /><div> Order</div>
           </button></Link>
           
            </div>
            <div class="menuitem">
            <Link to="/"> <button><FiLogOut/><div> Logout</div>
           </button></Link>
           
            </div>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
     
      <Container>
      
         

      <Row>

      <div class="midorder">
        <section class="pending" id="pending">
        <div class="topop">
              <Container>
                  <Row>
                      <Col><h4 class="active" id="act"><strong>Pending</strong></h4></Col>
                      <Col> <Link to="/cashier/kitchen_view/kitchen_complete/"><h4 class="com">Completed</h4></Link></Col>        
                  </Row>
                </Container>
            </div>


            <Row id="aler">
                <aler></aler>
          <Alert  show={showe} variant="success" onClose={() => setshow(false)} dismissible>
        <Alert.Heading>Order #123 is ready</Alert.Heading>
      </Alert>

   </Row>
<Container>
 
            <Row id="ror" >
            <Col >
                    <Card id="cmen">
                        <Card.Header >
                            ORDER #123
                            <Link id="cancel" onClick={handleShow}>   <FaWindowClose/>Cancel</Link>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Cancel Order#123</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure you want to cancel the order?</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                   No
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Yes
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Meat Spring Rolls(3)</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Meat Spring Rolls(3)</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>

                            <Card.Text >
                                <Link to='../menu/menu_select/?id=1' id="added"> <FaPlusCircle/> Add</Link>
                               
                            </Card.Text>
                            <Button  id="totod">TOTAL:GHc 0.00</Button>
                        </Card.Body>
                    </Card>
               </Col>
               <Col>
                    <Card id="cmen">
                        <Card.Header >ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Meat Spring Rolls(3)</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Card.Text >
                                <Link to='../menu/menu_select/' id="added"> <FaPlusCircle/> Add</Link>
                               
                            </Card.Text>
                            <Button  id="totod">TOTAL:GHc 0.00</Button>
                        </Card.Body>
                    </Card>
               </Col>
               <Col >
                    <Card id="cmen">
                        <Card.Header >ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Meat Spring Rolls(3)</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Card.Text >
                                <Link to='../menu/menu_select/' id="added"> <FaPlusCircle/> Add</Link>
                               
                            </Card.Text>
                            <Button  id="totod">TOTAL:GHc 0.00</Button>
                        </Card.Body>
                    </Card>
               </Col>
               <Col >
                    <Card id="cmen">
                        <Card.Header >ORDER #123</Card.Header>
                        <Card.Body>
                            <Card.Text id="barit">
                                <Row>
                                    <Col><img class="imgf"src={logo} width='100' height="60" alt="logo"></img></Col>
                                    <Col><h6>Meat Spring Rolls(3)</h6></Col>
                                    <Col><h4>x1</h4></Col>
                                </Row>
                            
                            </Card.Text>
                            <Card.Text >
                                <Link to='../menu/menu_select/' id="added"> <FaPlusCircle/> Add</Link>
                               
                            </Card.Text>
                            <Button  id="totod">TOTAL:GHc 0.00</Button>
                        </Card.Body>
                    </Card>
               </Col>
               
            
            </Row>
            </Container>
        </section>
       
         
          </div>
          </Row>
        
          </Container>
      </div>
  );
};

export default OrderPage;


