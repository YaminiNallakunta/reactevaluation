import React, { ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

interface CardContentProps {
  jobTitle: string;
  company: ReactNode;
  location: string;
  commuteRoutes: string[];
  timeAgo: ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ jobTitle, company, location, commuteRoutes, timeAgo }) => (
  <Box >
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={40} >
        <Icon src="/assets/images/hp.svg" alt="Company Logo" />
        <Icon src="/assets/icons/more.svg" alt="More Options" />
      </Stack>
    </Stack>
    <Box mt={2}>
      <Text variant="h6">{jobTitle}</Text>
      <Text variant="body1" color="text.secondary">{company}</Text>
      <Text variant="body2" color="text.secondary">{location}</Text>
    </Box>
    <Box mt={2}>
    <Stack direction="row" justifyContent="space-between">
  <Box>
    <Text variant="body1">Commute routes available:</Text>
    <Stack direction="row" spacing={3}>
      {commuteRoutes.map((route, index) => (
        <Icon key={index} src={route} alt={`Commute Route ${index}`} />
      ))}
    </Stack>
  </Box>
  <Box sx={{ ml: 3, mt: 3 }}>
    <Text variant="caption" color="text.secondary">
      {timeAgo}
    </Text>
  </Box>
</Stack>
    </Box>
  </Box>
);

export default CardContent;



