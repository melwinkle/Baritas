import React, { useEffect, useState } from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
import DataTable from '../../component/DataTable';
import data from '../../Table/data';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
import Modal from "react-bootstrap/Modal";
// get data fron the procution folder 
import Badge from 'react-bootstrap/Badge';
/* We simply can use an array and loop and print each user */
function ProductionTPage (props) {
       
  const [posts, setPosts] = useState({ blogs: [] });


  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallptransact.php?date='+props.match.params.date
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
    alertnum();
  }, [setPosts]);
  

  const alertnum=()=>{
    fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php')
      .then((response)=>response.json())
      .then((responseJSON)=>{
          setAlert(responseJSON.alert);
          console.log(responseJSON.alert);
      }
      );
  }
    return (
        
        <div class="proad">
            <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h3>Baritas:Production</h3></Col>
              
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
             <Badge bg="secondary">{alert_num}</Badge>
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
        <Link to="/production/transact/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>

 
<Row id="invtt">

      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
            <th>ID</th>
   
            <th>Restaurant</th>
 
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.transaction_id}>
                <td>{item.transaction_id}</td>
                <td>{item.restaurant}</td>
                <td>{item.Transaction_Status}</td>
               
       
                <td><a class="ab1"href={'/production/transact/tracking/' + item.transaction_id}><button class="b2">Edit</button></a>
               <a class="ab1" href={'/production/transact/invoice/' + item.transaction_id}> <button class="b1">View</button></a></td>
             
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