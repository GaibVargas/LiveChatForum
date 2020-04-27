import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Form } from '../../styles/Form.styles';

import { useAuth } from '../../contexts/auth';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const {login: signIn} = useAuth();

  async function handleLogin(e) {
    e.preventDefault();

    await signIn(login, password);
  }

  return(
    <Container>
      <Form  onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}  
        />
        <button type='submit'>Entrar</button>

        <Link to='/register'>Registration</Link>
      </Form>
    </Container>
  );
}
