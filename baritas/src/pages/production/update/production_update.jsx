import React from 'react';
import "../../../App.css";
import { Link } from 'react-router-dom';
// import {FiLogOut} from "react-icons/fi";
// import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import rooster from "../../../images/IMG_8850.JPG";
 class ProductionUPage extends React.Component{
    
          

    render() {
       
        return (
          <div class="proda">
             

          
             <Container id="prodn">

<Row>

<Link to="/production/"><button id="pback"><BiArrowBack/>BACK</button></Link> 

</Row>

<Row>
<div class="addm c">
<img src={rooster} alt="product"/>
<h3>Update Product</h3>
<form>
<Container>
 <Row>
     <Col><label>Name</label>
<input type="text" placeholder="Item name"/></Col>
<Col><label>Image</label>
<input type="file"/></Col>
</Row>





 <Row>
     <Col><label>Category</label>
     <select>
         <option value="Sauces">Sauces</option>
         <option value="Hot/Spicy">Hot&Spicy</option>
         <option value="Hot/Spicy">Hot&Spicy</option>
         <option value="Hot/Spicy">Hot&Spicy</option>
         <option value="Hot/Spicy">Hot&Spicy</option>
     </select>
</Col>

</Row>


<Row>
<Col>
<label>Price</label>
<input type="number" /></Col>
<Col>
<label>In Stock</label>
<input type="number" /></Col>
 </Row>

 

 <Row><button>Save</button></Row>

</Container>










</form>

</div>
</Row>
</Container>


          </div>
        );
    }
}

export default ProductionUPage;




