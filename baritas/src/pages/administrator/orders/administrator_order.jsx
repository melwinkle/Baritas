import React,{ useEffect, useState } from "react";
import '../../../App.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome, FaIntercom,FaArrowLeft} from "react-icons/fa";
import DataTable from './component/DataTable';
import data from './Table/data';
import Modal from "react-bootstrap/Modal";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaList,FaStore } from "react-icons/fa";
  import { Container, Row, Col } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';


/* We simply can use an array and loop and print each user */
const OrderMainPage =()=> {
    
    const [posts, setPosts] = useState({ blogs: [] });

    const id = sessionStorage.getItem("rest");

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getallorders.php?id='+id
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchTerm,setSearchTerm] = useState('');

  // const Modalshow=()=>{
  //   handleShow,
  //   <Modal show={show} onHide={handleClose} id="mods">
  //                               <Modal.Header closeButton>
  //                               <Modal.Title>Bill No.bill-bill</Modal.Title>
  //                               </Modal.Header>
  //                               <Modal.Body >
  //                                   <Row>
  //                                       <Col>bill</Col>
  //                                       <Col>Table #bill</Col>
  //                                   </Row>
  //                                   <Row>
  //                                       <ReactBootStrap.Card id="order">
  //                                           <ReactBootStrap.Card.Text >
                                              
  //                                             <Row>
  //                                               <Col>billx bill</Col>
                                            
  //                                               <Col>bill</Col>
  //                                             </Row>
                                             
                                             
  //                                           </ReactBootStrap.Card.Text>
  //                                       </ReactBootStrap.Card>
  //                                   </Row>
                                 
                                    


  //                                   <Row id="fut">
  //                                     <hr/>
  //                                   <Row >
  //                                          <Col><h6>Sub-Total</h6></Col>
  //                                          <Col id="val">bill</Col>
                                           
  //                                      </Row>
  //                                      <Row>
  //                                          <Col><h6>VAT(2.5%)</h6></Col>
  //                                          <Col  id="val">40.00</Col>
                                           
  //                                      </Row>

  //                                      <Row>
  //                                          <Col><h6>Total</h6></Col>
  //                                          <Col id="val">bill</Col>
                                           
  //                                      </Row>

  //                                   </Row>
  //                                   </Modal.Body>
                               
  //                           </Modal>
                 
  // }
        return (
          <div class="proad">
                      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h3>Baritas:Adenta</h3></Col>
              
              </Row>
              
              
            </div>
            
          </SidebarHeader>
          <SidebarContent id="menuit">
              <div class="menuitem">
              <Link to="/administrator/"> <button><FaList /><div> Home</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/administrator/employee/"> <button><FaList /><div> Employee</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/administrator/employee/"> <button><FaList /><div> Employee</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/administrator/inventory/"> <button><FaList /><div> Inventory</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/administrator/finances/"> <button><FaList /><div> Finances</div>
             </button></Link>
             
              </div>
              <div class="menuitem c">
              <Link to="/administrator/orders/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/administrator/mainmenu/"> <button><FaList /><div> Menu</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/administrator/production/"> <button><FaList /><div> Production</div>
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

          
<Container id="invt">
  
  <Row>

 
    <Form.Group id="forminv">
  
<Row>
<Form.Label>Order Date</Form.Label> 
  <Col>

    <Form.Control type="date" name="inventory"  placeholder="Enter item" onChange={event =>{setSearchTerm(event.target.value)}}/></Col>
    <Col></Col>
</Row>
    
   

    </Form.Group>


  </Row>

 
<Row id="invtt">

      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
            <th>Date </th>
            <th>Total Orders</th>
            <th>Total Income</th>
            <th>Actions</th>
     
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.filter((item)=>{
              if(searchTerm == ""){
                return item;
              }
              else if(item.date.includes(searchTerm)){
                return item;
              }

            }).map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.count}</td>
                <td>{item.total}</td>
          
        
                <td><a  href={"/administrator/orders/date/"+item.date}><button class="b1">View</button></a>
                
                    </td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      </Row>
      </Container>
          
         

          </div>
        );
    
}

export default OrderMainPage;