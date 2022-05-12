import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList,FaStore } from "react-icons/fa";
import "../../../Header.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
const GEmployee = () => {

  // const MySwal = withReactContent(Swal);

  const [posts, setPosts] = useState({ blogs: [] });
  const [post, setPost] = useState({ blog: [] });
  const [searchTerm,setSearchTerm] = useState('');

  const id=sessionStorage.getItem("rest");

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallemployee.php?id='+id
      );
      setPosts({ blogs: data.data });
      setPost({blog: data.waiter})
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);


  const wterminate=(id)=>{
    // MySwal.fire({
    //   title: "Employee Update",
    //   text:"Are sure you want to terminate ?",
    //   icon: "success",
    //   button :true
    // }).then(function(){
      axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/terminatewaiter.php?id='+id );
    // }); 
  

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
                  <Col><h3>Baritas </h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
              <li class="sidenav-item">
                  <a href="/general_manager/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/general_manager/employee/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item e">
                  <a href="/general_manager/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/general_manager/finances/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
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

 
   


  </Row>



              <Container>
<Row id="invtt">

          <h3>GENERAL</h3>
      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Role</th>
            <th>Username</th>
            <th>Password</th>
            <th>Status</th>
           
          </tr>
        </thead>
        <tbody>
        {posts.blogs && posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.rolename}</td>
                <td>{item.user}</td>
                <td>{item.pass}</td>
                <td><button class="b4" disabled>{item.stat}</button></td>
              
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      </Row>


       
<Row id="invtt">
<h3>WAITERS</h3>
<ReactBootStrap.Table  bordered hover id="invtb">
  <thead>
    <tr>
      <th>ID</th>
      <th>Full Name</th>
      <th>Status</th>
   
    </tr>
  </thead>
  <tbody>
    
  {post.blog && post.blog.map((item) => (
   
            

             
             <tr key={item.wid}>
          <td>{item.wid}</td>
          <td>{item.wfirst}</td>
          <td><button class="b4" disabled>{item.wstat}</button></td>
        
        </tr>
         
        
         
        
          ))}
  </tbody>
</ReactBootStrap.Table>
</Row>
  
  </Container>


      </Container>
    </div>
  );
};

export default GEmployee;
