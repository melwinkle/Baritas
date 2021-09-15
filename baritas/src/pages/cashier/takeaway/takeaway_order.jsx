import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';

/* We simply can use an array and loop and print each user */
class TakeawayPage extends React.Component {
  render() {
    return (
    <div class="process">
     
        <div class="proc">
        <Link to="/cashier/table/"><button class="porder" id="pickup">PICKUP</button> </Link>
        </div>

        <div class="proc">
        <Link to="/cashier/table/"><button class="porder" id="delivery">DELIVERY</button> </Link>
        </div>
        
      
    </div>
  );
}
};

export default TakeawayPage;