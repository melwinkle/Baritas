import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
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
const BEmployee = () => {

  // const MySwal = withReactContent(Swal);

  const [posts, setPosts] = useState({ blogs: [] });
  const [post, setPost] = useState({ blogs: [] });
  const [searchTerm,setSearchTerm] = useState('');

  const id=sessionStorage.getItem("rest");

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallemployee.php?id='+id
      );
      console.log(data);
      setPosts({ blogs: data.data });
      setPost({blog: data.waiter})
      // console.log(data);
    };
    fetchPostList();
  },[]);


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
                
                <li class="sidenav-item active">
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
               
              
                <li class="sidenav-item">
                  <a href="/branch_manager/production/" class="sidenav-link"
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


          <Form.Label>GENERAL</Form.Label> 
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
            <th>Actions</th>
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
                <td><button class={"b4 "+item.stat} disabled>{item.stat}</button></td>
                <td><a class="ab1"href={'/branch_manager/employee/update/' + item.id}><button class="b1">Edit</button></a></td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      </Row>


       
<Row id="invtt">
<Form.Label>WAITERS</Form.Label> 
<ReactBootStrap.Table  bordered hover id="invtb">
  <thead>
    <tr>
      <th>ID</th>
      <th>Full Name</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    
  {post.blog && post.blog.map((item) => (          
          <tr key={item.wid}>
          <td>{item.wid}</td>
          <td>{item.wfirst}</td>
          <td><button class={'b4 '+item.wstat}  disabled>{item.wstat}</button></td>
          <td><a class="ab1"href={'/branch_manager/employee/waiter/' + item.wid}><button class="b1">Edit</button></a>
         </td>
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

export default BEmployee;
