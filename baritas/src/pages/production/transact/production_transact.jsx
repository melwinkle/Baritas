import React, { useEffect, useState } from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaHome,FaBell,FaStoreAlt} from "react-icons/fa";
import DataTable from '../component/DataTable';
import data from '../Table/data';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
import Modal from "react-bootstrap/Modal";
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
function ProductionTPage () {
       
  const [posts, setPosts] = useState({ blogs: [] });

  const id=sessionStorage.getItem("rest");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const ModalContent=(item)=>{
    handleShow;
    
    <Modal show={show} onHide={handleClose} id="mods">
    <Modal.Header closeButton>
    <Modal.Title>Transaction No.{id}</Modal.Title>
    </Modal.Header>
    <Modal.Body >
     
        <Row>
            <ReactBootStrap.Card id="order">
                <ReactBootStrap.Card.Text >
                  
                  <Row>
                    <Col>sdfx sdf</Col>
                
      
                  </Row>
                 
                 
                </ReactBootStrap.Card.Text>
            </ReactBootStrap.Card>
        </Row>
        </Modal.Body>
   
</Modal>
  }
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallproduction.php'
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);
  
    return (
        
        <div class="proad">
            <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h2>B</h2></Col>
              
              </Row>
              
              
            </div>
            
          </SidebarHeader>
          <SidebarContent id="menuit">
              <div class="menuitem">
              <Link to="/production/"> <button><FaHome /><div> Home</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/production/alert/"> <button><FaBell/><div> Alerts</div>
             </button></Link>
             
              </div>
              <div class="menuitem c">
              <Link to="/production/transact/"> <button><FaStoreAlt/><div> Sales</div>
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
    <Link to="/production/new/"><Button id="addnew">New Invoice +</Button></Link>
    
  </Row>
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
            <th>ID</th>
            <th>Date </th>
            <th>Restaurant</th>
 
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              console.log("id:"+item.production_id,"name:"+item.product_name,"stock:"+item.in_stock),
              <tr key={item.production_id}>
                <td>{item.production_id}</td>
                <td>{item.product_name}</td>
                <td>{item.in_stock}</td>
         {/*  href={'/production/transact/invoice/' + item.id} */}
                <td>{item.recipe}</td>
                <td><a class="ab1"href={'/production/transact/tracking/' + item.production_id}><button class="b2">Edit</button></a>
               <a class="ab1" onClick={ModalContent(item.production_id)}> <button class="b1">View</button></a></td>
             
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