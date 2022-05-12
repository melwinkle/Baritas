import React,{useEffect,useState}  from 'react';
import "../../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col, Button } from 'reactstrap';
import Table from "react-bootstrap/Table";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import {FiLogOut} from "react-icons/fi";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft,FaList} from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';

function AOrderViewPage(props){
 

  const [posts, setPosts] = useState({ blogs: [] });



  
  
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getaorder.php?id='+props.match.params.id
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);
 
  
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
                <li class="sidenav-item active">
                  <a href="/administrator/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/administrator/mainmenu/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-utensils me-3"></i><span>Menu</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
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
      {posts.blogs &&
            posts.blogs.map((item) => (
            <Container id="invt">
         
            <Row>
        <Link to={"/administrator/orders/date/"+item.date}><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>
   

                <Row id="invtr">
                <div class="addi c" id="source-html">
                <h3>Baritas {item.restaurant}</h3>
         <h3>#{item.order_id}</h3>
    
         <Container>
       
             <Row>
                 <Col><h5>{item.dine}:<span>Table {item.table}</span></h5></Col>
         
               
             </Row>
             <Row> <Col><h5>{item.date}</h5></Col></Row>
             
     <Row>
         <h5>Cashier:{item.cashier}</h5>
     </Row>

             <Row>
             <Table  id="invtb">
            <thead>
                <tr>
               
                <th>Item</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
     
            {Object.keys(item.order).map((order, i) =>
            
            <tr key={item.order[order].item_id}>
               
                <td>{item.order[order].name_of_food}</td>
                <td>{item.order[order].quantity}</td>
                <td>{item.order[order].amount}</td>
              </tr>
            
            )}
              


                 
            
       

            </tbody>
            </Table>

            <Row id="cash">
                <Col> <h6>Payment mode:</h6></Col>
                <Col id="payo"><h6 >{item.pay}</h6></Col>
                </Row>
                <Row id="cash">
                <Col> <h6>Sub-Total:</h6></Col>
                <Col id="payo"><h6 >{item.sub}</h6></Col>
                </Row>
                <Row id="cash">
                <Col> <h6>VAT:</h6></Col>
                <Col id="payo"><h6 >{item.vat}</h6></Col>
                </Row>
                <Row id="cash">
                <Col> <h6>TOTAL(Ghc):</h6></Col>
                <Col id="payo"><h6 >{item.total}</h6></Col>
                </Row>
                
             </Row>
             
           
         </Container>
       
     </div>
     <Button id="dinv"  onClick={exportHTML} >Download Invoice</Button>

     
                </Row>
  
                
            </Container>

          
))}
          





          </div>
        );
    }



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

export default AOrderViewPage;




