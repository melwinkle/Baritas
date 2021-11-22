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
import {FaList,FaArrowLeft} from "react-icons/fa";


import { Container, Row, Col } from 'reactstrap';
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
const AdminProductionPage =(props)=> {
    
  
  const id=sessionStorage.getItem("rest");
    const [posts, setPosts] = useState({ blogs: [] });

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallproductiont.php?id='+id+'&date='+props.match.params.date
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
  
                <div class="menuitem">
                <Link to="/administrator/mainmenu/"> <button><FaList /><div> Menu</div>
               </button></Link>
               
                </div>
                <div class="menuitem c">
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
  <Link to="/administrator/production/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
  </Row>
      
     
  
      </Form.Group>
  
  
    </Row>
  
   
  <Row id="invtt">
  
        <ReactBootStrap.Table  bordered hover id="invtb">
          <thead>
            <tr>
              <th>Invoice#</th>
              <th>Status</th>
              <th>Actions</th>
         
       
            </tr>
          </thead>
          <tbody>
            {posts.blogs &&
              posts.blogs.map((item) => (
                <tr key={item.transaction_id}>
                  <td>{item.transaction_id}</td>
                  <td>{item.Transaction_Status}</td>
                  <td><a href={'/administrator/production/invoice/'+item.transaction_id+'?date='+props.match.params.date}><button class="b1">View</button></a></td>
                
                </tr>
              ))}
          </tbody>
        </ReactBootStrap.Table>
        </Row>
        </Container>
            
           
  
            </div>
          );
}

export default AdminProductionPage;