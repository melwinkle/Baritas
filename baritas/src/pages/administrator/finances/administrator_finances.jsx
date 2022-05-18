import React,{ useEffect, useState, useMemo } from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaList} from "react-icons/fa";
import DataTable from '../orders/component/DataTable';
import data from '../orders/Table/data';
import { Container, Row, Col } from 'reactstrap';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { TableHeader, Pagination, Search } from "../../../components/DataTable";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";

  import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';

import CanvasJSReact from "../../../canvasjs-3.4.5/canvasjs.react";

/* We simply can use an array and loop and print each user */
const AdminFinancePage =()=>{
    const [posts, setPosts] = useState({ blogs: [] });

    const id=sessionStorage.getItem("rest");
    const ITEMS_PER_PAGE = 10;

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchfinance.php?id='+id
        );
        setPosts({ blogs: data.data });
        console.log(data);
      };
      fetchPostList();
      getbranchname();
    }, [setPosts]);
  
    const [searchTerm,setSearchTerm] = useState('');
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   
    const [points,setPoints]=useState();

 async function doit(btn){
 const { data } = await axios(
      'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchpay.php?id='+btn
    );
    setPoints(data.data);
    console.log(data.data);

    setShow(true);
 

}

const commentsData = useMemo(() => {
  let computedComments = posts.blogs;

  if (searchTerm) {
      computedComments = computedComments.filter(
          comment =>
          comment.date.includes(searchTerm) 
      );
  }

  setTotalItems(computedComments.length);

  //Sorting comments
  if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedComments = computedComments.sort(
          (a, b) =>
              reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
  }

  //Current Page slice
  return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );
}, [posts.blogs, currentPage, search, sorting]);

    const options = {
			exportEnabled: true,
			animationEnabled: true,
			// title: {
			// 	text: "Financial Breakdown"
			// },
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: Ghc{y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				dataPoints: points
			}]
		}
    const headers = [
      { name: "Date", field: "date", sortable: true },
      { name: "Total Income", field: "bill", sortable: true },
      { name: "Action", field: "body", sortable: false }
  ];
  
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
                  <Col><h3>Baritas {branch}</h3></Col>
              
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
                <li class="sidenav-item ">
                  <a href="/administrator/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
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
  
            
  <Container id="invt">
    
    <Row>
  
   
      <Form.Group id="forminv">
  <Row>
  <Form.Label>Sales Date</Form.Label> 
    <Col>
  
      <Form.Control type="date" name="inventory"  placeholder="Enter date" onChange={event =>{setSearchTerm(event.target.value)}} /></Col>
      <Col> </Col>
  </Row>
      
     
  
      </Form.Group>
  
  
    </Row>
  
   
  <Row id="invtt">
  
        <ReactBootStrap.Table  bordered hover id="invtb">
          <thead>
          <TableHeader
              headers={headers}
              onSorting={(field, order) =>
              setSorting({ field, order })
              }/>
          </thead>
          <tbody>

            {commentsData.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>Ghc {item.bill}</td>
                  <td>
                  <button class="b1" onClick={doit.bind(this,item.date)}>View</button>
                  <Modal id="chart" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>{item.date} Financial Breakdown</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <CanvasJSReact.CanvasJSChart  options = {options}/>
                                  </Modal.Body>
                                <Modal.Footer>
                                </Modal.Footer>
                            </Modal>
                      {/* <a href={'/administrator/finances/view/' + item.id}> <button class="b1">View</button></a> */}
                      </td>
                 
                
                </tr>
              ))}
          </tbody>
     
        </ReactBootStrap.Table>
        <Pagination
          total={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={page => setCurrentPage(page)}/>
        </Row>
        </Container>
            
           
  
            </div>
          );
}

export default AdminFinancePage;