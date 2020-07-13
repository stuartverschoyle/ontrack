import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import BookList from './components/bookList'

const App = () =>{
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={BookList} />
    </Switch>
    </Router>
  );
}

export default App;
