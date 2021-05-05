import React from 'react';
import { Route } from "react-router-dom";
//import { userContext } from './components/userContext';
import { Home } from './pages/Home';
//import  UploadImage  from './components/UploadImage';

function App() {
  return (
    <React.Fragment>
      {/* <userContext.Provider value={{}}> */}
        <Route exact path='/' component={Home} />
      {/* </userContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
