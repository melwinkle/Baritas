import React,{useEffect,useState}  from 'react';
import "../../../../../App.css";
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
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';

function ProductionGIPage(props){
 

  const [posts, setPosts] = useState({ blogs: [] });
  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;
  
  const id=sessionStorage.getItem('rest');
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getinvoice.php?id='+props.match.params.id
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
    alertnum();
    getbranchname();
  }, [setPosts]);
  const alertnum=()=>{
    fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php')
      .then((response)=>response.json())
      .then((responseJSON)=>{
          setAlert(responseJSON.alert);
          console.log(responseJSON.alert);
      }
      );
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
          <div class="proad">
          <nav
              id="sidenav-1"
              class="sidenav"
              data-mdb-hidden="false"
            >
              <div className="logotext">
              <Row>
                  <Col><h3>Baritas Production</h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
              <li class="sidenav-item">
                  <a href="/administrator/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/administrator/production_g/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Main</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/administrator/production_g/transact/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Transactions</span></MDBBtn></a>
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
        <Link to={"/administrator/production_g/transact/view/"+item.Date}><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>
   

                <Row id="invtr">
                <div class="addi c" id="source-html">
       
         <h3>Invoice# {props.match.params.id}</h3>
         <h3>Date: {item.Date}</h3>
         <Container>
             <Row>
                 <Col>From:<span>Production</span></Col>
         
                
             </Row>
             <Row>
        <Col>To:<span>{item.restaurant}</span></Col>
          

             </Row>

             <Row>
             <Table  bordered id="invtb">
            <thead>
                <tr>
                <th>#</th>
                <th>Item</th>
                <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
     
            {Object.keys(item.product).map((product, i) =>
            
            <tr key={item.product[product].production_trans_id}>
                <td>{item.product[product].production_trans_id}</td>
                <td>{item.product[product].product_name}</td>
                <td>{item.product[product].quantity}</td>

              </tr>
            
            )}
              
                 
            
       

            </tbody>
            </Table>
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

export default ProductionGIPage;




