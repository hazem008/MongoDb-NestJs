import React from "react";
import Navbar1 from "./components/Navbar1";
import SignUpCart from "./components/SignUpCart";
import Login from "./components/Login";
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signUp" >
            <SignUpCart />
          </Route>
          <Route path="/home" >
            <Navbar1 />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>

  );
}

export default App;
