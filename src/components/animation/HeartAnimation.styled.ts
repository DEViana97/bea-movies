import styled, { keyframes } from 'styled-components';

// Animações
export const bubbleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
`;

export const heartFill = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const BubbleWrapper = styled.div<{ $containerWidth: number; $containerHeight: number }>`
  position: absolute;
  width: 10vw;
  z-index: 0;
  height: 10vw;
  min-width: 70px;
  min-height: 70px;
  max-width: ${({ $containerWidth }) => Math.min($containerWidth * 0.15, 150)}px;
  max-height: ${({ $containerHeight }) => Math.min($containerHeight * 0.15, 150)}px;
  color: ${({ theme }) => theme.chihiroBackground.light};
  border-radius: 50%;
`;

export const BubbleDummy = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
  border: .2em solid currentColor;
  animation: ${bubbleUp} 1200ms ease-out forwards;
`;


export const Heart = styled.svg`
  width: 100%;
  height: 100%;
  background: transparent;
  path {
    fill: #f91f0d;
    stroke: none;
    animation: ${heartFill} 2s ease-out forwards;
  }
`;