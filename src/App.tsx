import React from 'react';
import { Router } from '@reach/router';
import Main from './components/main';

let App:React.FC = () =>{
  return(
      <div>
        <Router>
            <Main path={"/"}/>
        </Router>
      </div>
  )
}

export default App;
