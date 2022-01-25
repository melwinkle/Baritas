import React, { useEffect, useState } from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
import DataTable from '../../component/DataTable';
import data from '../../Table/data';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
import Modal from "react-bootstrap/Modal";
// get data fron the procution folder 
import Badge from 'react-bootstrap/Badge';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
/* We simply can use an array and loop and print each user */
function ProductionTPage (props) {
       
  const [posts, setPosts] = useState({ blogs: [] });


  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallptransact.php?date='+props.match.params.date
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
                  <a href="/production/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/production/alert/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-bell me-3"></i><span>Alerts</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active ">
                  <a href="/production/transact" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Transactions</span></MDBBtn></a>
                </li>
                
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>
        
      <Container id="invt">
      <Row>
        <Link to="/production/transact/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>

 
<Row id="invtt">

      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
            <th>ID</th>
   
            <th>Restaurant</th>
 
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.transaction_id}>
                <td>{item.transaction_id}</td>
                <td>{item.restaurant}</td>
                <td>{item.Transaction_Status}</td>
               
       
                <td><a class="ab1"href={'/production/transact/tracking/' + item.transaction_id}><button class="b2">Edit</button></a>
               <a class="ab1" href={'/production/transact/invoice/' + item.transaction_id}> <button class="b1">View</button></a></td>
             
              </tr>
                 
            ))}
          
        </tbody>
      </ReactBootStrap.Table>

      </Row>
   
     
      </Container>
     
            
  
   
          
            
        </div>

  

// next

  );

}

export default ProductionTPage;