import { ThemeProvider } from '@mui/material';
import Router from './routes/Router';
import theme from './constants/theme';
import { GlobalStyle } from './styled';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
  );
};

export default App;
