import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import theme from './theme';
import JobCard from './components/organisms/JobCard';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container sx={{width:500, marginTop:20}}>
      <JobCard />
    </Container>
  </ThemeProvider>
);

export default App;



