import React from "react";
import HomeLayouts from "./components/layouts/HomeLayouts/HomeLayouts";
import { BrowserRouter as Router, Route } from "react-router-dom";

const home = () => (
  <HomeLayouts>
    <h1>This is my home page</h1>
  </HomeLayouts>
);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={home} />
      </Router>
    </React.Fragment>
  );
}

export default App;
