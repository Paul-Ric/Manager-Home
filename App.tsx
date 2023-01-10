import React from "react";
import Routes from './src/routes/routes';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App(){
  return(
    <PaperProvider>
       <Routes/>
    </PaperProvider>
  )
  
}
