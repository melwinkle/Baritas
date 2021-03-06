import React,{ useEffect, useState,useMemo } from "react";
import '../../../App.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import DataTable from './component/DataTable';
import data from './Table/data';
import Modal from "react-bootstrap/Modal";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaList,FaStore } from "react-icons/fa";
  import { Container, Row, Col } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import { TableHeader, Pagination, Search } from "../../../components/DataTable";
/* We simply can use an array and loop and print each user */
const GMOrderPage =()=> {
    
    const [posts, setPosts] = useState({ blogs: [] });
    const ITEMS_PER_PAGE = 10;
    const [searchTerm,setSearchTerm] = useState('');
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const id = sessionStorage.getItem("rest");
    useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/getallorders.php?id='+id
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
    getbranchname();
  }, [setPosts]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

const headers = [
  { name: "Date", field: "date", sortable: false },
  { name: "Total Orders", field: "count", sortable: true },
  { name: "Total Income", field: "total", sortable: true },
  { name: "Action", field: "body", sortable: false },
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
                  <a href="/general_manager/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/general_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/general_manager/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/general_manager/finances/inventory/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/general_manager/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
               
              
                <li class="sidenav-item">
                  <a href="/general_manager/production/" class="sidenav-link"
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
<Form.Label>Order Date</Form.Label> 
  <Col>

    <Form.Control type="date" name="inventory"  placeholder="Enter item" onChange={event =>{setSearchTerm(event.target.value)}}/></Col>
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
              <tr key={item.date}>
              
                <td>{item.date}</td>
               <td>{item.count}</td>
               <td>{item.total}</td>
                <td>
              
                    <a href={'/general_manager/orders/view/' + item.date}> <button class="b1">View</button></a>
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

export default GMOrderPage;