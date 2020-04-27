import React, { createContext, useState, useContext, useEffect } from 'react';

import { registerUser, loginUser } from '../services/auth';

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const localUser = localStorage.getItem('@LiveChat:user');
    const localToken = localStorage.getItem('@LiveChat:token');

    if(localUser !== null && localToken !== null) {
      setUser(JSON.parse(localUser));
      setToken(localToken);
    }
  }, []);

  async function register(name, login, password) {
    const response = await registerUser(name, login, password);

    setUser(response.user);
    setToken(response.token);

    localStorage.setItem('@LiveChat:user', JSON.stringify(response.user));
    localStorage.setItem('@LiveChat:token', response.token);
  }

  async function login(login, password) {
    try {
      const response = await loginUser(login, password);

      setUser(response.user);
      setToken(response.token);

      localStorage.setItem('@LiveChat:user', JSON.stringify(response.user));
      localStorage.setItem('@LiveChat:token', response.token);
    } catch(error) {
      alert(error.response.data.message)
      throw error;
    }   
  }

  async function logout() {
    setUser(null);
    setToken(null);

    localStorage.clear();
  }

  return(
    <AuthContext.Provider value={{signed: !!user, token, user, register, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;
