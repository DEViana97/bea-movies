"use client";
import React from 'react';
import { ButtonProps, StyledButton } from './Button.styled';

export function Button({
  children,
  variant = 'primary',
  width,
  type = 'submit',
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variantType={variant} width={width} type={type} {...props}>
      {children}
    </StyledButton>
  );
}