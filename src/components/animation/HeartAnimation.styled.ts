import styled, { keyframes } from 'styled-components';

// Animações
export const bubbleUp = keyframes`
  0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
`;


export const BubbleWrapper = styled.div<{ $containerWidth: number; $containerHeight: number }>`
  position: absolute;
  z-index: 0;
  max-width: ${({ $containerWidth }) => Math.min($containerWidth * 0.15, 150)}px;
  max-height: ${({ $containerHeight }) => Math.min($containerHeight * 0.15, 150)}px;
  animation: ${bubbleUp} 2s ease-out forwards;
  

  .loader {
    position: relative;
    width: 40px;
    height: 60px;
    animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .loader:before,
  .loader:after {
    content: "";
    background: red;
    width: 40px;
    height: 60px;
    border-radius: 50px 50px 0 0;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(45deg);
    transform-origin: 50% 68%;
    box-shadow: 5px 4px 5px #0004 inset;
  }
  .loader:after {
    transform: rotate(-45deg);
  } 
`;