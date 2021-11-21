import React,{useState,useEffect} from 'react';
import "../../../App.css";
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
import {MdDelete} from "react-icons/md";
import {FiLogOut} from "react-icons/fi";
import Badge from 'react-bootstrap/Badge';
function ProductionNPage (){
    
  const [inputList, setInputList] = useState([
    { product: "", quantity: "" }]
    );

  const [productnew, setProduct] = useState(
    {
    branch:"",
    date:""
  }
  );
  const[alert,setAlert]=useState({
    alert_num:""
  });

  const{alert_num}=alert;

  const l = {list:inputList}
  const prod = Object.assign(productnew,l);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    
  };

  useEffect(()=>{
    alertnum();
  });
  const alertnum=()=>{
    fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getalertnum.php')
      .then((response)=>response.json())
      .then((responseJSON)=>{
          setAlert(responseJSON.alert);
          console.log(responseJSON.alert);
      }
      );
      
  }
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { product: "", quantity: "" }]);
  };

  function onChange(e){
    setProduct({...productnew,
      [e.target.name]:e.target.value
    })
  }


  const add =(e)=>{
    console.log(prod);
   e.preventDefault();
   axios.post('http://localhost/Baritas/baritas/Baritas_backend/apis/createinvoice.php',JSON.stringify(prod)).then(function(response){
       console.log(response.data);
   })
}
       
        return (
          <div class="proad">
                 <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          <div className="logotext">
              <Row>
                  <Col><h3>Baritas:Production</h3></Col>
              
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
             <Badge bg="secondary">{alert_num}</Badge>
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
                <div class="addi c">
         
         <h3>Invoice</h3>
         <form>
             <Container>
                 <Row>
                     <Col><label>Date</label>
             <input type="date" name="date" value={productnew.date} onChange = {onChange}/></Col>

             <Col><label>Branch</label>
                     <select name="branch" value={productnew.branch} onChange = {onChange}>
                         <option value="Sauces">Adenta</option>
                         <option value="Hot/Spicy">Madina</option>
                         <option value="Hot/Spicy">Campus Hub</option>
                         <option value="Hot/Spicy">Production</option>
                         
                     </select></Col>
             </Row>


             

             {inputList.map((x, i) => {
        return (
   
          <Row>
          <Col>
          <label>Product</label>
          <select name="product" value={x.product}
              onChange={e => handleInputChange(e, i)}>
              <option value="Jollof Sauce">Jollof Sauce</option>
              <option value="Chicken Sauce">Chicken Sauce</option>
             
              
          </select>
  </Col>

  <Col>
  <label>Quantity</label>
  <input type="number"  name="quantity" value={x.quantity} onChange={e => handleInputChange(e, i)}/></Col>

<Col>
<div className="btn-box">
          {inputList.length !== 1 && <button
            className="mr10"
            onClick={() => handleRemoveClick(i)}><MdDelete/></button>}
          {inputList.length - 1 === i && <button onClick={handleAddClick}><FaPlus/></button>}
        </div>
        </Col>
  </Row>
         
       
        );
      })}
      {/* {console.log(JSON.stringify(inputList))} */}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
                 <Row><button onClick={add}>Save</button></Row>
                
             </Container>
      
         </form>

     </div>
                </Row>
            </Container>

          
        
            

          </div>
        );
    
  }

export default ProductionNPage;




