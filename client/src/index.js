import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Wrapper from './context/GlobalWrapper';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import Navbar1 from './components/Navbar1';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Wrapper>
        < Navbar1/>
          <App />
      </Wrapper>
    </BrowserRouter>
  </ChakraProvider>
);
