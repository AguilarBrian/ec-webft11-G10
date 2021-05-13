import React from 'react';
import { Route } from "react-router-dom";
import { userContext } from './components/userContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/adminProduct/PageAddProduct'
import PageAddCategory from './pages/adminCategory/PageAddCategory'
import LandingPage from './pages/landingPage/LandingPage'
import Product from './components/Product/Product'
import { AdminProduct } from './components/admin/adminProduct/AdminProduct';
import PageEditProduct from './pages/adminProduct/PageEditProduct';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import ViewOrder from './components/admin/ViewOrder'
import CartProducts from './pages/cart/CartProducts'

function App() {
  return (
    <React.Fragment>
      <userContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
      <Route exact path='/cart' component={CartProducts} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route  path='/editProduct/:id' component={PageEditProduct} />
        <Route  path='/adminProduct' component={AdminProduct} />
        <Route path='/createProduct' component={PageAddProduct} />
        <Route path='/adminCategories' component={PageAddCategory} />
        <Route path='/PageCheckoutOrders' component={PageCheckoutOrders} />
        <Route path='/ViewOrder/:id' component={ViewOrder} />
        <Route path='/product/:id' component={Product} />
        </ThemeProvider>
      </userContext.Provider>
    </React.Fragment>
  );
}

export default App;
