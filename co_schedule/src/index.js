import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./Context/AppContext"

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
   <AppContextProvider>
    <ColorModeScript />
    <App />
     </AppContextProvider>
  </BrowserRouter>
   
);


      
      
    
 

