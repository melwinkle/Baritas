import React,{ useEffect, useState } from 'react';
import "../../../App.css";
import DataTable from './component/DataTable';
import data from './Table/data';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaList} from "react-icons/fa";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
 const AdminMenuPage =()=>{
    const [posts, setPosts] = useState({ blogs: [] });

    const id= sessionStorage.getItem("rest");
    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallmenu.php?id='+id
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
                <div class="menuitem">
                <Link to="/administrator/finances/"> <button><FaList /><div> Finances</div>
               </button></Link>
               
                </div>
                <div class="menuitem">
                <Link to="/administrator/orders/"> <button><FaList /><div> Orders</div>
               </button></Link>
               
                </div>
  
                <div class="menuitem c">
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
              <th>Menu #</th>
              <th>Menu Name</th>
              <th>Category</th>
              <th>Size</th>
              <th>Price</th>
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
                  <td>{item.size}</td>
                  <td>{item.price}</td>
                  <td><a href={'/administrator/menu/view/' + item.id}> <button class="b1">View</button></a>
                  <a href={'/administrator/menu/update/' + item.id}> <button class="b2">Update</button></a></td>
                </tr>
              ))}
          </tbody>
        </ReactBootStrap.Table>
        </Row>
        </Container>
            
           
  
            </div>
          );
}

export default AdminMenuPage;




