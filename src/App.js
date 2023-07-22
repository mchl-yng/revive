import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import customTheme from './customTheme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
