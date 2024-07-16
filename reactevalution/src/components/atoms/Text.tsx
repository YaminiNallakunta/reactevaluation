import React from 'react';
import { Typography } from '@mui/material';

interface TextProps {
  variant: 'body1' | 'body2' | 'caption' | 'h6';
  children: React.ReactNode;
  color?: string;
}

const Text: React.FC<TextProps> = ({ variant, children, color }) => (
  <Typography variant={variant} color={color}>
    {children}
  </Typography>
);

export default Text;

