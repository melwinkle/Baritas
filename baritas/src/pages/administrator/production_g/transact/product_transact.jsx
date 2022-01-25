import React,{ useEffect, useState } from "react";
import '../../../../App.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';

import { Container, Row, Col } from 'reactstrap';
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
const ProductionGHPage =()=> {

  

    const [posts, setPosts] = useState({ blogs: [] });
    const[alert,setAlert]=useState({
      alert_num:""
    });
  
    const{alert_num}=alert;
    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallptransactions.php'
        );
        setPosts({ blogs: data.data });
        console.log(data);
      };
      fetchPostList();
      alertnum();
    }, [setPosts]);
    const alertnum=()=>{
      fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php')
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setAlert(responseJSON.alert);
            console.log(responseJSON.alert);
        }
        );
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
                  <Col><h3>Baritas</h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                <li class="sidenav-item">
                  <a href="/administrator/production_g/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/administrator/production_g/transact/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Transactions</span></MDBBtn></a>
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
<Form.Label>Transaction Date</Form.Label> 
  <Col>

    <Form.Control type="date" name="production"  placeholder="Enter item" /></Col>
    <Col> <Button id="searchb"> Search</Button></Col>
</Row>
    
   

    </Form.Group>


  </Row>
  
   
  <Row id="invtt">
  
        <ReactBootStrap.Table  bordered hover id="invtb">
          <thead>
            <tr>
         
              <th>Date </th>
             
              <th>Total Transactions</th>
              <th>Actions</th>
         
       
            </tr>
          </thead>
          <tbody>
            {posts.blogs &&
              posts.blogs.map((item) => (
                <tr key={item.transaction_id}>
                 
                  <td>{item.date}</td>
                
                  <td>{item.total}</td>
                  <td><a href={"/administrator/production_g/transact/view/"+item.date}><button class="b1">View</button></a></td>
                
                </tr>
              ))}
          </tbody>
        </ReactBootStrap.Table>
        </Row>
        </Container>
            
           
  
            </div>
          );
}

export default ProductionGHPage;