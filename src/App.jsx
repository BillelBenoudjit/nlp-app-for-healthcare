import React from 'react'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Ner from "./pages/NER/Ner"
import Sts from "./pages/STS/Sts"


function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#fff",
        color: "#000"
      }}
    >
      <BrowserRouter>
        <Switch>
          {/* NER Route */}
          <Route exact path="/ner">
            <Ner />
          </Route>
          {/* STS Route */}
          <Route exact path="/sts">
            <Sts />
          </Route>
        </Switch>
      </BrowserRouter >
    </div >
  );
}

export default App;
