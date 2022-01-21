import React,{useState,useEffect} from 'react';
import "../../../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
  import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaHome,FaBell,FaStoreAlt,FaArrowLeft,FaPlus} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import {MdDelete} from "react-icons/md";
import { MDBBtn,MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBCardText,MDBCard  } from 'mdb-react-ui-kit';
import Badge from 'react-bootstrap/Badge';
function ProductionGNTPage (props){
  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;
  const [inputList, setInputList] = useState([{ product: "", quantity: "" }]);
  // const [posts, setPosts] = useState({ blogs: [] });
  const[product,setProduct]=useState({
    date:"",
    restaurant:"",
    transaction_id:"",
    inputList:[]

});
const{date,restaurant,transaction_id}=product;

//  setInputList([...inputList, { product: "", quantity: "" }]);
function onChange(e){
  const newProduct ={...product}
  newProduct[e.target.name] = e.target.value;
  setProduct(newProduct);
}

const [data, setData] = useState([]);
const INVENTORY_API_URL = `http://localhost/Baritas/baritas/Baritas_backend/apis/updateproduct.php`;
const fetchInventory = () => {
          fetch(`${INVENTORY_API_URL}`)
              .then(res => res.json())
              .then(json => setData(json));
      }
useEffect( async () => {
  fetchInventory();
   await fetch(
      'http://localhost/Baritas/baritas/Baritas_backend/apis/getatransaction.php?id='+props.match.params.id)
    .then((response) => response.json())
    .then((responseJSON) =>{
      setProduct(responseJSON.data[0]);
      console.log(responseJSON.data[0]);
    }
    );
    alertnum();
  },[]);


  const alertnum=()=>{
    fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php')
      .then((response)=>response.json())
      .then((responseJSON)=>{
          setAlert(responseJSON.alert);
          console.log(responseJSON.alert);
      }
      );
  }

const [inEditMode, setInEditMode] = useState({
         status: false,
        rowKey: null
     });
 
    const [unitPrice, setUnitPrice] = useState(null);

   
     const onEdit = ({id, currentUnitPrice}) => {
          setInEditMode({
           status: true,
              rowKey: id
       })
        setUnitPrice(currentUnitPrice);
     }
    
     const onSave = ({id, newUnitPrice}) => {
              update({id, newUnitPrice});
          }
      
          const onCancel = () => {
              // reset the inEditMode state value
              setInEditMode({
                  status: false,
                  rowKey: null
              })
              // reset the unit price state value
              setUnitPrice(null);
          }
          const update=({id,newUnitPrice})=>{
    axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updateproduct.php?id='+id+"&q="+newUnitPrice
    )
    
 console.log("id:"+id +",quantity:"+newUnitPrice
 );
        // reset inEditMode and unit price state values
        onCancel();

       

    

    // JSON.stringify(invoice)).then(function(response){
    //   console.log(response.data);
    //   }
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
                  <Col><h3>Baritas Adenta</h3></Col>
              
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
                <li class="sidenav-item">
                  <a href="/administrator/finances/" class="sidenav-link"
                    ><MDBBtn outline><i class="fas fa-piggy-bank me-3"></i><span>Finances</span></MDBBtn></a>
                </li>
                <li class="sidenav-item active">
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
        <Link to={"/production/transact/view/"+date}><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>

<Row id="invtr">
<div class="addi c p">
<h3>Update Invoice#{transaction_id}</h3>

<form>
      
      <Container>
          <Row>
       

              <Col><label>Date</label>
      <input type="date" name="date" placeholder="Item name" value={date} onChange={(e)=>onChange(e)}/></Col>
      <Col><label>Branch</label>
              <select name="restaurant"  value={restaurant} onChange={(e)=>onChange(e)}>
           
                  <option value="Adenta">Adenta</option>
                  <option value="Atomic">Madina</option>
                  <option value="Legon">Campus Hub</option>
                  
                  
              </select></Col>
      </Row>

      </Container>
      </form>
      </div>
  <ReactBootStrap.Table  bordered  id="invtb">
    <thead>
      <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Action</th>
      </tr>
      
    </thead>
    <tbody>
    { Object.keys(product.inputList).map((products, i) =>
      <tr key={product.inputList[products].production_trans_id}>
        <td>
        {product.inputList[products].product_name}
        </td>
        {/* <td>
        {product.inputList[products].quantity}
        </td> */}
        <td>
                               {
                                  inEditMode.status && inEditMode.rowKey === product.inputList[products].production_trans_id ? (
                                        <input value={unitPrice}
                                               onChange={(event) => setUnitPrice(event.target.value)}
                                        />
                                    ) : (
                                      product.inputList[products].quantity
                                    )                                }
                            </td>
                            <td>
                                {
                                    inEditMode.status && inEditMode.rowKey === product.inputList[products].production_trans_id ? (
                                        <React.Fragment>
                                            <button
                                               class="b2"
                                                onClick={() => onSave({id: product.inputList[products].production_trans_id,newUnitPrice: unitPrice})}
                                            >
                                                Save
                                            </button>

                                            <button
                                               class="b3"
                                                style={{marginLeft: 8}}
                                                onClick={() => onCancel()}
                                            >
                                                Cancel
                                            </button>
                                        </React.Fragment>
                                    ) : (
                                        <button
                                        class="b1"
                                            onClick={() => onEdit({id: product.inputList[products].production_trans_id, currentUnitPrice: product.inputList[products].quantity})}
                                        >
                                            Edit
                                        </button>
                                    )
                                }
                            </td>
        {/* <td>
          <button class="b2"  onClick={update(product.inputList[products].production_trans_id)}>Update</button>
        </td> */}
       
      </tr>
       )}
    </tbody>
  </ReactBootStrap.Table>
</Row>
    {/* / <Col>
                //         <div className="btn-box">
                //           {inputList.length !== 1 && <button
                //             className="mr10"
                //             onClick={() => handleRemoveClick(i)}><MdDelete/></button>}
                //           {inputList.length - 1 === i && <button onClick={handleAddClick}><FaPlus/></button>}
                //         </div>
                //           </Col>
               
                      // );
                    
                    // })} */}
             
              
            </Container>


        
            

          </div>
        );
    }


export default ProductionGNTPage;




