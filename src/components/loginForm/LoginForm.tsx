'use client'

import { useAuth } from '../../contex/authContext';
import React, { useEffect, useRef, useState } from 'react';
import { ContainerWrapper, ContentWrapper } from './loginForm.styled';
// import { Input, InputTypes } from '../input/Input';
import { Bubble } from '../animation/HeartAnimation';
import HamsterLoading from '../hamsterLoading/HamsterLoading';
import LoginButton from '../button/LoginButton';
import Input, { InputTypes } from '../input/Input';


export default function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, loading } = useAuth();

  const [bubbles, setBubbles] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateRandomPosition = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      const maxBubbleSize = 150;

      const x = Math.random() * (containerWidth - maxBubbleSize);
      const y = Math.random() * (containerHeight - maxBubbleSize);

      return { x, y };
    }
    return { x: 0, y: 0 };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newBubble = generateRandomPosition();
      setBubbles(prevBubbles => [...prevBubbles, newBubble]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  }

  return (
    <ContainerWrapper ref={containerRef}>
      {loading ? <HamsterLoading /> : (
        <ContentWrapper>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                label='Usuário:'
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                typeInput={InputTypes.default}
              />
              <Input
                label='Senha:'
                type='password'
                placeholder='Senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                typeInput={InputTypes.default}
              />
            </div>

            <div>
              <LoginButton
                handleSubmit={handleSubmit}
                disabled={password.length === 0 || username.length === 0}
              />
            </div>
          </form>
        </ContentWrapper>
      )}
      {bubbles.map((bubble, index) => (
        <Bubble key={index}
          x={bubble.x}
          y={bubble.y}
          containerWidth={containerRef.current?.clientWidth || 0}
          containerHeight={containerRef.current?.clientHeight || 0} />
      ))}
    </ContainerWrapper>
  );
}