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


import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
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
      getbranchname();
    }, [setPosts]);
  
    // const confirm=(id)=>{
    //   axios(
    //     'http://localhost/Baritas/baritas/Baritas_backend/apis/confirminvoice.php?id='+id
    //   );
    // }
    const[branch,setBranch]=useState("");
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
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/branch_manager/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
               
              
                <li class="sidenav-item active">
                  <a href="/branch_manager/production/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
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