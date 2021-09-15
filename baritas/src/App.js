
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
      </Router>
    );
  }
}

export default App;