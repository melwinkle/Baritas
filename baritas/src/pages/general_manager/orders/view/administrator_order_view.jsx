import React,{useState,useEffect} from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import rooster from "../../../../images/IMG_8850.JPG";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'reactstrap';
import { FaList,FaStore,FaArrowLeft } from "react-icons/fa";

 function GOrderVPage (props){
    
          
    const [posts, setPosts] = useState({ blogs: [] });

    const id = sessionStorage.getItem("rest");
    const [searchTerm,setSearchTerm] = useState('');
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getallorderd.php?id='+id+'&date='+props.match.params.date
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
              <div class="menuitem c">
              <Link to="/general_manager/orders/"> <button><FaList /><div> Orders</div>
             </button></Link>
             
              </div>

             
              <div class="menuitem">
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

<Link to={"/general_manager/orders/"}><Button id="backh"><FaArrowLeft/>Back</Button></Link>

</Row>
    
   

    </Form.Group>


  </Row>

 
<Row id="invtt">

      <ReactBootStrap.Table  bordered hover id="invtb">
        <thead>
          <tr>
          <th>Order#</th>
            <th>Waiter</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Actions</th>
     
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.filter((item)=>{
              if(searchTerm == ""){
                return item;
              }
              else if(item.date.includes(searchTerm)){
                return item;
              }

            }).map((item) => (
              <tr key={item.id}>
                    <td>{item.id}</td>
                <td>{item.waiter}</td>
                <td>{item.total}</td>
                <td>{item.payment_method}</td>
                <td>{item.status}</td>
                <td><a href={"/general_manager/orders/single/"+item.id}><button class="b1" >View</button></a>
                
                    </td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
      </Row>
      </Container>
          

          </div>
        );
    
}

export default GOrderVPage;




