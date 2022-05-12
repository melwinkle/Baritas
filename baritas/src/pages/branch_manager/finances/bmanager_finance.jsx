import React,{ useEffect, useState } from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaList} from "react-icons/fa";
import DataTable from '../orders/component/DataTable';
import data from '../orders/Table/data';
import { Container, Row, Col } from 'reactstrap';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";

import CanvasJSReact from "../../../canvasjs-3.4.5/canvasjs.react";

/* We simply can use an array and loop and print each user */
const BranchFinancePage =()=>{
    
   
    const [posts, setPosts] = useState({ blogs: [] });
    const item=JSON.parse(sessionStorage.getItem("branchMData"));
    const id = item.UserData.rest;
    const [points,setPoints]=useState();

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchfinance.php?id='+id
        );
        setPosts({ blogs: data.data });
        console.log(data);
      };
      fetchPostList();
    }, [setPosts]);
  
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onclick(){
      console.log(it);
    }
    async function doit(btn){
      const { data } = await axios(
           'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchpay.php?id='+btn
         );
         setPoints(data.data);
         console.log(data.data);
     
         setShow(true);
      
     }

    const options = {
			exportEnabled: true,
			animationEnabled: true,
			// title: {
			// 	text: "Financial Breakdown"
			// },
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: Ghc{y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - Ghc{y}",
				dataPoints: points
			}]
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
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/branch_manager/finances/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
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
  <Form.Label>Sales Date</Form.Label> 
    <Col>
  
      <Form.Control type="text" name="inventory"  placeholder="Enter item" /></Col>
      <Col> <Button id="searchb" onClick={onclick}> Search</Button></Col>
  </Row>
      
     
  
      </Form.Group>
  
  
    </Row>
  
   
  <Row id="invtt">
  
        <ReactBootStrap.Table  bordered hover id="invtb">
          <thead>
            <tr>
            
              <th>Date </th>
              <th>Total Income</th>
              <th>Actions</th>
        
         
       
            </tr>
          </thead>
          <tbody>
            {posts.blogs &&
              posts.blogs.map((item) => (
                <tr key={item.id}>
           
                  <td>{item.date}</td>
                  <td>{item.bill}</td>
                  <td>
                  <button class="b1" onClick={doit.bind(this,item.date)}>View</button>
                  <Modal id="chart" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>{item.date} Financial Breakdown</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <CanvasJSReact.CanvasJSChart  options = {options}/>
                                  </Modal.Body>
                                <Modal.Footer>
                               
                                </Modal.Footer>
                            </Modal>
                      {/* <a href={'/administrator/finances/view/' + item.id}> <button class="b1">View</button></a> */}
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

export default BranchFinancePage;