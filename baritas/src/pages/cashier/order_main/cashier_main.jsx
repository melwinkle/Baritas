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
import {FiLogOut} from "react-icons/fi";
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
/* We simply can use an array and loop and print each user */
const CashierOrders =()=>{
 
    const [posts, setPosts] = useState({ blogs: [] });
    const id=sessionStorage.getItem("rest");
    const ud=sessionStorage.getItem("id");
    const [post, setPost] = useState({ blogs: [] });

    // const{order_id,waiter_name,table,date,sub,stats,special_notes,pay,vat,total,order}=post;

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
  
    }, [setPosts],[setPost])

     const getinfo=async(order)=>{
      const {data}=  await axios.get(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getcashierorder.php?sid='+order
        ); 
        setPost({blogs: data.data});
        console.log(data);

      }


      const getcomplete=async(order)=>{
      
     

            Swal.fire({
                title: 'Complete Order#'+order,
                text: "Are you sure you want to complete this order",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes,Complete!'
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/changeorderstatus.php?id='+order);

                }
              })
        
        //    
           
           
           
       
  
        }


        const getcancel=async(order)=>{
      
     

            Swal.fire({
                title: 'Cancel Order#'+order,
                text: "Are you sure you want to cancel this order",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes,Cancel!'
              }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/changeordercancel.php?id='+order);

                }
              })
        
        //    
           
           
           
       
  
        }

        const neworder=()=>{
            window.location='/cashier/table/';
        //     axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/createorder.php?id='+id+'&ud='+ud,JSON.stringify(ud,id)).then(function(response){
        //         console.log(response.data);
        //         if(response.data.length!=0){
        //             window.location='/cashier/new/'+response.data.substring(0,2);
        //         }
        // });


        }
   
    return (
    <div class="process">
   <Navbar  id="nab" expand="lg"  fixed="top">
  <Container>
  <Navbar.Brand href="#home">Baritas</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/cashier/order_main/">Orders</Nav.Link>
      <Nav.Link href="/cashier/table/">Pending</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Cashier 1</Nav.Link>
      <Nav.Link eventKey={2} href="/">
      <FiLogOut/> <span>  Logout</span>
     
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      




{/* body */}
<Container id="cashier">
<Row>
    <Link > <Button id="backh" onClick={()=>neworder()}>New Order <FaPlus/></Button></Link>
   
</Row>



{/* <Row>
   
   
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
                
    </Col>


    
    <Col id="odc">
   
        <Card>
        <Card.Header>
            <Row id="details">
                <Row >
                {JSON.stringify(post)}

         
              <h4>#Order</h4>
           
                </Row>
                <Row>
                    <h6>Adjoa</h6>
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
                                /* {Object.keys(post.order).map((products, i) => 
                                <tr>
                                    <td>JR</td>
                                    <td>2</td>
                                    <td>20.00</td>
                                </tr>
                          
                               
                                
                               
                            
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
</Row> */}
<Row>
    {/* open and completed */}
   
    <Col id="opc">

    <Row id="opct">
        <Col id="activ"><Link to={'/cashier/order_main/'}>Active</Link></Col>
        <Col id="complit"><Link to={'/cashier/order_complete/'}>Completed</Link></Col>
    </Row>

    <Row id="cop" overflow>
    {posts.blogs &&
                posts.blogs.map((item)=>(
        <Row id="co" >
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
                </Row>
    </Col>


    {/* order  */}
    <Col id="odc">
  
    <Card>
    {post.blogs &&
                post.blogs.map((items)=>(
        <Container>
        <Card.Header>
        
        {/* // {JSON.stringify(post)} */}
            <Row id="details">
        
                <Row >
                    <h4>#Order{items.order_id}</h4>
                </Row>
                <Row>
                    <h6>{items.waiter}</h6>
                </Row>
                <Row>
                    <h6>{items.table}</h6>
                </Row>
                <Row>
                    <h6>{items.date}</h6>
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
                            {Object.keys(items.order).map((order, i) =>
                                    <tr key={items.order[order].item_id}>
                                    <td>{items.order[order].name_of_food}</td>
                                    <td>{items.order[order].quantity}</td>
                                    <td>{items.order[order].price}.00</td>
                                </tr>
                            )}
                                
                            
                             
                            
                            </tbody>
                        </table>
                    </Row>
                </Card.Text>
            </Card.Body>
            <Card.Footer id="odcf">
            <Row>
                <h6>Notes</h6>
                <input type="text" value={items.special_notes} readonly/>
            </Row>
            <Row>
                <Col><h6>SubTotal</h6></Col>
                <Col id="amts"><h6>{items.sub}</h6></Col>
            </Row>
            <Row>
                <Col><h6>VAT</h6></Col>
                <Col id="amt"><h6>{items.vat}</h6></Col>
            </Row>
            <Row>
                <Col><h6>TOTAL</h6></Col>
                <Col id="amt"><h6>{items.total}</h6></Col>
            </Row>
            <Row>
                <Col><Button id="b1" onClick={() =>getcancel(items.order_id)}>CANCEL</Button></Col>
                <Col><Button id="b2">EDIT</Button></Col>
                <Col><Button id="b3" onClick={() =>getcomplete(items.order_id)}>COMPLETE</Button></Col>
            </Row>
          
            </Card.Footer>

            </Container>
            ))}
        </Card>
       
    </Col>
</Row>
    
</Container>
        
      
    </div>
  );

}

export default CashierOrders;