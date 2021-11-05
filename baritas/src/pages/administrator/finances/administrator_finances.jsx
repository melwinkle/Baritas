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
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";

import CanvasJSReact from "../../../canvasjs-3.4.5/canvasjs.react";

/* We simply can use an array and loop and print each user */
const AdminFinancePage =()=>{
    
   
    const [posts, setPosts] = useState({ blogs: [] });


    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getallorders.php'
        );
        setPosts({ blogs: data.data });
        console.log(data);
      };
      fetchPostList();
    }, [setPosts]);
  
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
				dataPoints: [
					{ y: 18, label: "Cash" },
					{ y: 49, label: "Mobile Money" },
					{ y: 9, label: "E-Card" },
					{ y: 5, label: "Bolt" },
          { y: 19, label: "Glovo" },
          { y: 19, label: "Jumia" },
          { y: 19, label: "In-House Delivery" }
				]
			}]
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
                <Link to="/administrator/"> <button><FaList /><div> Home</div>
               </button></Link>
               
                </div>
  
                <div class="menuitem">
                <Link to="/administrator/inventory/"> <button><FaList /><div> Inventory</div>
               </button></Link>
               
                </div>
                <div class="menuitem c">
                <Link to="/administrator/finances/"> <button><FaList /><div> Finances</div>
               </button></Link>
               
                </div>
                <div class="menuitem">
                <Link to="/administrator/orders/"> <button><FaList /><div> Orders</div>
               </button></Link>
               
                </div>
  
                <div class="menuitem">
                <Link to="/administrator/mainmenu/"> <button><FaList /><div> Menu</div>
               </button></Link>
               
                </div>
                <div class="menuitem">
                <Link to="/administrator/production/"> <button><FaList /><div> Production</div>
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
  
   
      <Form.Group id="forminv">
  <Row>
  <Form.Label>Order Date</Form.Label> 
    <Col>
  
      <Form.Control type="date" name="inventory"  placeholder="Enter item" /></Col>
      <Col> <Button id="searchb"> Search</Button></Col>
  </Row>
      
     
  
      </Form.Group>
  
  
    </Row>
  
   
  <Row id="invtt">
  
        <ReactBootStrap.Table  bordered hover id="invtb">
          <thead>
            <tr>
              <th>Transaction#</th>
              <th>Date </th>
              <th>Total Income</th>
              <th>Actions</th>
        
         
       
            </tr>
          </thead>
          <tbody>
            {posts.blogs &&
              posts.blogs.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.cost}</td>
                  <td>
                  <button class="b1" onClick={handleShow}>View</button>
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

export default AdminFinancePage;