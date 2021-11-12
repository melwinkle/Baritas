// Page to show how much has been used per day and how much the restaurant has received


import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaArrowLeft, FaList,FaStore } from "react-icons/fa";
import "../../../../Header.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
const BInventoryView = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallinventory.php'
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
              

              <div class="menuitem c">
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

              {/* <div class="menuitem">
              <Link to="/branch_manager/mainmenu/"> <button><FaList /><div> Menu</div>
             </button></Link>
             
              </div> */}
              <div class="menuitem">
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
        <Link to="/branch_manager/inventory/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>
<Row>

 
<Form.Group id="forminv">

<Row>
    <Col><Form.Label>Date From</Form.Label>
<Form.Control type="date" name="datefrom"  placeholder="Enter item" /></Col>
<Col><Form.Label>Date To</Form.Label>
<Form.Control type="date" name="dateto"  placeholder="Enter item" /></Col>
</Row>


<Button id="searchb"> Search</Button>


</Form.Group>


</Row>


 
<Row id="invtt">

      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
         
         <th>ID</th>
            <th>Date</th>
            <th>Stock Reduction</th>
         

          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.in}</td>
           
               
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      </Row>
      </Container>
    </div>
  );
};

export default BInventoryView;
