import React,{useState,useEffect} from "react";
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


/* We simply can use an array and loop and print each user */
function BProductPage (props){
    const [posts, setPosts] = useState({ blogs: [] });
    const item=JSON.parse(sessionStorage.getItem("branchMData"));
    const id = item.UserData.rest;
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
  
    // const confirm=(id)=>{
    //   axios(
    //     'http://localhost/Baritas/baritas/Baritas_backend/apis/confirminvoice.php?id='+id
    //   );
    // }
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
              <Link to="/branch_manager/employee/"> <button><FaList /><div> Employee</div>
             </button></Link>
             
              </div>
            <div class="menuitem">
              <Link to="/branch_manager/inventory/"> <button><FaList /><div> Inventory</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/branch_manager/finances/"> <button><FaList /><div> Finances</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/branch_manager/orders/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>
{/* 
              <div class="menuitem">
              <Link to="/branch_manager/mainmenu/"> <button><FaList /><div> Menu</div>
             </button></Link>
             
              </div> */}
              <div class="menuitem c">
              <Link to="/branch_manager/production/"> <button><FaList /><div> Production</div>
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
  <Link to="/branch_manager/production/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
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
                  <td><a class='ab1' href={'/branch_manager/production/invoice/'+item.transaction_id+'?date='+props.match.params.date}><button class="b1">View</button></a>
             </td>
                
                </tr>
              ))}
          </tbody>
        </ReactBootStrap.Table>
        </Row>
        </Container>


        </div>
          )
}

export default BProductPage;