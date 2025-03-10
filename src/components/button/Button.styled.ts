import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  width?: string;
}

// Estilização com Styled Components
export const StyledButton = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #E0E9FF; /* Cor do texto igual ao label */
  transition: background-color 0.2s;
  width: ${({ width }) => (width ? width : '100%')};

  /* Estilos por variante */
  ${({ variant }) =>
    variant === 'primary'
      ? `
        background-color: #909485; /* Fundo igual ao input */
        &:hover {
          background-color: #7A7E6A; /* Tom mais escuro para hover */
        }
      `
      : `
        background-color: transparent;
        border: 2px solid rgba(144,148,133,0.3);
        &:hover {
          background-color: rgba(144, 148, 133, 0.1); /* Hover leve */
        }
      `}
`;