
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
import MenuMPage from "./pages/cashier/menu/menu.jsx";
import MenuPage from "./pages/cashier/menu/menu_select/menu_main.jsx";
import OrderPage from "./pages/cashier/kitchen_view/order_main.jsx";
import OrderCPage from "./pages/cashier/kitchen_view/kitchen_complete/order_complete.jsx";
import BarPage from "./pages/bar/bar_main.jsx";
import BarCPage from "./pages/bar/bar_complete/bar_complete.jsx";
import KitchenPage from "./pages/kitchen/kitchen_main.jsx";
import KitchenCPage from "./pages/kitchen/kitchen_complete/kitchen_complete.jsx";
import AdminPage from "./pages/administrator/administrator_home.jsx";
import AdminMPage from "./pages/administrator/menu/admin_menu.jsx";
import InventoryPage from "./pages/administrator/inventory/administrator_inventory.jsx";
import InventoryNPage from "./pages/administrator/inventory/new/admin_inventory_new.jsx";
import InventoryVPage from "./pages/administrator/inventory/view/admin_inventory_view.jsx";
import AdminMenuPage from "./pages/administrator/mainmenu/administrator_menu.jsx";
import AdminMenuNPage from "./pages/administrator/mainmenu/new/administrator_new.jsx";
import AdminMenuVPage from "./pages/administrator/mainmenu/view/administrator_menu_view.jsx";
import AdminOrderPage from "./pages/administrator/orders/administrator_order.jsx";
import AdminOrderVPage from "./pages/administrator/orders/view/administrator_order_view.jsx";
import AdminProductionPage from "./pages/administrator/production/administrator_production.jsx";
import AdminProductionGPage from "./pages/administrator/production/general/administrator_production_g.jsx";
import AdminFinancePage from "./pages/administrator/finances/administrator_finances.jsx";
import AdminFOrderPage from "./pages/administrator/finances/order/administrator_forders.jsx";
import AdminFInventoryPage from "./pages/administrator/finances/inventory/administrator_finventory.jsx";
import AdminFMenuPage from "./pages/administrator/finances/menu/administrator_fmenu.jsx";
import ProductionPage from "./pages/production/production_home.jsx";
import ProductionUPage from "./pages/production/update/production_update.jsx";
import ProductionNPage from "./pages/production/new/production_new.jsx";
import ProductionAPage from "./pages/production/alert/archive/production_alert_archive.jsx";
import ProductionALPage from "./pages/production/alert/production_alert.jsx";
import ProductionTPage from "./pages/production/transact/production_transact.jsx";
import ProductionIPage from "./pages/production/transact/invoice/production_transact_invoice.jsx";
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
       <Route exact path="/cashier/menu" component={MenuMPage} />
       <Route exact path="/cashier/menu/menu_select" component={MenuPage} />
       <Route exact path="/cashier/kitchen_view" component={OrderPage} />
       <Route exact path="/cashier/kitchen_view/kitchen_complete" component={OrderCPage} />
       <Route exact path="/bar" component={BarPage} />
       <Route exact path="/bar/bar_complete" component={BarCPage} />
       <Route exact path="/kitchen" component={KitchenPage} />
       <Route exact path="/kitchen/kitchen_complete" component={KitchenCPage} />
       <Route exact path="/administrator" component={AdminPage} />
       <Route exact path="/administrator/menu/" component={AdminMPage} />
       <Route exact path="/administrator/inventory" component={InventoryPage} />
       <Route exact path="/administrator/inventory/new" component={InventoryNPage} />
       <Route exact path="/administrator/inventory/view/:id" component={InventoryVPage} />
       <Route exact path="/administrator/mainmenu" component={AdminMenuPage} />
       <Route exact path="/administrator/mainmenu/new" component={AdminMenuNPage} />
       <Route exact path="/administrator/mainmenu/view" component={AdminMenuVPage} />
       <Route exact path="/administrator/orders" component={AdminOrderPage} />
       <Route exact path="/administrator/orders/view" component={AdminOrderVPage} />
       <Route exact path="/administrator/production" component={AdminProductionPage} />
       <Route exact path="/administrator/production/general" component={AdminProductionGPage} />
       <Route exact path="/administrator/finances" component={AdminFinancePage} />
       <Route exact path="/administrator/finances/order" component={AdminFOrderPage}/>
       <Route exact path="/administrator/finances/inventory" component={AdminFInventoryPage} />
       <Route exact path="/administrator/finances/menu" component={AdminFMenuPage} />
       <Route exact path="/production" component={ProductionPage} />
       <Route exact path="/production/update" component={ProductionUPage} />
       <Route exact path="/production/new" component={ProductionNPage} />
       <Route exact path="/production/alert/archive" component={ProductionAPage} />
       <Route exact path="/production/alert" component={ProductionALPage} />
       <Route exact path="/production/transact" component={ProductionTPage} />
       <Route exact path="/production/transact/invoice" component={ProductionIPage} />
   
      </Router>
    );
  }
}

export default App;