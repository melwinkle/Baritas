
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./index.jsx";
import CashierOrders from "./pages/cashier/order_main/cashier_main.jsx";
import CashierOrdersC from "./pages/cashier/order_complete/cashier_complete.jsx";
import CashierNew from "./pages/cashier/new/cashier_new.jsx";
import CashierEdit from "./pages/cashier/newtest/cashier_new.jsx";
import CashierTable from "./pages/cashier/table/table_map.jsx";
import UsersPage from "./pages/cashier/orders/process_order.jsx";
import TablePage from "./pages/cashier/table/table_map.jsx";
import TakeawayPage from "./pages/cashier/takeaway/takeaway_order.jsx";
import WaiterPage from "./pages/cashier/waiter/waiter.jsx";
import MenuMPage from "./pages/cashier/menu/menu.jsx";
import MenuPage from "./pages/cashier/menu/menu_select/menu_main.jsx";
import OrderPage from "./pages/cashier/kitchen_view/order_main.jsx";
import OrderCPage from "./pages/cashier/kitchen_view/kitchen_complete/order_complete.jsx";
import BarPage from "./pages/bar/bar_main.jsx";
import BarVPage from "./pages/bar/view/bar_single.jsx";
import BarCPage from "./pages/bar/bar_complete/bar_complete.jsx";
import KitchenPage from "./pages/kitchen/kitchen_main.jsx";
import KitchenVPage from "./pages/kitchen/single/kitchen_view.jsx";
import KitchenCPage from "./pages/kitchen/kitchen_complete/kitchen_complete.jsx";
import AdminPage from "./pages/administrator/administrator_home.jsx";
import AdminMPage from "./pages/administrator/menu/admin_menu.jsx";
import InventoryPage from "./pages/administrator/inventory/administrator_inventory.jsx";
import InventoryNPage from "./pages/administrator/inventory/new/admin_inventory_new.jsx";
import InventoryVPage from "./pages/administrator/inventory/view/admin_inventory_view.jsx";
import EditInventory from "./pages/administrator/inventory/update/admin_inventory_update.jsx";
import AdminMenuPage from "./pages/administrator/mainmenu/administrator_menu.jsx";
import AdminMenuNPage from "./pages/administrator/mainmenu/new/administrator_new.jsx";
import AdminMenuVPage from "./pages/administrator/mainmenu/view/administrator_menu_view.jsx";
import AdminOrderPage from "./pages/administrator/orders/date/administrator_order_date.jsx";
import OrderMainPage from "./pages/administrator/orders/administrator_order.jsx";
import AOrderViewPage from "./pages/administrator/orders/view/administrator_order_view.jsx";
import AProductionPage from "./pages/administrator/production/administrator_production.jsx";
import AIProductionPage from "./pages/administrator/production/invoice/administrator_production.jsx";
import AdminProductionPage from "./pages/administrator/production/general/administrator_production.jsx";
import AdminFinancePage from "./pages/administrator/finances/administrator_finances.jsx";
import AdminFOrderPage from "./pages/administrator/finances/order/administrator_forders.jsx";
import CategoryView from "./pages/administrator/category/view/category_view.jsx";
import Employee from "./pages/administrator/employee/admin_employee.jsx";
import EmployeeNew from "./pages/administrator/employee/add/admin_employee_add.jsx";
import EmployeeUpdate from "./pages/administrator/employee/update/admin_employee_update.jsx";
import EmployeeWUpdate from "./pages/administrator/employee/waiter/admin_employee-update.jsx";
import CategoryNew from "./pages/administrator/category/category_add.jsx";
import EditCategory from "./pages/administrator/category/update/category_update.jsx";
import AdminFInventoryPage from "./pages/administrator/finances/inventory/administrator_finventory.jsx";
import AdminFMenuPage from "./pages/administrator/finances/menu/administrator_fmenu.jsx";
import ProductionPage from "./pages/production/production_home.jsx";
import ProductionUPage from "./pages/production/update/production_update.jsx";
import ProductionNPage from "./pages/production/new/production_new.jsx";
import ProductionAPage from "./pages/production/alert/archive/production_alert_archive.jsx";
import ProductionALPage from "./pages/production/alert/production_alert.jsx";
import ProductionTPage from "./pages/production/transact/view/production_transact.jsx";
import ProductionHPage from "./pages/production/transact/product_transact.jsx";
import ProductionIPage from "./pages/production/transact/invoice/production_transact_invoice.jsx";
import BranchInvent from "./pages/branch_manager/inventory/bmanage_inventory.jsx";
import BInventoryView from "./pages/branch_manager/inventory/view/bmanager_view.jsx";
import BranchFinancePage from "./pages/branch_manager/finances/bmanager_finance.jsx";
import BOrderPage from "./pages/branch_manager/orders/bmanage_order.jsx";
import BOrderViewPage from "./pages/branch_manager/orders/single/border_view.jsx";
import BProductionPage from "./pages/branch_manager/production/bmanager_production.jsx";
import BProductPage from "./pages/branch_manager/production/general/administrator_production_g.jsx";
import BEmployee from "./pages/branch_manager/employee/admin_employee.jsx";
import BEmployeeUpdate from "./pages/branch_manager/employee/update/admin_employee_update.jsx";
import BEmployeeWUpdate from "./pages/branch_manager/employee/waiter/admin_employee-update.jsx";
import BInvoicePage from "./pages/branch_manager/production/invoice/general_invoice.jsx";
import GeneralMPage from "./pages/general_manager/general_home.jsx";
import GMFinancePage from "./pages/general_manager/finances/gm_finances.jsx";
import GFinancePage from "./pages/general_manager/finances/inventory/administrator_finventory.jsx";
import GMInventoryPage from "./pages/general_manager/inventory/gm_inventory.jsx";
import GMInventoryView from "./pages/general_manager/inventory/view/gm_inventory_view.jsx";
import GMFinanceVPage from "./pages/general_manager/finances/view/gm_finance_view.jsx";
import GMOrderPage from "./pages/general_manager/orders/gm_order.jsx";
import GOrderViewPage from "./pages/general_manager/orders/single/gorderview.jsx";
import GOrderVPage from "./pages/general_manager/orders/view/administrator_order_view.jsx";
import BOrderVPage from "./pages/branch_manager/orders/view/administrator_order_view.jsx";
import GMProductionPage from "./pages/general_manager/production/gm_production.jsx";
import GProductPage from "./pages/general_manager/production/general/administrator_production_g.jsx";
import GEmployee from "./pages/general_manager/employee/admin_employee.jsx";
import GInvoicePage from "./pages/general_manager/production/invoice/general_invoice.jsx";
import ProductionANPage from "./pages/production/add/production_add.jsx";
import ProductionNTPage from "./pages/production/transact/tracking/production_transact_tracking.jsx";

