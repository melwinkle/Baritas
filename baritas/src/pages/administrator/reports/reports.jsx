import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard,MDBInput, MDBRow, MDBCol, MDBCardTitle  } from 'mdb-react-ui-kit';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaFileDownload, FaList,FaStore } from "react-icons/fa";
import "../../../Header.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
const Reports = () => {


  const [posts,setPosts] = useState({ blogs: [] });


  const id=sessionStorage.getItem("rest");
  const[searchTerm,setSearchTerm] = useState(
    {endDate:"",
    startDate:"",
    dine_type:"",
  rest:id}
  );



  useEffect(() => {
   



  },[setPosts]);

  const update=()=>{
    console.log(searchTerm); 
    
    axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/reports.php' ,JSON.stringify(searchTerm)).then(function(response){
  //  console.log(response.data);
  
   setPosts({ blogs: response.data.data});
  //  posts.push(response.data.data);
        // console.log(response.data.data);

   })
}
  function onChange(e){
    const newInventory ={...searchTerm}
    newInventory[e.target.name]=e.target.value;
    setSearchTerm(newInventory);
 }

 const imeiIndex =(key,arr)=>arr.reduce(
   (cache,product)=>{
     const property = product[key]
    if(property in cache){
      return {...cache,[property] : cache[property].concat(product)
      }
    }
    return {...cache, [property]:[product]}
    
    },{}
 )


const newImg =[imeiIndex('cat_name',posts.blogs)];
 console.log(newImg);

  return (
    <div class="proad">
            <nav
              id="sidenav-1"
              class="sidenav"
              data-mdb-hidden="false"
            >
              <div className="logotext">
              <Row>
                  <Col><h3>Baritas </h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                <li class="sidenav-item">
                  <a href="/administrator/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/mainmenu/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-utensils me-3"></i><span>Menu</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/administrator/reports/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-clipboard me-3"></i><span>Reports</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/production/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
                </li>
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>
        
<Container id="invt">

  <Row>

 
    <Form.Group id="forminv" >

        <Row>
        <Form.Label>Restaurant type</Form.Label>
            <select name="dine_type"class="select " onChange={(e)=>onChange(e)}>
            <option >Select Dine type</option>
                <option value="Dine-In">Dine-In</option>
                <option value="Takeaway">Takeaway</option>
            </select>
        </Row>
        <Row>
            <Col>  <Form.Label>Date To</Form.Label> <Form.Control name="startDate" type="date" placeholder="Normal text" onChange={(e)=>onChange(e)}/></Col>
            <Col>  <Form.Label>Date From</Form.Label> <Form.Control name="endDate" type="date" placeholder="Normal text" onChange={(e)=>onChange(e)}/></Col>
        </Row>
        
        <Row>
            <Col><MDBBtn name="submit" class="search" onClick={update}>SEARCH</MDBBtn></Col>
            
        </Row>


   

    </Form.Group>


  </Row>

  <MDBBtn class="download" onClick={exportHTML}>Download Report<FaFileDownload/></MDBBtn>
<Row id="invtt" >
   <Row id="source-html" >

  <Row id="cat" overflow >
  
{Object.keys(newImg[0])?.map((index)=>(
                  

  <MDBCard>
       <MDBCardTitle>{index}</MDBCardTitle>
       <MDBCardBody>
           <MDBCardText>
           <MDBTable  id="repo">
        <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>Menu Name </th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {newImg[0][index].map((item)=> (
              <tr key={item.cat_id}>
                <td>{item.cat_id}</td>
                <td>{item.food}</td>
                <td>{item.quant}</td>
                <td>{item.amt}</td>
  
              
              </tr>
             ))}
        </MDBTableBody>
      </MDBTable>

           </MDBCardText>
       </MDBCardBody>
   </MDBCard>

             ))}  
               </Row>

    

  

   
  </Row>
      
      </Row>
      </Container>
    </div>
  );
};


function exportHTML(){
  let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
       "xmlns:w='urn:schemas-microsoft-com:office:word' "+
       "xmlns='http://www.w3.org/TR/REC-html40'>"+
       "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><style>body{ text-align:center;}</style><body>";
  var footer = "</body></html>";
  var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;
  
  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = 'document.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}

export default Reports;
