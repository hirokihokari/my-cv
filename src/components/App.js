import React, { Component } from 'react';

// material-ui core modules
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

// own
import FullPage from '../components/FullPage';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';

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
      <div className={classes.app}>
        <CssBaseline/>
        <Navbar />
        <FullPage />
        <BackToTop/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
