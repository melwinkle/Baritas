

import React ,{useEffect,useState}from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../Header.css";
import '../../App.css';
import logo from "../../images/IMG_8850.JPG";
import { FaCheckCircle } from 'react-icons/fa';
import axios from "axios";
import { FiLogOut } from 'react-icons/fi';


const BarPage = () => {

    const [posts, setPosts] = useState({ blogs: [] });
    const id=sessionStorage.getItem("rest");

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getkitchenorder.php?id='+id
        );
        setPosts({ blogs: data.data });
        console.log(data.data);
      };
      fetchPostList();
    }, [setPosts]);
  

   
 

  return (
      <div class="order">

      
      


      <div class="midbar">
        <section class="pending" id="pending">
        <div class="topbar">
              <Container>
                  <Row>
                     
                      <Col><h4 class="active" id="act"><strong>Open</strong></h4></Col>
                      <Col  id="lnk"> <Link to="/bar/bar_complete/"><h4 class="com sec" id="rs">Completed</h4></Link></Col>        
                  </Row>
                  <Row id="logs"><Col>
                  <Link to="/"><FiLogOut/></Link>
                  </Col></Row> 
                </Container>
            </div>

            
        </section>
       
       
        <Container id="bar">
           <Row id="rbar">
           {posts.blogs &&
              posts.blogs.map((item)=>(
                Object.keys(item.drink).map((drink, index) =>
                
                    item.drink.length>0
                        ?( 
               <Col>
                    <Card id="bcard" >
                        <Card.Header id="bhead">
                            ORDER #{item.order_id}
                            </Card.Header>
                        <Card.Body>
                           
                            <Card.Text id="barit">  
                           
                              <Row>
                                                            
                                                            <Col><h6>{item.drink[drink].name_of_food}</h6></Col>
                                                            <Col><h4>x{item.drink[drink].quantity}</h4></Col>
                                                        </Row>

                              
                            </Card.Text>
                        

                           <Row>
                                
                              
                                <Link to="/cashier/kitchen_view/">  <Button id="yes" ><FaCheckCircle/></Button></Link>
                                </Row>
                        </Card.Body>
                        
                    </Card>
               </Col>
                        )
                        :null
               )
              
                 ))}
               

               
               

               
           </Row>
       </Container>

            
      
           
          </div>
      </div>
  );
};

export default BarPage;


