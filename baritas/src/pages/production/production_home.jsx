import React, { useEffect, useState ,useMemo} from "react";
import '../../App.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt} from "react-icons/fa";
import DataTable from './component/DataTable';
import data from './Table/data';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
import Badge from 'react-bootstrap/Badge';
// get data fron the procution folder 
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import { TableHeader, Pagination, Search } from "../../components/DataTable";

/* We simply can use an array and loop and print each user */
function ProductionPage(){
    
  const [posts, setPosts] = useState({ blogs: [] });
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const ITEMS_PER_PAGE = 10;

  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;

  const headers = [
    { name: "No#", field: "id", sortable: false },
    { name: "Product Name", field: "product_name", sortable: true },
    { name: "In Stock", field: "in_stock", sortable: false },
    { name: "Measurement", field: "measurement", sortable: false },
    { name: "Recipe", field: "recipe", sortable: false },
    { name: "Action", field: "body", sortable: false }
];
  
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        'http://localhost/Baritas/baritas/Baritas_backend/apis/fetchallproduction.php'
      );
      setPosts({ blogs: data.data });
      console.log(data);
    };
    fetchPostList();

    alertnum();
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

  const commentsData = useMemo(() => {
    let computedComments = posts.blogs;
  
    if (search) {
        computedComments = computedComments.filter(
            comment =>
            comment.product_name.toLowerCase().includes(search.toLowerCase()) ||
            comment.recipe.toLowerCase().includes(search.toLowerCase()) ||
            comment.measurement.toLowerCase().includes(search.toLowerCase()) 

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
                <li class="sidenav-item active">
                  <a href="/production/" class="sidenav-link" >
                  <MDBBtn outline><i class="fas fa-home fa-fw me-3"></i><span>Home</span></MDBBtn></a>
                </li>
                <li class="sidenav-item">
                  <a href="/production/alert/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-bell me-3"></i><span>Alerts</span></MDBBtn></a>
                </li>
                <li class="sidenav-item ">
                  <a href="/production/transact" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-boxes me-3"></i><span>Transactions</span></MDBBtn></a>
                </li>
                
              </ul>

              <div class='logout'>
                <Link to='/'><FiLogOut/> Log Out</Link>
                
              </div>
            </nav>
      <Container id="invt">
  <Row>
    <Link to="/production/add/"><Button id="addnew">Add New +</Button></Link>
    
  </Row>
  <Row>

 
    <Form.Group id="forminv">
<Row>
<Form.Label>Production Item</Form.Label> 
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
              <tr key={item.production_id}>
                <td>{index + 1}</td>
                <td>{item.product_name}</td>
                <td>{item.in_stock}</td>
                <td>{item.measurement}</td>
                <td>{item.recipe}</td>
                <td><a class="ab1"href={'/production/update/' + item.production_id}><button class="b2">Edit</button></a>
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

  

// next

  );

}

export default ProductionPage;