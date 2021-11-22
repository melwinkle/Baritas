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
import { Link,useLocation } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaList,FaArrowLeft} from "react-icons/fa";


import { Container, Row, Col } from 'reactstrap';
// get data fron the procution folder 
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
/* We simply can use an array and loop and print each user */
const GInvoicePage =(props)=> {
    
  let query = useQuery();

    const [posts, setPosts] = useState({ blogs: [] });

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getatransaction.php?id='+props.match.params.id
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
              <Link to="/general_manager/"> <button><FaList /><div> Home</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/general_manager/inventory/"> <button><FaList /><div> Inventory</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/finances/inventory/"> <button><FaList /><div> Finances</div>
             </button></Link>
             
              </div>
              <div class="menuitem">
              <Link to="/general_manager/orders/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>

             
              <div class="menuitem c">
              <Link to="/general_manager/production/"> <button><FaList /><div> Production</div>
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
  <Link to={"/general_manager/production/general/"+query.get("date")}><Button id="backh"><FaArrowLeft/>Back</Button></Link>
  </Row>
      
     
  
      </Form.Group>
  
  
    </Row>
  
   
  <Row id="invtt">
  
        <ReactBootStrap.Table  bordered hover id="invtb">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Product</th>
              <th>Quantity</th>
              
         
       
            </tr>
          </thead>
          <tbody>
            {posts.blogs &&
              posts.blogs.map((item) => (
                 Object.keys(item.inputList).map((products, i) =>
                <tr key={item.inputList[products].production_trans_id}>
                  <td>{item.inputList[products].production_trans_id}</td>
                  <td>{item.inputList[products].product_name}</td>
                  <td>{item.inputList[products].quantity}</td>
                
               
                </tr>
                )
              ))}
          </tbody>
        </ReactBootStrap.Table>
        </Row>
        </Container>
            
           
  
            </div>
          );
}

export default GInvoicePage;