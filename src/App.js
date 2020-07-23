import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar.js';
import Logs from './components/logs/Logs.js';
import AddBtn from './components/layout/AddBtn.js';
import AddLogModal from './components/logs/AddLogModal.js';

const App=()=> {

  useEffect(()=>{
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <Logs />
        </div>
    </Fragment>
  );
}

export default App;
