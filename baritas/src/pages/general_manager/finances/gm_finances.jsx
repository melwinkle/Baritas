import React,{ useEffect, useState,useMemo } from "react";
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
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";

import CanvasJSReact from "../../../canvasjs-3.4.5/canvasjs.react";
import { TableHeader, Pagination, Search } from "../../../components/DataTable";
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
/* We simply can use an array and loop and print each user */
const GMFinancePage =()=>{
  const ITEMS_PER_PAGE = 10;

  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
   
    const [posts, setPosts] = useState({ blogs: [] });
    const id=sessionStorage.getItem("rest");
    const [points,setPoints]=useState();
    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchfinanceg.php'
        );
        setPosts({ blogs: data.data });
        console.log(data);
      };
      fetchPostList();
    }, [setPosts]);
  
  
 async function doit(btn){
  const { data } = await axios(
       'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchpay.php?id='+btn
     );
     setPoints(data.data);
     console.log(data.data);
 
     setShow(true);
  
 }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchTerm,setSearchTerm] = useState('');

    const options = {
			exportEnabled: true,
			animationEnabled: true,
			// title: {
			// 	text: " Financial Breakdown"
			// },
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: Ghc{y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 14,
				indexLabel: "{label} - Ghc{y}",
				dataPoints: points
			}]
		}

    const headers = [
      { name: "Date", field: "date", sortable: true },
      { name: "Total Income", field: "bill", sortable: true },
      { name: "Action", field: "body", sortable: false }
  ];

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
    }, [posts.blogs, currentPage, searchTerm, sorting]);
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
                
                <li class="sidenav-item ">
                  <a href="/general_manager/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Home</span></MDBBtn></a>
                </li>
               
                <li class="sidenav-item active">
                  <a href="/general_manager/finances/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
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
  
      <Form.Control type="date" name="inventory"  placeholder="Enter item"  onChange={event =>{setSearchTerm(event.target.value)}}/></Col>
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

export default GMFinancePage;