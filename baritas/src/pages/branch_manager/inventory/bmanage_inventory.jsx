import React, { useEffect, useState,useMemo } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList,FaStore } from "react-icons/fa";
import "../../../Header.css";
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap';
import { TableHeader, Pagination, Search } from "../../../components/DataTable";
const BranchInvent = () => {
  const [posts, setPosts] = useState({ blogs: [] });

  const item=JSON.parse(sessionStorage.getItem("branchMData"));
  const id = item.UserData.rest;
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const ITEMS_PER_PAGE = 10;
  
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallinventory.php?id='+id
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();
    getbranchname();
  }, [setPosts]);

  const headers = [
    { name: "No#", field: "id", sortable: false },
    { name: "Product Name", field: "name", sortable: true },
    { name: "Unit Price", field: "unit", sortable: true },
    { name: "In Stock", field: "in", sortable: false },
    { name: "Measurement", field: "Measure", sortable: false },
    { name: "Action", field: "body", sortable: false }
];

  const commentsData = useMemo(() => {
    let computedComments = posts.blogs;

    if (search) {
        computedComments = computedComments.filter(
            comment =>
            comment.name.toLowerCase().includes(search.toLowerCase()) ||
            comment.unit.toLowerCase().includes(search.toLowerCase())
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
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
                  <a href="/branch_manager/inventory/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-boxes me-3"></i><span>Inventory</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/branch_manager/orders/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-concierge-bell me-3"></i><span>Orders</span></MDBBtn></a>
                </li>
               
              
                <li class="sidenav-item">
                  <a href="/branch_manager/production/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
                </li>
              </ul>

              <div class='logout'>
                <Link to='/'><FiLogOut/> Log Out</Link>
                
              </div>
            </nav>
  


<Container id="invt">
  
  <Row>

 
    <Form.Group id="forminv">
<Row>
<Form.Label>Inventory Item</Form.Label> 
  <Col>

 
  <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            /></Col>
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
          {commentsData.map((item,index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.unit}</td>
                <td>{item.in}</td>
                <td>{item.Measure}</td>
                <td><a class="ab1"href={'/branch_manager/inventory/view/' + item.id}><button class="b2">View</button></a></td>
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
};
export default BranchInvent;
