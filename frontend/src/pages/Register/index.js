import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';
import { Form } from '../../styles/Form.styles';

import { useAuth } from '../../contexts/auth';

export default function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { register } = useAuth();
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    await register(name, login, password);
    history.push('/')
  }

  return(
    <Container>
      <Form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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

        <Link to='/'>Login</Link>
      </Form>
    </Container>
  );
}
