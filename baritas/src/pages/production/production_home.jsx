import React from "react";
import '../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt} from "react-icons/fa";
import DataTable from './component/DataTable';
import data from './Table/data';

import { Container, Row, Col } from 'reactstrap';
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
class ProductionPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            columns: [
              { title: "#", data: "#" },
              { title: "Product", data: "name" },
              { title: "Category", data: "category" },
              { title: "In Stock", data: "price" },
              { title: "Price", data: "stock" },
              { title: "Actions", data: "actions" },
            ],
            searchValue: '',
            options: {
                dom: 'lrtip',
                // paging: false,
                // scrollX: true,
                // scrollY: '100%',
                // scrollCollapse: false,
                // autoWidth: false,
                // info: false,
            }
        };
        this.dataTableRef = React.createRef();
    }

    onChangeSearch = (e) => {
        const { value } = e.target;
        const searchValue = value;
        this.setState({ searchValue });
        this.dataTableRef.current.search(searchValue);
    };
  render() { 
    const {
        columns,
        options,
        searchValue
    } = this.state;
    return (
        
        <div class="proda">
            <div class="accor">
          
                <Container>
                    <Row>
                        <Col><Link to="/production/production_home"> <button><FaHome/></button></Link></Col>
                        <Col> <Link to="/production/alert/"><button><FaBell /></button> </Link></Col>
                        <Col> <Link to="/production/transact/production_transact"><button><FaStoreAlt /></button></Link> </Col>
                        <Col> <Link to="/"><button><FiLogOut /></button> </Link></Col>
                    </Row>
                </Container>
        
               
               
            </div>
        
         
            
  
   
            <div class="menutab">
            <Link to="/production/new/" ><button class="addmenu">Add New +</button></Link>
            <input
                value={searchValue}
                onChange={this.onChangeSearch}
                autoComplete={'off'}
                type="text"
                placeholder="Search ..."
                class="searchbar"
            />
            <DataTable
                ref={this.dataTableRef}
                data={data}
                columns={columns}
                options={options}
            />
          </div>
            
        </div>

  

// next

  );
}
}

export default ProductionPage;