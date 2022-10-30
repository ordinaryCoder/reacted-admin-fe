import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#BD11FA',
    },
    secondary: {
      main: '#46C2FF',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
