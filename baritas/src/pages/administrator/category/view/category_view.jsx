import React,{ useEffect, useState } from 'react';
import "../../../../App.css";
import {MDBBtn} from 'mdb-react-ui-kit';
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
    const[branch,setBranch]=useState("");
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
      getbranchname();
    }, [setPosts]);
  
  
          const getbranchname=()=>{
            if(id==1){
                setBranch("Adenta")
            }
            else if(id==2){
                setBranch("Atomic")
            }
            else if(id==3){
                setBranch("Legon Campus")
            }
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
                  <Col><h3>Baritas {branch}</h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                <li class="sidenav-item">
                  <a href="/administrator/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn outline  ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/administrator/mainmenu/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-utensils me-3"></i><span>Menu</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/reports/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-clipboard me-3"></i><span>Reports</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/production/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
                </li>
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>
  
            
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




