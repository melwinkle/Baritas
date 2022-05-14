import React,{ useEffect, useState, useMemo } from "react";
import '../../../App.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaList} from "react-icons/fa";

import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'reactstrap';
import { TableHeader, Pagination, Search } from "../../../components/DataTable";
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
const BProductionPage =()=> {
    
  

    const [posts, setPosts] = useState({ blogs: [] });

    const item=JSON.parse(sessionStorage.getItem("branchMData"));
    const id = item.UserData.rest;
    const ITEMS_PER_PAGE = 10;
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    useEffect(() => {
      const fetchPostList = async () => {
        const { data } = await axios(
          'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchalltransactions.php?id='+id
        );
        setPosts({ blogs: data.data });
        console.log(data);
      };
      fetchPostList();
    }, [setPosts]);


    const commentsData = useMemo(() => {
      let computedComments = posts.blogs;
  
      if (search) {
          computedComments = computedComments.filter(
              comment =>
              comment.date.includes(search) ||
              comment.total.includes(search)
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

  const headers = [
    { name: "Date", field: "date", sortable: false },
    { name: "Total Transactions", field: "total", sortable: true },
    { name: "Action", field: "body", sortable: false },
];
  
    
     
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
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/branch_manager/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
               
              
                <li class="sidenav-item active">
                  <a href="/branch_manager/production/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
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
  <Form.Label>Transaction Date</Form.Label> 
    <Col>
  
      <Form.Control type="date" name="inventory"  placeholder="Enter item" onChange={event =>{setSearch(event.target.value)}} /></Col>
      <Col></Col>
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
                <tr key={item.transaction_id}>
                 
                <td>{item.date}</td>
              
                <td>{item.total}</td>
                <td><a href={"/branch_manager/production/general/"+item.date}><button class="b1">View</button></a>
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

export default BProductionPage;