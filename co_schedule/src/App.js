import React from 'react';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `Raleway`,
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
    <Navbar/>
    <LandingPage/>
    <Footer/>
    </ChakraProvider>
  );
}

export default App;
