import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
const AxiosPost = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  const [searchTerm,setSearchTerm] = useState('');

  const id=sessionStorage.getItem("rest");

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
                  <Col><h3>Baritas Adenta</h3></Col>
              
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
                <li class="sidenav-item active">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
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
    <Link to="/administrator/inventory/new/"><Button id="addnew">Add New +</Button></Link>
    
  </Row>
  <Row>

 
    <Form.Group id="forminv">
<Row>
<Form.Label>Inventory Item</Form.Label> 
  <Col>

    <Form.Control type="text" name="inventory"  placeholder="Enter item to search" onChange={event =>{setSearchTerm(event.target.value)}}/></Col>
    <Col> </Col>
</Row>
    
   

    </Form.Group>


  </Row>

 
<Row id="invtt">
  
   
    <MDBTable  bordered id="invtb">
        <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>Product Name </th>
            <th>Unit Price</th>
            <th>In Stock</th>
            <th>Measurement</th>
            <th>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {posts.blogs &&
            posts.blogs.filter((item)=>{
              if(searchTerm ==""){
                return item;
              }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
              }
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.unit}</td>
                <td>{item.in}</td>
                <td>{item.Measure}</td>
                <td><a class="ab1"href={'/administrator/inventory/update/' + item.id}><button class="b2">Edit</button></a>
               <a class="ab1" href={'/administrator/inventory/view/' + item.id}> <button class="b1">View</button></a></td>
              </tr>
            ))}
        </MDBTableBody>
      </MDBTable>


      
      </Row>
      </Container>
    </div>
  );
};

export default AxiosPost;
