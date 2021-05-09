import React from 'react';
import { Route } from "react-router-dom";
import { userContext } from './components/userContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/adminProduct/PageAddProduct'
import PageAdminCategory from './pages/adminCategory/PageAdminCategory'
import LandingPage from './pages/landingPage/LandingPage'
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import Product from './components/product/Product'
import { AdminProduct } from './components/admin/AdminProduct';
import EditProduct from './pages/adminProduct/EditProduct';

function App() {
  return (
    <React.Fragment>
      <userContext.Provider value={{}}>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route  path='/editProduct/:id' component={EditProduct} />
        <Route  path='/adminProduct' component={AdminProduct} />
        <Route path='/createProduct' component={PageAddProduct} />
        <Route path='/adminCategories' component={PageAdminCategory} />
        <Route path='/ordersView' component={PageCheckoutOrders} />
        <Route path='/product/:id' component={Product} />
      </userContext.Provider>
    </React.Fragment>
  );
}

export default App;
