import React from 'react';
import { Route } from "react-router-dom";
import { userContext } from './components/userContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/addProduct/PageAddProduct'
import PageAddCategory from './pages/addCategory/PageAddCategory'
import LandingPage from './pages/landingPage/LandingPage'
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import Product from './components/product/Product'
//import  UploadImage  from './components/UploadImage';

function App() {
  return (
    <React.Fragment>
      <userContext.Provider value={{}}>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Home' component={Home} />
        <Route path='/createProduct' component={PageAddProduct} />
        <Route path='/createCategory' component={PageAddCategory} />
        <Route path='/OrdersView' component={PageCheckoutOrders} />
        <Route path='/product/:id' component={Product} />
      </userContext.Provider>
    </React.Fragment>
  );
}

export default App;
