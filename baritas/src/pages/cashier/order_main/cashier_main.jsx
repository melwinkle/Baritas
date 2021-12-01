import React,{useState,useEffect} from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {FaPlus} from "react-icons/fa";
import Card from 'react-bootstrap/Card';

/* We simply can use an array and loop and print each user */
const CashierOrders =()=>{
 
    const [posts, setPosts] = useState({ blogs: [] });
    const id=sessionStorage.getItem("rest");
    const [post, setPost] = useState({
        order_id:'',
        waiter_name:'',
        table:'',
        date:'',
        sub:'',
        stats:'',
        special_notes:'',
        pay:'',
        vat:'',
        total:'',
        order:[]

    });

    const{order_id,waiter_name,table,date,sub,stats,special_notes,pay,vat,total,order}=post;

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getcashierorder.php?id='+id
        );
        setPosts({ blogs: data.data });
        console.log(data);
      };
      
      fetchPostList();
      getinfo();
    }, [setPosts],[setPost]);

     const getinfo=async(order)=>{
      const datas=  await axios.get(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getcashierorder.php?sid='+order
        ); 
        setPost(datas.data[0]);
        console.log(datas.data[0]);

      }

   
    return (
    <div class="process">
   <Navbar  id="nab" expand="lg" bg="light" fixed="top">
  <Container>
  <Navbar.Brand href="#home">Baritas</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/cashier/order_main/">Orders</Nav.Link>
      <Nav.Link href="/cashier/new/">Pending</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Cashier 1</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      




{/* body */}
<Container id="cashier">
<Row>
    <Link to={'/cashier/new/'}> <Button id="backh">New Order <FaPlus/></Button></Link>
   
</Row>



<Row>
    {/* open and completed */}
   
    <Col id="opc">

    <Row id="opct">
        <Col id="activ"><Link>Active</Link></Col>
        <Col id="complit"><Link to={'/cashier/order_complete/'}>Completed</Link></Col>
    </Row>


    {posts.blogs &&
              posts.blogs.map((item)=>(
    <Row id="co">
        <Col>
            <Button onClick={() =>getinfo(item.order_id)} id="order">
                <Row >
                    <Col id="orderi" >#Order{item.order_id}</Col>
                    <Col id="orderd">{item.stats}</Col>
                </Row>
                <Row >
                    <Col id="orderi">{item.table}</Col>
                    <Col id="orderd">Ghc {item.total}</Col>
                </Row>
            </Button>
        </Col>
    </Row>
              ))}
    </Col>


    
    <Col id="odc">
   
        <Card>
        <Card.Header>
            <Row id="details">
                <Row >
                {JSON.stringify(post)}

         
              <h4>#Order{order_id}</h4>
           
                </Row>
                <Row>
                    <h6>Adjoa Mansa</h6>
                </Row>
                <Row>
                    <h6>Dine-In:Table 1</h6>
                </Row>
                <Row>
                    <h6>18th November 2021 12:20pm</h6>
                </Row>
            </Row>
            </Card.Header>
        <Card.Body>
                <Card.Text>
                    <Row id="tableod">
                        <table class="tod">
                            <thead>

                                <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {Object.keys(post.order).map((products, i) => */}
                                <tr>
                                    <td>JR</td>
                                    <td>2</td>
                                    <td>20.00</td>
                                </tr>
                                {/* )} */}
                               
                                
                               
                            
                            </tbody>
                        </table>
                    </Row>
                </Card.Text>
            </Card.Body>
            <Card.Footer id="odcf">
            <Row>
                <h6>Notes</h6>
                <input type="text" readonly/>
            </Row>
            <Row>
                <Col><h6>Sub-Total</h6></Col>
                <Col><h6>0.00</h6></Col>
            </Row>
            <Row>
                <Col><h6>VAT</h6></Col>
                <Col><h6>0.00</h6></Col>
            </Row>
            <Row>
                <Col><h6>Total</h6></Col>
                <Col><h6>0.00</h6></Col>
            </Row>
            <Row>
                <Col><Button id="b1">CANCEL</Button></Col>
                <Col><Button id="b2">EDIT</Button></Col>
                <Col><Button id="b3">COMPLETE</Button></Col>
            </Row>
          
            </Card.Footer>
        </Card>
           
    </Col>
</Row>
    
</Container>
        
      
    </div>
  );

}

export default CashierOrders;