"use client";

import React, { InputHTMLAttributes } from 'react';
import { InputWrapper, Label, StyledInput } from './Input.styled';

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
  id: string; 
  name?: string;
  typeInput: InputTypes;
}


export function Input({ label, id, name, typeInput, ...props }: InputProps) {
  return (
    <InputWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput id={id} name={name || id} $typeInput={typeInput} {...props} />
    </InputWrapper>
  );
}