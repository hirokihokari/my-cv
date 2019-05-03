import React, { Component } from 'react';

// material-ui core modules
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// own
import { FullPageProvider } from './FullPageProvider';
import FullPage from './FullPage';
import Navbar from './Navbar';
import BackToTop from './BackToTop';
import Backdrop from './Backdrop';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fdd4b4',
      main: '#EC6302',
    },
    secondary: {
      main: '#48464C',
    },
    text: {
      primary: '#48464C',
    },
  }
});

const styles = theme => ({
  app: { },
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.app}>
          <FullPageProvider>
            <CssBaseline/>
            <Navbar />
            <FullPage />
            <Backdrop />
            <BackToTop/>
          </FullPageProvider>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
