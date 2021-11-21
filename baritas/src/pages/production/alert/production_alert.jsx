import React, { useEffect, useState } from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt,FaWindowClose,FaRegClock, FaCheckCircle} from "react-icons/fa";

import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// get data fron the procution folder 
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import Badge from 'react-bootstrap/Badge';
/* We simply can use an array and loop and print each user */
function ProductionALPage () {
    
 
  
  const [posts, setPosts] = useState({ blogs: [] });
  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallnoticer.php'
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
  const updatealert=(id)=>{


    axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updatealert.php?id='+id)
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
        
        <Container  id="ret">

       <Row id="mt">
                        <Col>  <Link to="/production/alert"><button class="o1 ac">Unread</button></Link></Col>
                        <Col> <Link to="/production/alert/archive"><button class="o1">Read</button></Link></Col>
       </Row>
           
            
        <Row id="nt">
 
        {posts.blogs &&
      posts.blogs.map((item) => (
    
        <Col>
        <Toast id="tbt"  onClose={() => updatealert(item.alert_id)} >
        <Toast.Header>
            <strong className="mr-auto">
                Stock Alert
            </strong>
            <small>
            {item.AlertDate}
            </small>
        </Toast.Header>
        <Toast.Body id="tb" >
        {item.AlertMessage}
        </Toast.Body>
        
  </Toast>
       
       </Col>
      ))}
               
              
             
              
               
              
        
        </Row>
        </Container>
            
        </div>

  

// next

  );

}

export default ProductionALPage;