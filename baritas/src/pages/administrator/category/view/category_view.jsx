import React,{ useEffect, useState } from 'react';
import "../../../../App.css";

import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaList,FaArrowLeft} from "react-icons/fa";
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
 const CategoryView =()=>{
    const [posts, setPosts] = useState({ blogs: [] });

    const id= sessionStorage.getItem("rest");
    const [searchTerm,setSearchTerm] = useState('');
    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallcategory.php?id='+id
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
    <Col id="adds">       <Link to="/administrator/mainmenu/"><Button id="backh"><FaArrowLeft/>Back</Button></Link></Col>
       
        <Col  id="adds"> <Link to="/administrator/category/"><Button id="addnew">Add New +</Button></Link></Col>
    </Row>
    <Row>
  
   
      <Form.Group id="forminv">
  <Row>
  <Form.Label>Menu Name</Form.Label> 
    <Col>
  
      <Form.Control type="text" name="menu"  placeholder="Enter item" onChange={event =>{setSearchTerm(event.target.value)}} /></Col>
      <Col></Col>
  </Row>
      
     
  
      </Form.Group>
  
  
    </Row>
  
   
  <Row id="invtt">
  
        <ReactBootStrap.Table  bordered hover id="invtb">
          <thead>
            <tr>

              <th>Category</th>
              <th>Actions</th>
       
            </tr>
          </thead>
          <tbody>
            {posts.blogs &&
              posts.blogs.filter((item)=>{
                if(searchTerm ==""){
                  return item;
                }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                   return item; 
                }
              }).map((item) => (
                <tr key={item.id}>
  
                  <td>{item.category}</td>

                  <td>
                  <a href={'/administrator/category/update/' + item.id}> <button class="b2">Update</button></a></td>
                </tr>
              ))}
          </tbody>
        </ReactBootStrap.Table>
        </Row>
        </Container>
            
           
  
            </div>
          );
}

export default CategoryView;




