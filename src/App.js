import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

const App = () => {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Alumnos - CRUD</h2>
        <div>
          <Route path="/create" exact>
            <Create />
          </Route>
        </div>
        <div>
          <Route path="/read" exact>
            <Read />
          </Route>
        </div>

        <Route path="/update" exact>
          <Update />
        </Route>
      </div>
    </Router>
  );
};
export default App;
