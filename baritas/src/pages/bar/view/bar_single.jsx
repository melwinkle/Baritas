

import React ,{useEffect,useState}from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
//import react pro sidebar components

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../../Header.css";
import '../../../App.css';

import { FaCheckCircle } from 'react-icons/fa';
import axios from "axios";
import { FiLogOut } from 'react-icons/fi';


const BarVPage = (props) => {

    const [posts, setPosts] = useState({ blogs: [] });
    // const id=sessionStorage.getItem("rest");

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getsingleorder.php?id='+props.match.params.id
        );
        setPosts({ blogs: data.data });
        console.log(data.data);
      };
      fetchPostList();
      complete();
    }, [setPosts]);
  

   
 const complete=(it)=>{
  axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updatebar.php?id='+it)
 }

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
       
       
        <Container id="bare">
           <Row id="rbare">
           {posts.blogs &&
              posts.blogs.map((item)=>(

           

               <Col>
                    <Card id="bcard" >
                        <Card.Header id="bhead">
                            ORDER #{item.order_id}
                            </Card.Header>
                        <Card.Body>
                           
                            <Card.Text id="barit">  
                            {Object.keys(item.drink).map((order, index) =>
                              <Row>
                                                            
                                                            <Col><h6>{item.drink[order].name_of_food}</h6></Col>
                                                            <Col><h4>x{item.drink[order].quantity}</h4></Col>
                                                        </Row>
)}
                              
                            </Card.Text>
                           <Card.Text id="barit">
                           <h6>Notes</h6>
                               
                               <p>{item.special_notes}</p>
                           </Card.Text>
                           

                           <Row>
                                
                              
                                {/* <Link><a href={'/kitchen/single/'+item.order_id}><Button id="yes"  ><FaCheckCircle/></Button></a></Link> */}
                                </Row>
                        </Card.Body>
                        
                    </Card>
                    <Col><Button id='b2' onClick={complete(item.order_id)}>COMPLETE</Button></Col>
               </Col>



                 ))}
               

               
               

               
           </Row>
       </Container>

            
      
           
          </div>
      </div>
  );
};

export default BarVPage;


