import React from 'react';
import { Box } from '@mui/material';

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => (
  <Box component="img" src={src} alt={alt} sx={{ width: 24, height: 24 }} />
);

export default Icon;



