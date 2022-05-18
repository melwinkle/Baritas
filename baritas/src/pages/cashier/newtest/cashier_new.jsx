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
const CashierEdit =(props)=>{

  const [posts, setPosts] = useState({ blogs: [] });
  const [post, setPost] = useState({ blogs: [] });
  const [waiter, setWaiter] = useState({ blogs: [] });
  const [last, setLast] = useState({ blogs: [] });
  const id=sessionStorage.getItem("rest");

  const [tempbasket, setTemp] = useState([]); 
  const [tbill, setBill] = useState(0);
  const [tempbaske, setTem] = useState([]); 
  const [tvat, setVat] = useState(0);  
  const [tsub, setSub] = useState(0);  

  // const temps=[];
    const [ordernew, setOrder] = useState(
      {

      notes:"",
      payment:"",
      dine:"",
      total:"",
      sub:"",
      vat:"",
      id:props.match.params.id,
      list:tempbasket,
    }
    );
const{waiters,notes,payment,dine,total,sub,vat,table}=ordernew;

const l = {listnew:tempbaske};
const prod = Object.assign(ordernew,l);

   

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getallcategories.php?id='+id
      );
      setPosts({ blogs: data.data });
      // console.log(data);
    };
    const getwaiters=async()=>{
      const {data}=  await axios.get(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/getallwaiter.php?id='+id
        ); 
        setWaiter({blogs: data.data});
        // console.log(data);
  
      };
      const getords=async()=>{
        fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getanorder.php?id='+props.match.params.id)
          .then((response)=>response.json())
          .then((responseJSON)=>{
              setOrder(responseJSON.data[0]);

              console.log(responseJSON.data[0]);
              
          }
          ); 
      }
    fetchPostList();
    getwaiters();
    getinfo();
    getords();
    getbranchname();
    // console.log("Back length:"+tempbasket);
  }, [setPosts],[setPost],[setOrder]);
 

  const getinfo=async(categ)=>{
    const {data}=  await axios.get(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getcategorymenu.php?id='+categ
      ); 
      // console.log(data);
      setPost({blogs: data.data});
      // console.log(data.data);

    }


  
    const tempbas=(oid,name,prices)=>{
    
    

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
      const orderp=document.createTextNode('Ghc'+ prices);


      trash.className='trash';
      trashy.className='trashy';
      trash.onClick = "alert('blah')";



      n.appendChild(ordern);
      q.appendChild(orderq);
      orders.appendChild(orderp);
      ordert.appendChild(n);
      ordert.appendChild(q);
      ordert.appendChild(orders);
      trash.appendChild(trashy);

      tempb.appendChild(ordert);
      tempb.appendChild(trash);



     

    }


    const totals=(price)=>{
  
    
      
      const tot=document.getElementById("total");
      const sub=document.getElementById("sub");
      const vat=document.getElementById("vat");



      
       const totals = parseInt(tot.innerText) + parseInt(price);
    
const tota=totals;
      tot.innerHTML=totals;
      const vate=totals*0.025;

      vat.innerHTML=vate;
      const subs=totals-vate;
      sub.innerHTML=totals-vate;
// console.log("tot"+totals);
     
      setOrder({...ordernew,
        total:tota,sub:subs,vat:vate,
      })
 
        }


    const additem=(id,name,price)=>{
      // console.log("B"+tempbasket);
      ordernew.list.push({id,name,price});
      setTem([...tempbaske,{id:id,name:name,price:price}]);
      // ordernew.listnew.push({id,name,price});
      // setTemp([...tempbasket, {id:oid,price:prices}]);

      
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
     axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updateOrder.php',JSON.stringify(prod)).then(function(response){
         console.log(response);
         if(response.status == 200){
          MySwal.fire({
              title: "Order #"+props.match.params.id+"Updated",
              text:"Order has been updated",
              icon: "success",
              button :true
            }).then(function(){
              window.location='/cashier/order_main';
            });

      }
      else{
          MySwal.fire({
              title: "Order Not updated",
              text:"Error adding order",
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
  const[branch,setBranch]=useState("");
    const getbranchname=()=>{
            if(id==1){
                setBranch("Adenta")
            }
            else if(id==2){
                setBranch("Atomic")
            }
            else if(id==3){
                setBranch("Legon Campus")
            }
        }
   
    return (
    <div class="process">
      <Container id="newnab">
      <Navbar  id="nab" expand="lg"  fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Baritas {branch}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="me-auto">
                            <Nav.Link href="/cashier/order_main/">Orders</Nav.Link>
                      
                            
                          </Nav>
                          <Nav>
                            <Nav.Link href="#deets">Cashier 1</Nav.Link>
                            <Nav.Link eventKey={2} href="/">
                              Logout
                            </Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container id="menct">
                  <Row id="menucat">
                    <Col id="scrcat">
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
                  <Col id='foodc'><Button id='fod' key={item.id} onClick={()=>{totals(item.price); additem(item.id,item.name, item.price)}}>
                  <Image src={logo}></Image>
                  <h6>{item.name}</h6>
                  <p>Ghc {item.price}</p>
                  </Button></Col>
                ))}
              </Row>
            </Row>

                </Container>


      </Container>
      <Container id="orderdine">
        <Form id="formdine">
          <Container>
          <Row>
                      <Form.Group>
                      <GiForkKnifeSpoon/>
                      <GiForkKnifeSpoon/>
                        <select id="dn" name="dine" value={dine} onChange = {onChange} >
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
                      <Col><select name="waiters" value={waiters} onChange = {onChange}>
                      <option >Select Waiter</option>
                      {waiter.blogs &&
                waiter.blogs.map((item)=>(
                  <option key={item.id} value={item.name}>{item.fname}</option>
                ))}

                  </select></Col>

                  <Col>
                  <select name="table">
                  <option value={table}>{table}</option>
                      
                  </select></Col>
                  </Row>

                  <Row id="food" overflow>
                      <Row id="orderlist" >
                      {Object.keys(ordernew.list).map((prod,i)=>{
                           return <div>
                                  <button class="fod"><span class="fodh">{ordernew.list[prod].name}</span><span class="fodq">x1</span><span class="fodp">Ghc{ordernew.list[prod].price}</span></button>
                         
                            </div>
                        
                       })}
                      </Row>
                  </Row>
                  <Row id="dinefoot">
                  <Row> 
                    <h6>Notes</h6>
                    <textarea name="notes" value={notes} onChange = {onChange} rows="1"></textarea>
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
                     
                      <Col id="amts"> <h6 id="sub">{sub}</h6></Col>
                  </Row>
                  <Row>
                      <Col><h6>VAT</h6></Col>
                      <Col id="amt"><h6 id="vat">{vat}</h6></Col>
                  </Row>
                  <Row>
                      <Col><h6>Total</h6></Col>
                      <Col id="amt"><h6 id="total">{total}</h6></Col>
                  </Row>

                    <Row>
                      <Button type="button" name="submitdine" onClick={add} >Place Order</Button>
                      
                      
                      </Row>
                    
                  </Row>
          </Container>

        </Form>
      </Container>
        
      
    </div>
  );

}

export default CashierEdit;