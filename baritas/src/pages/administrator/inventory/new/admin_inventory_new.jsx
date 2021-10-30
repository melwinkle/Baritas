import React from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import {BiArrowBack} from "react-icons/bi";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";



class InventoryNPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            product:'',
            category:'',
            unitcost:'',
            unitmeasure:'',
            in_stock:'',
            image:null,
            rest:'',
            limit:''
        };
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
    }

     add(e){
         this.setState({rest:'1'});
         console.log(this.state);
        e.preventDefault();
        axios.post('http://localhost/Baritas/Baritas_backend/apis/addinventory.php',JSON.stringify(this.state)).then(function(response){
            console.log(response.data);
        })
        
    }

    fileSelectedHandler=event =>{
        this.setState({image:event.target.files[0]["name"]
        })
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }


  render() { 
    return (
        
        <div class="proda">
            <div class="accor">
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>
            <div class="back">
            <Link to="/administrator/inventory/"><button><BiArrowBack/>BACK</button></Link>
            </div>

            <div class="addi">
           
                <h3>New Inventory</h3>
                <form>
                    <Container>
                        <Row>
                            <Col><label>Product</label>
                    <input type="text" placeholder="Product" name="product" onChange={this.onChange}/></Col>

                    <Col><label>Image</label>
                    <input type="file" name="img" onChange={this.fileSelectedHandler}/></Col>
                        </Row>
                        <Row>
                            <Col><label>Category</label>
                            <select name="category" onChange={this.onChange}>
                                <option value="">--Select a category--</option>
                                <option value="Fresh Food">Fresh Food</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                                <option value="Hot/Spicy">Hot&Spicy</option>
                            </select>
                    </Col>
                    <Col>
                    <label>Unit Cost Price</label>
                    <input type="number" name="unitcost" onChange={this.onChange} /></Col>
                        </Row>
                        <Row>
                            <Col><label>Unit of Measurement</label>
                            <select name="unitmeasure" onChange={this.onChange}>
                                <option value="">--Select a unit of measurement--</option>
                                <option value="kg">Kilograms(Kg)</option>
                                <option value="lb">Pounds(lb)</option>
                                <option value="ml">Millimetres</option>
                                <option value="bags">bags</option>  
                            </select>
                    </Col>
                    <Col>
                    <label>In Stock</label>
                    <input type="number" name="in_stock" onChange={this.onChange}/></Col>
                        </Row>
                        <Row>
                        <Col>
                    <label>Stock Limit</label>
                    <input type="number" name="limit" onChange={this.onChange}/></Col>
                            </Row>
                        <Row><button onClick={this.add}>Add</button></Row>   
                    </Container>  
                </form>

            </div>

  </div>

// next

  );
}
}

export default InventoryNPage;