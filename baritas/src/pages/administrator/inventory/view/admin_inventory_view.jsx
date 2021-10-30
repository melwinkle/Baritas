import React,{useEffect,useState} from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import rooster from "../../../../images/IMG_8850.JPG";

// import { Container, Row, Col } from 'reactstrap';


/* We simply can use an array and loop and print each user */
function EditInventory(props) {
    
    const[inventory,setInventory]=useState({
        name:"",
        category:"",
        unit:"",
        inn:"",
        Measure:"",
        limit:""
});

    const{name,category,unit,inn,Measure,limit}=inventory;

    useEffect( async ()=>{
        await fetch('http://localhost/Baritas/baritas/Baritas_backend/apis/getainventoryitem.php?id='+props.match.params.id)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            setInventory(responseJSON.inventory);
            console.log(responseJSON.inventory);
        }
        );
    },[]);

    return (
        
        <div class="proda">
            <div class="accor c">
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>
            <div class="back">
            <Link to="/administrator/inventory/"><button><BiArrowBack/>BACK</button></Link>
            </div>

            
        
            
  
   
            <div class="addi c">
                

                <img src={rooster} alt="product"/>
                <h3>TOMATO</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Product</label>
                    <input type="text" name="name" value={name}/></Col>

                    </Row>
                        


                    <Row>
                            <Col><label>Category</label>
                            <select name="category">
                                <option value={category}>{category}</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                    <label>Unit Cost Price</label>
                    <input type="number" name="unit" value={unit}/></Col>
                        
                            <Col><label>Unit of Measurement</label>
                            <select name="Measure">
                                <option value={Measure}>{Measure}</option>
                                <option value="lb">Pounds(lb)</option>
                                <option value="ml">Millimetres</option>
                                <option value="bags">bags</option>
                                
                            </select>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                    <label>In Stock</label>
                    <input type="number" name="inn" value={inn}/></Col>
                    </Row>
                    <Row>
                    <Col>
                    <label>Stock Limit</label>
                    <input type="number" name="limit" value={limit}/></Col>
                        </Row>

                        <Row><button>Update</button></Row>
                       
                    </Container>
                    


                    

                    
                    
                    

                    
                </form>

            </div>

  </div>

// next

  );

}


export default EditInventory;