"use client";

import React, { InputHTMLAttributes } from 'react';
import { InputWrapper, Label, StyledInput } from './Input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Texto do label
  id: string; // Obrigatório para associar label e input
  name?: string; // Opcional, mas útil para formulários
}


export function Input({ label, id, name, type = 'text', ...props }: InputProps) {
  return (
    <InputWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput  id={id} name={name || id} type={type} {...props} />
    </InputWrapper>
  );
}