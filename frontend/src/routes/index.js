import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthContext from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  const { signed } = useContext(AuthContext);

  return(
    <BrowserRouter>
      { signed ? <AppRoutes /> : <AuthRoutes /> }
    </BrowserRouter>
  );
}
