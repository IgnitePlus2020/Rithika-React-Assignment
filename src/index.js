import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#d50000',
    },
    secondary:{
      main:'#ff5252'
    }
    }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
