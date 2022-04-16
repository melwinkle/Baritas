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
import Draggable from "react-draggable";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
/* We simply can use an array and loop and print each user */
const CashierTable =(props)=>{


  const id=sessionStorage.getItem("rest");
  const ud=sessionStorage.getItem("id");

  const [posts, setPosts] = useState({ blogs: [] });

  const [position, setPosition] = useState({ x: 0, y: 0 });
  function trackPos (data,id) {
    // setPosition({ });
    // alert("x="+data.x+"&y="+data.y);
    axios.post("http://localhost/Baritas/baritas/Baritas_backend/apis/tablemapup.php?id="+id+"&x="+data.x+"&y=-"+data.y);
 };

 
 const updatePos = (data,id) => {
  

  axios.get("http://localhost/Baritas/baritas/Baritas_backend/apis/tablemapup.php?id="+id+"&x="+data.x+"&y="+data.y);

};

 useEffect(() => {
  const fetchPostList = async () => {
    const { data } = await axios(
      'http://localhost/Baritas/baritas/Baritas_backend/apis/tablemap.php?id='+id
    );
    setPosts({ blogs: data.data });
    console.log(data);
  };
  fetchPostList();


},[setPosts]);
  
 
const addtab=()=>{


  // const { value: text } =  MySwal.fire({
  //   title: 'Enter new Table name',
  //   input: 'textarea',
  //   inputAttributes: {
  //     'aria-label': 'Type table name'
  //   },
  //   showCancelButton: true
  // })
  
  // if (text) {
  //   console.log(`${text}`);
  //   // axios.post("http://localhost/Baritas/baritas/Baritas_backend/apis/tablemapadd.php?id="+id+"&name="+text);
  // }


  const { value: text } = MySwal.fire({
    title: 'Input table name',
    input: 'text',
    inputLabel: 'New Table Name',
    inputPlaceholder: 'Enter table name'
  })
  
  if (text) {
    MySwal.fire(`New Table: ${text}`)
}
}

const neworder=(name)=>{
  axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/createorder.php?id='+id+'&ud='+ud+'&table='+name,JSON.stringify(ud,id)).then(function(response){
      console.log(response.data);
      if(response.data.length!=0){
        
          window.location='/cashier/new/'+response.data+'/'+name;
      }
});


}

    

    return (
    <div class="process">
      <Container>
    
          <Col id="newnab">
            <Navbar  id="nabc" expand="lg"  fixed="top">
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

</Col>


       </Container>


       <Container>
         <div id="dragb">
         <Button onClick={()=>addtab()}>Add new Table</Button>
         </div>
         


       {posts.blogs && posts.blogs.map((item, index) => 
          
          <Button  className="boxb"  onClick={()=>neworder(item.name)}>
            {item.name}
           
          </Button>
          
     
       )}



       </Container>
        
        
      
    </div>
  );

}

export default CashierTable;


