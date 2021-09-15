import React from "react";
import '../../../App.css';
import { Link } from 'react-router-dom';

/* We simply can use an array and loop and print each user */
class WaiterPage extends React.Component {
  render() {
    return (
        <div class="waitermap">
                <div class="wmap">
                <div class="mapwait">
                    <Link to="/cashier/menu/"><button class="waitnum" id="w1" >Waiter 1</button></Link>
                    </div>
                    <div class="mapwait">
                    <Link to="/cashier/menu/"><button class="waitnum" id="w2" >Waiter 2</button></Link>
                    </div>
                    <div class="mapwait">
                    <Link to="/cashier/menu/"><button class="waitnum" id="w3" >Waiter 3</button></Link>
                    </div>
                    <div class="mapwait">
                    <Link to="/cashier/menu/"><button class="waitnum" id="w4" >Waiter 4</button></Link>
                    </div>
                    <div class="mapwait">
                    <Link to="/cashier/menu/"><button class="waitnum" id="w5" >Waiter 5</button></Link>
                    </div>
                </div>

                
        

                
               

            

            </div>

  

// next

  );
}
};

export default WaiterPage;