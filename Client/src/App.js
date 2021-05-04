import React, {useState} from 'react';
import { Route } from "react-router-dom";
//import { userContext } from './components/userContext';
import Home from './components/AppBar'

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
