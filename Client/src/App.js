import React from 'react';
import { Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/adminProduct/PageAddProduct'
import PageAdminCategory from './pages/adminCategory/PageAddCategory'
import LogIn from './pages/landingPage/LandingPage'
import Product from './components/Product/Product'
import { AdminProduct } from './components/admin/adminProduct/AdminProduct';
import PageEditProduct from './pages/adminProduct/PageEditProduct';
import PageEditCategories from './pages/adminCategory/PageEditCategories';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import ViewOrder from './components/admin/ViewOrder'
import CartProducts from './pages/cart/CartProducts'

function App() {
  return (
    <React.Fragment>
      <AuthProvider>

        <ThemeProvider theme={theme}>
          <Route exact path='/cart' component={CartProducts} />
          <Route exact path='/logIn' component={LogIn} />
          <Route exact path='/' component={Home} />
          <Route path='/editProduct/:id' component={PageEditProduct} />
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
