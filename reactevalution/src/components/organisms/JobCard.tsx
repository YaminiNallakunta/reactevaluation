import React from 'react';
import {  Card, CardContent as MuiCardContent } from '@mui/material';
import CardContent from '../molecules/CardContent';

const JobCard: React.FC = () => {
  return (
    <Card>
      <MuiCardContent>
        <CardContent
          jobTitle="User Experience Designer"
          company={<span style={{ color: 'red' }}>HP</span>}
          location="Hyderabad, Telangana, India"
          commuteRoutes={[
            '/assets/icons/bike.svg',
            '/assets/icons/car.svg',
            '/assets/icons/bus.svg',
            '/assets/icons/train.svg',
          ]}
          timeAgo="1hr 36 mins ago"
        />
      </MuiCardContent>
    </Card>
  );
};

export default JobCard;

