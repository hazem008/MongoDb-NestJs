import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route } from "react-router-dom";
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
      <Route  component={Login} />
      <Route path="/signUp" component={SignUp} />
      </Routes>
    </QueryClientProvider>

  );
}

export default App;
