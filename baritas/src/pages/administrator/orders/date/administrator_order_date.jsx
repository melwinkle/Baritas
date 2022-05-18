import React,{ useEffect, useState } from "react";
import '../../../../App.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome, FaIntercom,FaArrowLeft} from "react-icons/fa";
import DataTable from '../component/DataTable';
import data from '../Table/data';
import Modal from "react-bootstrap/Modal";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaList,FaStore } from "react-icons/fa";
  import { Container, Row, Col } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';


/* We simply can use an array and loop and print each user */
const AdminOrderPage =(props)=> {
    
    const [posts, setPosts] = useState({ blogs: [] });

    const id = sessionStorage.getItem("rest");

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getallorderd.php?id='+id+'&date='+props.match.params.date
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
    getbranchname();
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

  const[branch,setBranch]=useState("");
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
          <div class="proad">
                       <nav
              id="sidenav-1"
              class="sidenav"
              data-mdb-hidden="false"
            >
              <div className="logotext">
              <Row>
    <Col><h3>Baritas {branch}</h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                <li class="sidenav-item">
                  <a href="/administrator/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/administrator/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/mainmenu/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-utensils me-3"></i><span>Menu</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/reports/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-clipboard me-3"></i><span>Reports</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/production/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
                </li>
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>

          
<Container id="invt">
  
  <Row>

 
    <Form.Group id="forminv">
<Row>

<Link to={"/administrator/orders/"}><Button id="backh"><FaArrowLeft/>Back</Button></Link>

</Row>
    
   

    </Form.Group>


  </Row>

 
<Row id="invtt">

      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
          <th>Order#</th>
            <th>Waiter</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
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
                    <td>{item.id}</td>
                <td>{item.waiter}</td>
                <td>{item.total}</td>
                <td>{item.payment_method}</td>
                <td>{item.status}</td>
                <td><a href={"/administrator/orders/view/"+item.id}><button class="b1" >View</button></a>
                
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

export default AdminOrderPage;