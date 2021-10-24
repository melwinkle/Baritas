import React from 'react';
import "../../../App.css";
import DataTable from './component/DataTable';
import data from './Table/data';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";

 class AdminMenuPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
              { title: "#", data: "#" },
              { title: "Name", data: "name" },
              { title: "Category", data: "category" },
              { title: "Price", data: "price" },
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
                 <Link to="/administrator/menu/"><button><FaHome/></button></Link>
                <button><FiLogOut /></button> 
            </div>

          
          
          <div class="menutab">
          <Link to="/administrator/mainmenu/new/" ><button class="addmenu">Add New +</button></Link>
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

export default AdminMenuPage;




