import React from 'react';
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
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft} from "react-icons/fa";
function ProductionIPage (){
    
          

  
       
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
         
         <h3>Invoice#124</h3>
         <Container>
             <Row>
                 <Col>From:<span>From</span></Col>
         
                
             </Row>
             <Row>
             <Col>To:<span>To</span></Col>
          

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
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>500</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>500</td>
                </tr>
                <tr>
                
                <td colSpan="2">TOTAL</td>
                <td>GHC 1000</td>
                </tr>
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




