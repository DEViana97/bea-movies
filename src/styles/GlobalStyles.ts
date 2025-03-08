import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Resetting all elements to ensure consistency across browsers */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  }

  /* Reset block, inline, and table elements */
  body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, figure, hr, dl, dd, html {
    margin: 0;
    padding: 0;
  }

  /* Reset form elements */
  button, input, select, textarea {
    font: inherit;
    margin: 0;
    padding: 0;
    background: transparent;
    color: inherit;
    outline: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: none;
    border-bottom: 1px solid #ddd;
  }

  th {
    text-align: left;
  }

  /* Reset list styles */
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Anchor elements */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Reset image, video, and canvas */
  img, video, canvas {
    max-width: 100%;
    display: block;
  }

  /* Remove default button and link styles */
  button {
    cursor: pointer;
  }

  /* Reset interactive media elements */
  iframe, embed, object {
    border: 0;
  }

  /* Hide scrollbar for better UX if necessary */
  /* ::-webkit-scrollbar {
    display: none;
  } */

  /* Impressão */
  /* Ocultar elemento na impressão */
  .no-print {
    display: block !important; /* Garante que apareça no modo normal */
  }

  /* Exibir elemento apenas na impressão */
  .only-print {
    display: none; /* Esconde no modo normal */
  }

  @media print {
    .only-print {
      display: block !important; /* Mostra apenas na impressão */
    }
  }

  @media print {
    .no-print {
      display: none !important; /* Esconde apenas na impressão */
    }
  }
  
`;

export default GlobalStyles;
