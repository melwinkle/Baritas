import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
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
const BranchInvent = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  const item=JSON.parse(sessionStorage.getItem("branchMData"));
  const id = item.UserData.rest;
  
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallinventory.php?id='+id
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
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/branch_manager/inventory/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
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

 
    <Form.Group id="forminv">
<Row>
<Form.Label>Inventory Item</Form.Label> 
  <Col>

    <Form.Control type="text" name="inventory"  placeholder="Enter item" /></Col>
    <Col> <Button id="searchb"> Search</Button></Col>
</Row>
    
   

    </Form.Group>


  </Row>

 
<Row id="invtt">

      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name </th>
            <th>Category</th>
            <th>Unit Price</th>
            <th>In Stock</th>
            <th>Measurement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.unit}</td>
                <td>{item.in}</td>
                <td>{item.Measure}</td>
                <td><a class="ab1"href={'/branch_manager/inventory/view/' + item.id}><button class="b2">View</button></a></td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      </Row>
      </Container>
    </div>
  );
};
export default BranchInvent;
