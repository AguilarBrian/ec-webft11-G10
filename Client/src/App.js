import React from 'react';
import { Route } from "react-router-dom";
import { userContext } from './components/userContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/AddProduct/PageAddProduct'
import ProductCard from './components/ProductCard/ProductCard'
//import  UploadImage  from './components/UploadImage';

function App() {
  return (
    <React.Fragment>
      <userContext.Provider value={{}}>
        <Route exact path='/' component={Home} />
        <Route path='/createProduct' component={PageAddProduct} />
        <Route path='/productcard' component={ProductCard} />
      </userContext.Provider>
    </React.Fragment>
  );
}

export default App;
