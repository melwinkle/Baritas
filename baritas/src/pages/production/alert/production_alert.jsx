import React, { useEffect, useState } from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt,FaWindowClose,FaRegClock} from "react-icons/fa";

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
/* We simply can use an array and loop and print each user */
function ProductionALPage () {
    
 
  
  const [posts, setPosts] = useState({ blogs: [] });
  
   
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallnoticer.php'
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);


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
                  <Col><h2>B</h2></Col>
              
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
    

   
        <Card id="salert">
        <Card.Header id="chead"><button id="nclose" onClick={updatealert(item.alert_id)}><FaWindowClose/></button> <span id="salt">Stock Alert </span><span id="daten"><FaRegClock/>{item.AlertDate}</span></Card.Header>
        <Card.Body>
            <Card.Title>  {item.AlertMessage}</Card.Title>
            
            
        </Card.Body>
        </Card>
      
      ))}
                {/* <Card id="salert">
                <Card.Header id="chead"><button id="nclose"><FaWindowClose/></button> <span id="salt">Stock Alert </span><span id="daten"><FaRegClock/>19th October,2021 8:10AM</span></Card.Header>
                <Card.Body>
                    <Card.Title>  Legon Campus Hub has run low on Jollof Sauce</Card.Title>
                    
                    
                </Card.Body>
                </Card> */}
              
             
               

        
        </Row>
        </Container>
            
        </div>

  

// next

  );

}

export default ProductionALPage;