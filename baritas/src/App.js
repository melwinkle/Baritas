
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./index.jsx";
import UsersPage from "./pages/cashier/orders/process_order.jsx";
import TablePage from "./pages/cashier/table/table_map.jsx";
import TakeawayPage from "./pages/cashier/takeaway/takeaway_order.jsx";
import WaiterPage from "./pages/cashier/waiter/waiter.jsx";
import MenuPage from "./pages/cashier/menu/menu_main.jsx";
import OrderPage from "./pages/cashier/kitchen_view/order_main.jsx";
import OrderCPage from "./pages/cashier/kitchen_view/kitchen_complete/order_complete.jsx";
import BarPage from "./pages/bar/bar_main.jsx";
import BarCPage from "./pages/bar/bar_complete/bar_complete.jsx";
import KitchenPage from "./pages/kitchen/kitchen_main.jsx";
import KitchenCPage from "./pages/kitchen/kitchen_complete/kitchen_complete.jsx";
import AdminPage from "./pages/administrator/administrator_home.jsx";
class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={MainPage} />
       <Route exact path="/cashier/orders" component={UsersPage} />
       <Route exact path="/cashier/table" component={TablePage} />
       <Route exact path="/cashier/takeaway" component={TakeawayPage} />
       <Route exact path="/cashier/waiter" component={WaiterPage} />
       <Route exact path="/cashier/menu" component={MenuPage} />
       <Route exact path="/cashier/kitchen_view" component={OrderPage} />
       <Route exact path="/cashier/kitchen_view/kitchen_complete" component={OrderCPage} />
       <Route exact path="/bar" component={BarPage} />
       <Route exact path="/bar/bar_complete" component={BarCPage} />
       <Route exact path="/kitchen" component={KitchenPage} />
       <Route exact path="/kitchen/kitchen_complete" component={KitchenCPage} />
       <Route exact path="/administrator" component={AdminPage} />
      </Router>
    );
  }
}

export default App;