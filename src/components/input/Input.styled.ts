import styled from 'styled-components';
import { InputTypes } from './Input';

const getInputBackground = (theme: any) => ({
  [InputTypes.primary]: theme.textOn?.highlight, // white
  [InputTypes.secondary]: theme.textOn?.highlight, // white
  [InputTypes.terciary]: theme.text?.default, // Black
  [InputTypes.delete]: theme.text?.critical, // red
  [InputTypes.critical]: theme.textOn?.highlight, // white
  [InputTypes.disabled]: theme.text?.disabled, // grey
  [InputTypes.transparent]: theme.text?.default, //
  [InputTypes.default]: theme.barbieTheme.defaultTransparent, // rgba(243, 113, 153, 0.6)
});

const getInputColor = (theme: any) => ({
  [InputTypes.primary]: theme.textOn?.highlight, // white
  [InputTypes.secondary]: theme.textOn?.highlight, // white
  [InputTypes.terciary]: theme.text?.default, // Black
  [InputTypes.delete]: theme.text?.critical, // red
  [InputTypes.critical]: theme.textOn?.highlight, // white
  [InputTypes.disabled]: theme.text?.disabled, // grey
  [InputTypes.transparent]: theme.text?.default, //
  [InputTypes.default]: theme.textOn?.highlight, // white
});

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

export const StyledInput = styled.input<{ $typeInput: InputTypes }>`
  background: ${({ theme, $typeInput }) => getInputBackground(theme)[$typeInput]};
  padding: 1rem;
  border-radius: 8px;
  border: none;
  color: ${({ theme, $typeInput }) => getInputColor(theme)[$typeInput]};
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(224, 233, 255, 0.7); /* Efeito de foco */
  }
`;