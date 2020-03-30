import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Setings from '../Settings';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Setings />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
