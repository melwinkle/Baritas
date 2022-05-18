import React, { useEffect, useState,useMemo } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { TableHeader, Pagination, Search } from "../../../components/DataTable";
const BEmployee = () => {

  // const MySwal = withReactContent(Swal);

  const [posts, setPosts] = useState({ blogs: [] });
  const [post, setPost] = useState({ blog: [] });
  const [searchTerm,setSearchTerm] = useState('');

  const id=sessionStorage.getItem("rest");
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage1, setCurrentPage1] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [sorting1, setSorting1] = useState({ field: "", order: "" });

  const ITEMS_PER_PAGE = 10;
  const commentsData = useMemo(() => {
    let computedComments = posts.blogs;

    if (search) {
        computedComments = computedComments.filter(
            comment =>
            comment.first.toLowerCase().includes(search.toLowerCase()) ||
            comment.last.toLowerCase().includes(search.toLowerCase()) ||
            comment.user.toLowerCase().includes(search.toLowerCase()) ||
            comment.rolename.toLowerCase().includes(search.toLowerCase()) ||
            comment.stat.toLowerCase().includes(search.toLowerCase())



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

const commentsData1 = useMemo(() => {
  let computedComments = post.blog;

  if (search) {
      computedComments = computedComments.filter(
          comment =>
          comment.wfirst.toLowerCase().includes(search.toLowerCase())
      );
  }

  setTotalItems(computedComments.length);

  //Sorting comments
  if (sorting1.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedComments = computedComments.sort(
          (a, b) =>
              reversed * a[sorting1.field].localeCompare(b[sorting1.field])
      );
  }

  //Current Page slice
  return computedComments.slice(
      (currentPage1 - 1) * ITEMS_PER_PAGE,
      (currentPage1 - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );
}, [post.blog, currentPage1, search, sorting1]);

    const headers = [
    { name: "No#", field: "id", sortable: false },
    { name: "First Name", field: "first", sortable: true },
    { name: "Last Name", field: "last", sortable: true },
    { name: "User Role", field: "rolename", sortable: false },
    { name: "Username", field: "user", sortable: false },
    { name: "Password", field: "pass", sortable: false },
    { name: "Status", field: "stats", sortable: false },
    { name: "Action", field: "body", sortable: false }
]

const headers1 = [
  { name: "No#", field: "id", sortable: false },
  { name: "Full Name", field: "wfirst", sortable: true },
  { name: "Status", field: "stats", sortable: false },
  { name: "Action", field: "body", sortable: false }
]

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallemployee.php?id='+id
      );
      console.log(data);
      setPosts({ blogs: data.data });
      setPost({blog: data.waiter})
      // console.log(data);
    };
    fetchPostList();
    getbranchname();
  },[]);


  const wterminate=(id)=>{
    // MySwal.fire({
    //   title: "Employee Update",
    //   text:"Are sure you want to terminate ?",
    //   icon: "success",
    //   button :true
    // }).then(function(){
      axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/terminatewaiter.php?id='+id );
    // }); 
  

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
                  <Col><h3>Baritas {branch}</h3></Col>
              
              </Row>
              
              
            </div>
              <ul class="sidenav-menu">
                
                <li class="sidenav-item active">
                  <a href="/branch_manager/employee/" class="sidenav-link"
                    ><MDBBtn ><i class="fas fa-user-friends me-3"></i><span>Employee</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
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
               
              
                <li class="sidenav-item">
                  <a href="/branch_manager/production/" class="sidenav-link"
                    ><MDBBtn outline ><i class="fas fa-file-invoice me-3"></i><span>Production</span></MDBBtn></a>
                </li>
              </ul>

              <div class='logout'>
                <FiLogOut/> Log Out
              </div>
            </nav>

<Container id="invt">
  
  <Row>

 
   


  </Row>



              <Container>
<Row id="invtt">


          <Form.Label>GENERAL</Form.Label> 
          <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
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
                <td>{item.id}</td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.rolename}</td>
                <td>{item.user}</td>
                <td>{item.pass}</td>
                <td><button class={"b4 "+item.stat} disabled>{item.stat}</button></td>
                <td><a class="ab1"href={'/branch_manager/employee/update/' + item.id}><button class="b1">Edit</button></a></td>
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


       
<Row id="invtt">
<Form.Label>WAITERS</Form.Label> 
<ReactBootStrap.Table  bordered hover id="invtb">
  <thead>
  <TableHeader
              headers={headers1}
              onSorting={(field, order) =>
              setSorting({ field, order })
              }/>
  </thead>
  <tbody>
    
  {commentsData1.map((item) => (          
          <tr key={item.wid}>
          <td>{item.wid}</td>
          <td>{item.wfirst}</td>
          <td><button class={'b4 '+item.wstat}  disabled>{item.wstat}</button></td>
          <td><a class="ab1"href={'/branch_manager/employee/waiter/' + item.wid}><button class="b1">Edit</button></a>
         </td>
        </tr>
         
        
         
        
          ))}
  </tbody>
</ReactBootStrap.Table>
<Pagination
          total={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage1}
          onPageChange={page => setCurrentPage1(page)}/>
</Row>
  
  </Container>


      </Container>
    </div>
  );
};

export default BEmployee;
