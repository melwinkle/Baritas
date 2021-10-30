import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';
import {FiLogOut} from "react-icons/fi";
import {FaHome,FaBell,FaStoreAlt} from "react-icons/fa";
import DataTable from '../component/DataTable';
import data from '../Table/data';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
import { Container, Row, Col } from 'reactstrap';
// get data fron the procution folder 

/* We simply can use an array and loop and print each user */
class ProductionTPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            columns: [
              { title: "#", data: "#" },
              { title: "Date", data: "name" },
              { title: "Message", data: "category" },
              { title: "Branch", data: "price" },
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
        
        <Container id="menurr">
            <Row >
            <Link to="/production/new/" ><button class="addmenu">New Invoice +</button></Link>
            </Row>

            <Row id="menutab">
            <div class="menutab">
            <input
                value={searchValue}
                onChange={this.onChangeSearch}
                autoComplete={'off'}
                type="text"
                placeholder="Search ..."
                class="searchbars"
            />
            <DataTable
                ref={this.dataTableRef}
                data={data}
                columns={columns}
                options={options}
            />
          </div>
            </Row>
        </Container>
            
            
  
   
          
            
        </div>

  

// next

  );
}
}

export default ProductionTPage;