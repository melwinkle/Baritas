import React from "react";
import '../../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import DataTable from '../../orders/component/DataTable';
import data from '../../orders/Table/data';
import { Container, Row, Col } from 'reactstrap';


/* We simply can use an array and loop and print each user */
class AdminFInventoryPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            columns: [
              { title: "#", data: "#" },
              { title: "Product", data: "name" },
              { title: "Category", data: "category" },
              { title: "Unit Price", data: "price" },
              { title: "Income/Expense", data: "stock" }
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

          
            <div class="optprod">
                <Container>
                    <Row>
                        <Col>  <Link to="/administrator/finances/"><button class="o1">GENERAL</button></Link></Col>
                        <Col> <Link to="/administrator/finances/order/"><button class="o1">ORDERS</button></Link></Col>
                        <Col>  <Link to="/administrator/finances/inventory/"><button class="o1 ac ">INVENTORY</button></Link></Col>
                        <Col> <Link to="/administrator/finances/menu/"><button class="o1">MENU</button></Link>  </Col>
                    </Row>
                </Container>
            </div>
          <div class="menutab">
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

export default AdminFInventoryPage;