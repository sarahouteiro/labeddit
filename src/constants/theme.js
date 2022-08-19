import { createTheme } from '@mui/material/styles';
import { 
    primaryColor, 
    secondColor, 
    darkerSecondColor, 
    thirdColor, 
    darkerNeutralColor,
    lightOrange
} from './colors';

const theme = createTheme({
  palette: {
    primary: {
      light: thirdColor,
      main: primaryColor,
      dark: secondColor,
      contrastText: '#E9E561', 
    },
    secondary: {
      light: secondColor,
      main: darkerNeutralColor,
      dark: darkerSecondColor,
      contrastText: '#E9E561',
    },
    third: {
      light: thirdColor,
      main: thirdColor,
      dark: darkerSecondColor,
      contrastText: '#E9E561',
    },
    fourth: {
      light: lightOrange,
      main: lightOrange,
      dark: darkerSecondColor,
      contrastText: '#E9E561',
    },
    fifth: {
      light: darkerNeutralColor,
      main: darkerNeutralColor,
      dark: darkerSecondColor,
      contrastText: '#E9E561',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: '10px',
        },
      },
    },
  },
});

export default theme;