import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import {MDBBtn} from 'mdb-react-ui-kit';
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
const Employee = () => {

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
                  <Col><h3>Baritas Adenta</h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                <li class="sidenav-item">
                  <a href="/administrator/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/administrator/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
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
    <Link to="/administrator/employee/add/"><Button id="addnew">Add New +</Button></Link>
    
  </Row>
  <Row>

 
   


  </Row>



              <Container>
<Row id="invtt">

          <Form.Label>GENERAL</Form.Label>
      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
            <th>No.</th>
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
        {posts.blogs && posts.blogs.map((item,index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.rolename}</td>
                <td>{item.user}</td>
                <td>{item.pass}</td>
                <td><button class={"b4 "+item.stat} disabled>{item.stat}</button></td>
                <td><a class="ab1"href={'/administrator/employee/update/' + item.id}><button class="b1">Edit</button></a></td>
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
      <th>No.</th>
      <th>Full Name</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    
  {post.blog && post.blog.map((item,index) => (
   
            

             
             <tr key={item.wid}>
          <td>{index + 1}</td>
          <td>{item.wfirst}</td>
          <td><button class={"b4 "+item.wstat} disabled>{item.wstat}</button></td>
          <td><a class="ab1"href={'/administrator/employee/waiter/' + item.wid}><button class="b1">Edit</button></a>
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

export default Employee;
