import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Chat from "./pages/chat";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/chat" component={Chat} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
