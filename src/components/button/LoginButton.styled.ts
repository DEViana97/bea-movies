import styled from 'styled-components';

export const StyledWrapper = styled.div`
  .btn-conteiner {
    display: flex;
    justify-content: center;
    width: 100%;
    --color-text: ${props => props.theme.textOn.selected};
    --color-background: transparent;
    --color-outline: #ff145b80;
    --color-shadow: #00000080;
  }

  .btn-content {
    display: flex;
    align-items: center;
    padding: 0.3125rem 1.875rem;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 30px;
    color: var(--color-text);
    background: var(--color-background);
    transition: 1s;
    border-radius: 8px;
    border: 1px solid #AC1754;
    box-shadow: 0 0 0.2em 0 var(--color-background);
  }
  
  .btn-content .btn-title {
    font-size: 0.975rem;
  }

  .btn-content:hover, .btn-content:focus {
    transition: 0.5s;
    -webkit-animation: btn-content 1s;
    animation: btn-content 1s;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 0.4em 0 var(--color-background);
  }

  .btn-content .icon-arrow {
    transition: 0.5s;
    transform: scale(0.6);
  }

  .btn-content:hover .icon-arrow {
    transition: 0.5s;
    margin-right: 1.25rem;
  }

  .icon-arrow {
    width: 1.25rem;
    margin-left: 0.9375rem;
    position: relative;
    top: 6%;
  }

  /* SVG */
  #arrow-icon-one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  #arrow-icon-two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .btn-content:hover #arrow-icon-three {
    animation: color_anim 1s infinite 0.2s;
  }

  .btn-content:hover #arrow-icon-one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .btn-content:hover #arrow-icon-two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  /* SVG animations */
  @keyframes color_anim {
    0% {
      fill: white;
    }

    50% {
      fill: var(--color-background);
    }

    100% {
      fill: white;
    }
  }

  /* Login animations */
  @-webkit-keyframes btn-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }

  @keyframes btn-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }`;