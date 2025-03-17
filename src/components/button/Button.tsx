"use client";
import React from 'react';
import { ButtonProps, StyledButton } from './Button.styled';

export function Button({
  children,
  variant,
  width,
  type,
  height,
  ...props
}: ButtonProps) {
  return (
    <StyledButton $variantType={variant} width={width} height={height} type={type} {...props}>
      {children}
    </StyledButton>
  );
}