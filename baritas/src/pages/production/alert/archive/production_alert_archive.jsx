import React, { useEffect, useState } from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt,FaWindowClose,FaRegClock} from "react-icons/fa";

import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
// get data fron the procution folder 
import Badge from 'react-bootstrap/Badge';
/* We simply can use an array and loop and print each user */
function ProductionAPage (){
    
  const [posts, setPosts] = useState({ blogs: [] });
  
  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallnotice.php'
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

              <div class="menuitem c">
              <Link to="/production/alert/"> <button><FaBell/><div> Alerts</div>
             </button></Link>
             <Badge bg="secondary">{alert_num}</Badge>
              </div>
              <div class="menuitem">
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
        
        <Container  id="invt">

       <Row id="mtt">
                        <Col>  <Link to="/production/alert"><button class="o1">Unread</button></Link></Col>
                        <Col> <Link to="/production/alert/archive"><button class="o1 ac">Read</button></Link></Col>
       </Row>
           
            
       <Row id="invtt">

<ReactBootStrap.Table  bordered hover id="invtb">
  <thead>
    <tr>
      <th>ID</th>
      <th>Date</th>
      <th>Message</th>

      
    </tr>
  </thead>
  <tbody>
    {posts.blogs &&
      posts.blogs.map((item) => (
        <tr key={item.alert_id}>
          <td>{item.alert_id}</td>
          <td>{item.AlertDate}</td>
          <td>{item.AlertMessage}</td>
   {/*  href={'/production/transact/invoice/' + item.id} */}

        
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


export default ProductionAPage;