import React from 'react';
import { Route } from "react-router-dom";
import { userContext } from './components/userContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/adminProduct/PageAddProduct'
import PageAdminCategory from './pages/adminCategory/PageAdminCategory'
import LandingPage from './pages/landingPage/LandingPage'
<<<<<<< HEAD
// import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import Product from './components/Product/Product'
=======
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import Product from './pages/ProductDetail'
>>>>>>> a830f56f64a6eddb56ca8ba1ca9cf5c59df88150
import { AdminProduct } from './components/admin/AdminProduct';
import EditProduct from './pages/adminProduct/EditProduct';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'
<<<<<<< HEAD
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import ViewOrder from './components/admin/ViewOrder'

=======
import CartProducts  from './pages/CartProducts';
>>>>>>> a830f56f64a6eddb56ca8ba1ca9cf5c59df88150
function App() {
  return (
    <React.Fragment>
      <userContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
      <Route exact path='/cart' component={CartProducts} />

        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route  path='/editProduct/:id' component={EditProduct} />
        <Route  path='/adminProduct' component={AdminProduct} />
        <Route path='/createProduct' component={PageAddProduct} />
        <Route path='/adminCategories' component={PageAdminCategory} />
        <Route path='/PageCheckoutOrders' component={PageCheckoutOrders} />
        <Route path='/ViewOrder' component={ViewOrder} />
        <Route path='/product/:id' component={Product} />
        </ThemeProvider>
      </userContext.Provider>
    </React.Fragment>
  );
}

export default App;
