import React,{useState,useEffect} from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {FaPlus,FaTrash} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import { QuantityPicker } from 'react-qty-picker';
import logo from "../../../images/IMG_8850.JPG";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
/* We simply can use an array and loop and print each user */
const CashierNew =(props)=>{

  const [posts, setPosts] = useState({ blogs: [] });
  const [post, setPost] = useState({ blogs: [] });
  const [waiter, setWaiter] = useState({ blogs: [] });
  const [last, setLast] = useState({ blogs: [] });
  const id=sessionStorage.getItem("rest");

  const [tempbasket, setTemp] = useState([]); 
  const [tbill, setBill] = useState(0);
  const [tvat, setVat] = useState(0);  
  const [tsub, setSub] = useState(0);  

  // const temps=[];
    const [ordernew, setOrder] = useState(
      {
      waiter:"",
      notes:"",
      payment:"",
      dine:"",
      total:"",
      sub:"",
      vat:"",
      id:props.match.params.id
    }
    );

    const l = {list:tempbasket};
    const prod = Object.assign(ordernew,l);

   

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getallcategories.php?id='+id
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    const getwaiters=async()=>{
      const {data}=  await axios.get(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getallwaiter.php?id='+id
        ); 
        setWaiter({blogs: data.data});
        console.log(data);
  
      }
    fetchPostList();
    getwaiters();
    getinfo();
    
  }, [setPosts],[setPost]);
 

  const getinfo=async(categ)=>{
    const {data}=  await axios.get(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getcategorymenu.php?id='+categ
      ); 
      setPost({blogs: data.data});
      console.log(data.data);

    }


  
    const tempbas=(oid,name,prices)=>{
    
      // temps.push({id:oid,price:prices});
      // console.log(temps);
      // console.log(temps.length);

      const tempb=document.getElementById('food');
      const ordert=document.createElement('button');
      const trash=document.createElement('button');
      const orders=document.createElement('span');
      const n=document.createElement('span');
      const q=document.createElement('span');
      const trashy=document.createElement('span');
      orders.className='fodp';
      ordert.className='fod';
      n.className='fodh';
      q.className='fodq';
      const ordern=document.createTextNode(name);
      const orderq=document.createTextNode('x'+'1');
      const orderp=document.createTextNode('Ghc'+prices);
      const trashp=document.createTextNode('X');
      const trashh=document.createTextNode('Remove');

      trash.className='trash';
      trashy.className='trashy';
      trash.onClick = "alert('blah')";


      trashy.appendChild(trashh);
      n.appendChild(ordern);
      q.appendChild(orderq);
      orders.appendChild(orderp);
      ordert.appendChild(n);
      ordert.appendChild(q);
      ordert.appendChild(orders);
      trash.appendChild(trashy);
      trash.appendChild(trashp);
      tempb.appendChild(ordert);
      tempb.appendChild(trash);



     

    }


    const total=(price)=>{
      // let totals=0;
      // tempbasket.forEach(element => {
      //   const tot=element.price+;
      //   totals=tot+totals;

      // });
      
      const tot=document.getElementById("total");
      const sub=document.getElementById("sub");
      const vat=document.getElementById("vat");



      
       const totals = parseInt(tot.innerText) + parseInt(price);
      
      // const totals = tempbasket.reduce((tots, price) =>
      // tots + parseFloat(price.price)
      // , 0)
      // const totals=tempbasket.reduce((a,v) =>  a + v.price , 0 );

      tot.innerHTML=totals;
      const vate=totals*0.025;

      vat.innerHTML=vate;
      const subs=totals-vate;
      sub.innerHTML=totals-vate;

     
      setOrder({...ordernew,
        total:totals,sub:subs,vat:vate,
      })
      console.log(totals);
    }


    const additem=(oid, prices)=>{

      setTemp([...tempbasket, {id:oid,price:prices}]);
      console.log("Back length:"+tempbasket.length);
      
      // setTemp([...tempbasket, { id: oid, price: prices }]);
      
  
      
    }

    const removeitem = index => {
      const list = [...tempbasket];
      list.splice(index, 1);
      setTemp(list);
    };



    const add=(e)=>{
      console.log(prod);
     e.preventDefault();
     axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/addorder.php',JSON.stringify(prod)).then(function(response){
         console.log(response.data);
         if(response.data == 1){
          MySwal.fire({
              title: "Order #"+props.match.params.id+"Placed",
              text:"Order has been placed",
              icon: "success",
              button :true
            }).then(function(){
              window.location='/cashier/order_main';
            });

      }
      else{
          MySwal.fire({
              title: "Inventory Not added",
              text:"Error adding inventory",
              icon: "error",
              button :true
            });

      }
     })
  }

  function onChange(e){
    setOrder({...ordernew,
      [e.target.name]:e.target.value
    })
  }
    return (
    <div class="process">
      <Container>
    
          <Col id="newnab">
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
                            <Nav.Link eventKey={2} href="#memes">
                              Logout
                            </Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>




          {/* body of menu */}
          <Container id="menct" >
            <Row id="menucat"  >
              
              <Col id="scrcat" > 
              {posts.blogs &&
                posts.blogs.map((item)=>(
              <Button id="catmec" onClick={() =>getinfo(item.category_id)} >{item.category_name}</Button>
            
             
                ))}
             

              
              
           
              </Col>
        

            </Row>

            <Row id="mens">
              <h6>OrderMenu</h6>
              <Row id='fodc' overflow>
              
              {post.blogs &&
                post.blogs.map((item)=>(


                <Col id='foodc'><Button id='fod' key={item.id} onClick={()=>{tempbas(item.id,item.name,item.price); total(item.price); additem(item.id, item.price)}}>
                  <Image src={logo}></Image>
                  <h6>{item.name}</h6>
                  <p>Ghc {item.price}</p>
                  </Button></Col>
               
                ))}
                
              </Row>
            </Row>

          </Container>


          </Col>
          <Col id="orderdine">

            <Form id="formdine" >
                <Container>
                    <Row>
                      <Form.Group>
                      <GiForkKnifeSpoon/>
                        <select id="dn" name="dine" value={ordernew.dine} onChange = {onChange} >
                        <option >Select Dine Type</option>
                            <option value="Dine-In">Dine-In</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Pickup">Pickup</option>
                        </select>
                      </Form.Group>
                    </Row>

                    <Row>
                      <h3>Order#{props.match.params.id}</h3>
                    </Row>

                    <Row>
                      <Col><select name="waiter" value={ordernew.waiter} onChange = {onChange}>
                      <option >Select Waiter</option>
                      {waiter.blogs &&
                waiter.blogs.map((item)=>(
                  <option key={item.id} value={item.name}>{item.fname}</option>
                ))}

                  </select></Col>

                  <Col>
                  <select name="table">
                      <option value="Table 1">{props.match.params.table}</option>
                      
                  </select></Col>
                  </Row>

                  {/* body */}
                  <Row id="food" overflow>



                      <Row id="orderlist" >
                       
                      </Row>


                   


                      

                      

                  </Row>
                  

                  {/* footer */}
                  <Row id="dinefoot">
                  <Row> 
                    <h6>Notes</h6>
                    <textarea name="notes" value={ordernew.notes} onChange = {onChange} rows="1"></textarea>
                    </Row>
                  <Row>
                    <h6>Payment Method</h6>
                      <select name="payment" value={ordernew.payment} onChange = {onChange}>
                      <option >Select Payment</option>
                          <option value="Cash">Cash</option>
                          <option value="Mobile Money">Mobile Money</option>
                          <option value="E-card">E-card</option>
                          <option value="Bolt">Bolt</option>
                      </select>
                    </Row>



                  <Row>
                      <Col><h6>SubTotal</h6></Col>
                     
                      <Col id="amts"> <h6 id="sub"></h6></Col>
                  </Row>
                  <Row>
                      <Col><h6>VAT</h6></Col>
                      <Col id="amt"><h6 id="vat"></h6></Col>
                  </Row>
                  <Row>
                      <Col><h6>Total</h6></Col>
                      <Col id="amt"><h6 id="total">0</h6></Col>
                  </Row>

                    <Row>
                      <Button type="button" onClick={add}name="submitdine">Place Order</Button>
                      
                      
                      </Row>
                    
                  </Row>
                </Container>
              
              
               
                   
                  </Form>
    
          
          
          </Col>
          
         
      </Container>
        
        
      
    </div>
  );

}

export default CashierNew;