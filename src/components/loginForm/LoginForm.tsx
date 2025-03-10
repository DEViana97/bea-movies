'use client'

import { useAuth } from '../../contex/authContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ContainerWrapper, ContentWrapper } from './loginForm.styled';
import { Input } from '../input/Input';
import { Button } from '../button/Button';


export default function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, loading } = useAuth();
  const router = useRouter();


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao fazer login');
    }
  }

  return (
    <ContainerWrapper>
      <ContentWrapper>
        <div>
          <h2>
            BeaMovies
          </h2>
        </div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '60%', padding: '2rem', borderRadius: '8px' }} onSubmit={handleSubmit}>
          <div>
            <Input
              label="Usuário"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Senha"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Button
             type="submit" 
             width="100%"
             variant='secondary'
             disabled={loading}>
            {loading ? 'Carregando...' : 'Entrar'}
            </Button>
          </div>
        </form>
      </ContentWrapper>
    </ContainerWrapper>
  );
}