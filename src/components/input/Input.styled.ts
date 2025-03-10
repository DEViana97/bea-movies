import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem; /* Igual ao trecho original */
`;

export const Label = styled.label`
  color: ${props => props.theme.textOn.selected}; /* Cor do texto do label */
  font-weight: bold;
`;

export const StyledInput = styled.input`
  background: #909485; /* Fundo igual ao trecho */
  padding: 1rem;
  border-radius: 8px;
  border: none; /* Sem borda, como no original */
  color: #fff; /* Cor do texto para legibilidade */
  &::placeholder {
    color: rgba(255, 255, 255, 0.7); /* Placeholder mais suave */
  }
  &:focus {
    outline: none; /* Remove outline padrão */
    box-shadow: 0 0 0 2px rgba(224, 233, 255, 0.7); /* Efeito de foco */
  }
`;