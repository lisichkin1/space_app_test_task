import React from 'react';
import { ButtonProps } from '../../types/typesUI';

export const Button: React.FC<ButtonProps> = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};
