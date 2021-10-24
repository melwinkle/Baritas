import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut,FiPlus} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import DataTable from './component/DataTable';
import data from './Table/data';


// import { Container, Row, Col } from 'reactstrap';


/* We simply can use an array and loop and print each user */
class InventoryPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            columns: [
              { title: "#", data: "#" },
              { title: "Product", data: "name" },
              { title: "Category", data: "category" },
              { title: "Unit Price", data: "price" },
              { title: "In Stock", data: "stock" },
              { title: "Actions", data: "actions" }
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
            },
           
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
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>


           
          
          

          
          <div class="menutab">
          <Link to="/administrator/inventory/new/" ><button class="addmenu">Add New <FiPlus/></button></Link>
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
        );
    }
}

export default InventoryPage;