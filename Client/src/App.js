import React from 'react';
import { Route } from "react-router-dom";
import { AuthProvider } from './components/authContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/adminProduct/PageAddProduct'
import PageAdminCategory from './pages/adminCategory/PageAdminCategory'
import LogIn from './pages/landingPage/LandingPage'
import Product from './components/Product/Product'
import { AdminProduct } from './components/admin/AdminProduct';
import EditProduct from './pages/adminProduct/EditProduct';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import ViewOrder from './components/admin/ViewOrder'
import CartProducts from './pages/CartProducts'

function App() {
  return (
    <React.Fragment>
      <AuthProvider>

        <ThemeProvider theme={theme}>
          <Route exact path='/cart' component={CartProducts} />
          <Route exact path='/' component={LogIn} />
          <Route exact path='/home' component={Home} />
          <Route path='/editProduct/:id' component={EditProduct} />
          <Route path='/adminProduct' component={AdminProduct} />
          <Route path='/createProduct' component={PageAddProduct} />
          <Route path='/adminCategories' component={PageAdminCategory} />
          <Route path='/PageCheckoutOrders' component={PageCheckoutOrders} />
          <Route path='/ViewOrder/:id' component={ViewOrder} />
          <Route path='/product/:id' component={Product} />
        </ThemeProvider>
      </AuthProvider>
    </React.Fragment >
  );
}

export default App;
