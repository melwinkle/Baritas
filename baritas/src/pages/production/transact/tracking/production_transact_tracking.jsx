import React,{useState,useEffect} from 'react';
import "../../../../App.css";
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


function ProductionNTPage (props){
    
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
useEffect( async () => {
   await fetch(
      'http://localhost/Baritas/baritas/Baritas_backend/apis/getatransaction.php?id='+props.match.params.id)
    .then((response) => response.json())
    .then((responseJSON) =>{
      setProduct(responseJSON.data[0]);
      console.log(responseJSON.data[0]);
    }
    );
  },[]);



  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  function update(id){

    axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/updateproduct.php?id='+id)
}


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
        <Link to={"/production/transact/view/"+date}><Button id="backh"><FaArrowLeft/>Back</Button></Link>
    </Row>

<Row id="invtr">
<div class="addi c">
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
      <tr>
        <td>
        {product.inputList[products].product_name}
        </td>
        <td>
        {product.inputList[products].quantity}
        </td>
        <td>
          <button class="b2"  onClick={update(product.inputList[products].production_trans_id)}>Update</button>
        </td>
       
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


export default ProductionNTPage;




