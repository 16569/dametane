import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    //type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#dcd6d9',
      paper: '#ffffff',
    },
  },
  typography: {
    fontSize: 40,
    fontWeightLight: 400,
    fontWeightRegular: 100,
    fontWeightMedium: 200,
    fontWeightBold: 300,
    htmlFontSize: 30,
    fontFamily: [
      'Zen Kaku Gothic New'
    ].join(','),
  },
});

export default theme;