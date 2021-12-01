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
              <Link to="/general_manager/"> <button><FaList /><div> Home</div>
             </button></Link>
             
              </div>
              <div class="menuitem c">
              <Link to="/general_manager/employee/"> <button><FaList /><div>Employee</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/inventory/"> <button><FaList /><div> Inventory</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/finances/inventory/"> <button><FaList /><div> Finances</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/orders/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>

             
              <div class="menuitem">
              <Link to="/general_manager/production/"> <button><FaList /><div> Production</div>
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
