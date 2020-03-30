import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Setings from '../Settings';
import Content from '../Shared/Content';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Setings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
