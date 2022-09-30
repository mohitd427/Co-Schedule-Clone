import React from 'react';
import "./style.css";

import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import AllRoutes from './Pages/AllRoutes';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>

  
    <AllRoutes/>
 
    </ChakraProvider>
  );
}

export default App;
