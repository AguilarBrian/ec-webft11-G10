import React from 'react';
import { Route } from "react-router-dom";
import { userContext } from './components/userContext';
import { Home } from './pages/Home';
import PageAddProduct from './pages/addProduct/PageAddProduct'
import PageAddCategory from './pages/addCategory/PageAddCategory'
//import  UploadImage  from './components/UploadImage';

function App() {
  return (
    <React.Fragment>
      <userContext.Provider value={{}}>
        {/* <Route exact path='/' component={LandingPage} /> */}
        <Route exact path='/' component={Home} />
        <Route path='/createProduct' component={PageAddProduct} />
        <Route path='/createCategory' component={PageAddCategory} />
      </userContext.Provider>
    </React.Fragment>
  );
}

export default App;
