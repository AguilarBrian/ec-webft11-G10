import React from 'react';
import { Route } from "react-router-dom";
import { userContext } from './components/userContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/addProduct/PageAddProduct'
import ProductCard from './components/productCard/ProductCard'
import PageAddCategory from './pages/addCategory/PageAddCategory'
import LandingPage from './pages/landingPage/LandingPage'
//import  UploadImage  from './components/UploadImage';

function App() {
  return (
    <React.Fragment>
      <userContext.Provider value={{}}>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route path='/createProduct' component={PageAddProduct} />
        <Route path='/productcard' component={ProductCard} />
        <Route path='/createCategory' component={PageAddCategory} />
      </userContext.Provider>
    </React.Fragment>
  );
}

export default App;
