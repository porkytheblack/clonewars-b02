import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000"
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export default theme;
