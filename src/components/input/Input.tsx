import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';


export enum InputTypes {
  primary,
  secondary,
  terciary,
  delete,
  critical,
  disabled,
  transparent,
  default
}


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
  name?: string;
  placeholder?: string;
  typeInput: InputTypes;
  type?: string;
}
const Input = ({id, typeInput, label, type, placeholder ,...props}: InputProps) => {
  return (
    <StyledWrapper>
      <div className="inputBox">
        <input placeholder={placeholder} type={type} {...props} />
        <span>{label}</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;

  .inputBox {
    position: relative;
  }

  .inputBox input {
    padding: 0.9375rem 1.25rem;
    outline: none;
    background: transparent;
    border-radius: 5px;
    color: #212121;
    border: 1px solid#212121;
    font-size: 1em;

    &:focus {
      box-shadow: 1px 1px 5px 1px ${props => props.theme.barbieTheme.default};
    }
  }

  .inputBox span {
    position: absolute;
    left: 0;
    font-size: 0.7em;
    transform: translateX(14px) translateY(-7.5px);
    padding: 0 6px 1px 5px;
    border-radius: 2px;
    background: ${props => props.theme.barbieTheme.selected};
    letter-spacing: 1px;
    border: 1px solid #212121;
    color: ${props => props.theme.text.default};
  }`;

export default Input;
