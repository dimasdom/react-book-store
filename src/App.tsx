import React from 'react';
import { Router } from '@reach/router';
import {Provider} from 'react-redux'
import Main from './components/main';
import state from "./bll/redux/state";

let App:React.FC = () =>{
  return(
      <Provider  store={state}>
      <div>
        <Router>
            <Main path={"/"}/>
        </Router>
      </div>
      </Provider>
  )
}

export default App;
