"use client";

import { useState } from 'react';
import Cookies from 'universal-cookie';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import { RequestCookie } from 'next/dist/server/web/spec-extension/cookies/types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: #fff;
`;

const LoginInput = styled(Input)`
  width: 25rem;
  height: 2.5rem;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 1rem;
`;

const LoginButton = styled(Button)`
  width: 25rem;
  height: 2.5rem;
  margin: 0.5rem 0;
  padding: 0;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #00bcd4;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

interface LoginProps {
  user: RequestCookie | undefined;
}

export default function Login({ user }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(user?.value);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        // simulate a successful login
        const cookies = new Cookies();
        cookies.set('user', username, { path: '/' });
        setIsLoggedIn(true);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    setIsLoggedIn(false);
    cookies.remove('user', { path: '/' });
  }

  if (user?.value && isLoggedIn) {
    return (
      <Container>
        <div>Vous êtes connecté grâce au cookie, <code>{user.value}</code>.</div>
        <LoginButton type="primary" onClick={handleLogout}>
          Se déconnecter
        </LoginButton>
      </Container>
    )
  }

  if (isLoggedIn) {
    return (
      <Container>
        <div>Vous êtes connecté, <code>{username}</code>.</div>
        <LoginButton type="primary" onClick={handleLogout}>
          Se déconnecter
        </LoginButton>
      </Container>
    )
  }

  return (
    <Container>
      {loading ? (
        <div>
          <p>Loading...</p>
          <LoadingOutlined />
        </div>
      ) : (
        <LoginForm>
          <LoginInput
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="primary" onClick={handleLogin}>
            Login
          </LoginButton>
        </LoginForm>
      )}
    </Container>
  );
};