import ProductionGPage from "./pages/administrator/production_g/production_home.jsx";
import ProductionGTPage from "./pages/administrator/production_g/transact/view/production_transact.jsx";
import ProductionGHPage from "./pages/administrator/production_g/transact/product_transact.jsx";
import ProductionGIPage from "./pages/administrator/production_g/transact/invoice/production_transact_invoice.jsx";


import StorePage from "./pages/store/store_home.jsx";
import StoreNPage from "./pages/store/add/store_add.jsx";
import StoreUPage from "./pages/store/update/store_update.jsx";


import Reports from "./pages/administrator/reports/reports.jsx";
class App extends Component {
  render() {
 
   
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={MainPage} />
       <Route exact path="/cashier/order_main" component={CashierOrders} />
       <Route exact path="/cashier/order_complete" component={CashierOrdersC} />
       <Route exact path="/cashier/new/:id/:table" component={CashierNew} />
       <Route exact path="/cashier/newtest/:id" component={CashierEdit} />
       <Route exact path="/cashier/orders" component={UsersPage} />
       <Route exact path="/cashier/table" component={CashierTable} />
       <Route exact path="/cashier/takeaway" component={TakeawayPage} />
       <Route exact path="/cashier/waiter" component={WaiterPage} />
       <Route exact path="/cashier/menu" component={MenuMPage} />
       <Route exact path="/cashier/menu/menu_select" component={MenuPage} />
       <Route exact path="/cashier/kitchen_view" component={OrderPage} />
       <Route exact path="/cashier/kitchen_view/kitchen_complete" component={OrderCPage} />
       <Route exact path="/bar" component={BarPage} />
       <Route exact path="/bar/view/:id" component={BarVPage} />
       <Route exact path="/bar/bar_complete" component={BarCPage} />
       <Route exact path="/kitchen" component={KitchenPage} />
       <Route exact path="/kitchen/single/:id" component={KitchenVPage} />
       <Route exact path="/kitchen/kitchen_complete" component={KitchenCPage} />
       <Route exact path="/administrator" component={AdminPage} />
       <Route exact path="/administrator/menu/" component={AdminMPage} />
       <Route exact path="/administrator/inventory/" component={InventoryPage} />
       <Route exact path="/administrator/inventory/new" component={InventoryNPage} />
       <Route exact path="/administrator/inventory/view/:id" component={InventoryVPage} />
       <Route exact path="/administrator/inventory/update/:id" component={EditInventory} />
       <Route exact path="/administrator/mainmenu" component={AdminMenuPage} />
       <Route exact path="/administrator/mainmenu/new" component={AdminMenuNPage} />
       <Route exact path="/administrator/mainmenu/view/:id" component={AdminMenuVPage} />
       <Route exact path="/administrator/orders" component={OrderMainPage} />
       <Route exact path="/administrator/orders/date/:date" component={AdminOrderPage} />
       <Route exact path="/administrator/orders/view/:id" component={AOrderViewPage} />
       <Route exact path="/administrator/production/" component={AProductionPage} />
       <Route exact path="/administrator/production/general/:date" component={AdminProductionPage} />
       <Route exact path="/administrator/production/invoice/:id" component={AIProductionPage} />
       <Route exact path="/administrator/finances" component={AdminFinancePage} />
       <Route exact path="/administrator/category/view" component={CategoryView} />
       <Route exact path="/administrator/category/update/:id" component={EditCategory} />
       <Route exact path="/administrator/category/" component={CategoryNew} />
       <Route exact path="/administrator/finances/order" component={AdminFOrderPage}/>
       <Route exact path="/administrator/finances/inventory" component={AdminFInventoryPage} />
       <Route exact path="/administrator/finances/menu" component={AdminFMenuPage} />
       <Route exact path="/administrator/employee/" component={Employee} />
       <Route exact path="/administrator/employee/add/" component={EmployeeNew} />
       <Route exact path="/administrator/employee/update/:id" component={EmployeeUpdate} />
       <Route exact path="/administrator/employee/waiter/:id" component={EmployeeWUpdate} />
       <Route exact path="/production" component={ProductionPage} />
       <Route exact path="/production/update/:id" component={ProductionUPage} />
       <Route exact path="/production/new" component={ProductionNPage} />
       <Route exact path="/production/transact/tracking/:id" component={ProductionNTPage} />
       <Route exact path="/production/transact/invoice/:id" component={ProductionIPage} />
       <Route exact path="/production/alert/archive" component={ProductionAPage} />
       <Route exact path="/production/alert" component={ProductionALPage} />
       <Route exact path="/production/transact/view/:date" component={ProductionTPage} />
       <Route exact path="/production/transact/" component={ProductionHPage} />
       <Route exact path="/production/add" component={ProductionANPage} />
       <Route exact path="/branch_manager/inventory" component={BranchInvent} />
       <Route exact path="/branch_manager/inventory/view/:id" component={BInventoryView} />
       <Route exact path="/branch_manager/finances" component={BranchFinancePage} />
       <Route exact path="/branch_manager/orders" component={BOrderPage} />
       <Route exact path="/branch_manager/employee" component={BEmployee} />
       <Route exact path="/branch_manager/employee/update/:id" component={BEmployeeUpdate} />
       <Route exact path="/branch_manager/employee/waiter/:id" component={BEmployeeWUpdate} />
       <Route exact path="/branch_manager/orders/view/:date" component={BOrderVPage} />
       <Route exact path="/branch_manager/orders/single/:id" component={BOrderViewPage} />
       <Route exact path="/branch_manager/production" component={BProductionPage} />
       <Route exact path="/branch_manager/production/general/:date" component={BProductPage} />
       <Route exact path="/branch_manager/production/invoice/:id" component={BInvoicePage} />
       <Route exact path="/general_manager" component={GeneralMPage} />
       <Route exact path="/general_manager/finances" component={GMFinancePage} />
       <Route exact path="/general_manager/finances/inventory/" component={GFinancePage} />
       <Route exact path="/general_manager/inventory" component={GMInventoryPage} />
       <Route exact path="/general_manager/inventory/view/:id" component={GMInventoryView} />
       <Route exact path="/general_manager/finances/view" component={GMFinanceVPage} />
       <Route exact path="/general_manager/orders/" component={GMOrderPage} />
       <Route exact path="/general_manager/employee/" component={GEmployee} />
       <Route exact path="/general_manager/orders/view/:date" component={GOrderVPage} />
       <Route exact path="/general_manager/orders/single/:id" component={GOrderViewPage} />
       <Route exact path="/general_manager/production" component={GMProductionPage} />
       <Route exact path="/general_manager/production/general/:date" component={GProductPage} />
       <Route exact path="/general_manager/production/invoice/:id" component={GInvoicePage} />
       <Route exact path="/administrator/production_g" component={ProductionGPage} />

       <Route exact path="/administrator/production_g/transact/invoice/:id" component={ProductionGIPage} />
       <Route exact path="/administrator/production_g/transact/view/:date" component={ProductionGTPage} />
       <Route exact path="/administrator/production_g/transact/" component={ProductionGHPage} />


       <Route exact path="/administrator/reports/" component={Reports} />
       <Route exact path="/store/" component={StorePage} />
       <Route exact path="/store/add/" component={StoreNPage} />
       <Route exact path="/store/update/:id" component={StoreUPage} />
   
      </Router>
    );
  }
}

export default App;