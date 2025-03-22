import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
  .login-button {
    font-size: 1rem;
    font-weight: bold;
    padding: 0.7rem 2.4rem;
    border-radius: 1.5rem;
    position: relative;
    background-color: ${props => props.theme.barbieTheme.defaultTransparent};
    box-shadow: 1px 1px 1px 1px ${props => props.theme.barbieTheme.default};
    color: ${props => props.theme.barbieTheme.disabled};
    border: none;
    text-shadow: 0 0 3px #ff6e6e;
    overflow: hidden;
    cursor: pointer;
    transition: 0.7s;
    z-index: 2;
  }

  .login-button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .login-button:hover .heart1 svg,
  .login-button:hover .heart2 svg,
  .login-button:hover .heart3 svg {
    opacity: 1;
    filter: drop-shadow(0 0 10px #ff6e6e)
  }

  .login-button:hover {
    color: red;
    box-shadow: 0 0 10px inset #ff6e6e;
    scale: 105%;
  }

  .login-button:active {
    scale: 100%;
  }

  .heart1 svg {
    position: absolute;
    left: 4.5rem;
    top: 1.8rem;
    opacity: 0;
    fill: red;
    stroke: none;
    transition: 0.7s;
    width: 2rem;
    height: 2rem;
    animation: move1 5s ease-in-out infinite alternate-reverse;
  }

  .heart2 svg {
    position: absolute;
    left: 0.8rem;
    opacity: 0;
    top: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: red;
    stroke: none;
    transform: rotate(-20deg );
    animation: move2 5s ease infinite alternate-reverse;
  }

  .heart3 svg {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    opacity: 0;
    width: 1.4rem;
    height: 1.4rem;
    transform: rotate(20deg);
    fill: red;
    stroke: none;
    z-index: -1;
    animation: move3 5s ease infinite alternate-reverse;
  }

  @keyframes move1 {
    0% {
      top: 2rem;
    }

    50% {
      top: 4rem;
    }

    100% {
      top: 2rem;
    }
  }

  @keyframes move2 {
    0% {
      top: 0.3rem;
    }

    50% {
      top: 1.5rem;
    }

    100% {
      top: 0.3rem;
    }
  }

  @keyframes move3 {
    0% {
      top: 1.5rem;
    }

    50% {
      top: .6rem;
    }

    100% {
      top: 1.5rem;
    }
  }
`;