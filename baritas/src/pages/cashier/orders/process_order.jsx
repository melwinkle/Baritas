import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';

/* We simply can use an array and loop and print each user */
class UsersPage extends React.Component {
 
  render() {
    return (
    <div class="process">
     
        <div class="proc">
          <Link to="/cashier/table/"><button class="porder" id="dinein" >DINE-IN</button></Link>
        </div>

        <div class="proc">
          <Link to="/cashier/takeaway/"><button class="porder" id="takeaway" >TAKEAWAY</button></Link>
        </div>
        
      
    </div>
  );
}
};

export default UsersPage;