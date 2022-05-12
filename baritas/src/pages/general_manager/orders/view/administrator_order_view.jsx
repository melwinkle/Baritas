import React,{useState,useEffect} from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import rooster from "../../../../images/IMG_8850.JPG";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
import { FaList,FaStore,FaArrowLeft } from "react-icons/fa";
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
 function GOrderVPage (props){
    
          
    const [posts, setPosts] = useState({ blogs: [] });

    const id = sessionStorage.getItem("rest");
    const [searchTerm,setSearchTerm] = useState('');
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getallorderd.php?id='+id+'&date='+props.match.params.date
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

       
        return (
          <div class="proad">
              <nav
              id="sidenav-1"
              class="sidenav"
              data-mdb-hidden="false"
            >
              <div className="logotext">
              <Row>
                  <Col><h3>Baritas </h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
              <li class="sidenav-item">
                  <a href="/general_manager/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/general_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/general_manager/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/general_manager/finances/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/general_manager/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
               
              
                <li class="sidenav-item">
                  <a href="/general_manager/production/" class="sidenav-link"
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

<Link to={"/general_manager/orders/"}><Button id="backh"><FaArrowLeft/>Back</Button></Link>

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
                <td><a href={"/general_manager/orders/single/"+item.id}><button class="b1" >View</button></a>
                
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

export default GOrderVPage;




