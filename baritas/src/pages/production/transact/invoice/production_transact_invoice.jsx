import React,{useEffect,useState}  from 'react';
import "../../../../App.css";
import { Link,useLocation } from 'react-router-dom';
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
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductionIPage(props){
  let query = useQuery();

  const [posts, setPosts] = useState({ blogs: [] });

  
  
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getinvoice.php?id='+props.match.params.id
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);
       
        return (
          <div class="proad">
           <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h2>B</h2></Col>
              
              </Row>
              
              
            </div>
            
          </SidebarHeader>
          <SidebarContent id="menuit">
              <div class="menuitem">
              <Link to="/production/"> <button><FaHome /><div> Home</div>
             </button></Link>
             
              </div>

              <div class="menuitem">
              <Link to="/production/alert/"> <button><FaBell/><div> Alerts</div>
             </button></Link>
             
              </div>
              <div class="menuitem c">
              <Link to="/production/transact/"> <button><FaStoreAlt/><div> Sales</div>
             </button></Link>
             
              </div>
           
              <div class="menuitem">
              <Link to="/"> <button><FiLogOut/><div> LogOut</div>
             </button></Link>
             
              </div>
            
             
             
             
             
            
          </SidebarContent>
          {/* <SidebarFooter>
            Baritas (c)
          </SidebarFooter> */}
        </ProSidebar>
      </div>

            <Container id="invt">

            <Row>
        <Link to="/production/transact/"><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>
   

                <Row id="invtr">
                <div class="addi c" id="source-html">
       
         <h3>Invoice# {props.match.params.id}</h3>
         <Container>
             <Row>
                 <Col>From:<span>Production</span></Col>
         
                
             </Row>
             <Row>
             <Col>To:<span>{query.get("restaurant")}</span></Col>
          

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
     
            {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.production_trans_id}>
                <td>{item.production_trans_id}</td>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>

              </tr>
                 
                 ))}
       

            </tbody>
            </Table>
             </Row>
             
           
         </Container>
       
     </div>
     <Button id="dinv"  onClick={exportHTML} >Download Invoice</Button>

     
                </Row>

                
            </Container>

          
        
          





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

export default ProductionIPage;




