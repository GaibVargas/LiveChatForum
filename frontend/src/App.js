import React from 'react';

import './styles.global.css'

import { AuthProvider } from './contexts/auth';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
