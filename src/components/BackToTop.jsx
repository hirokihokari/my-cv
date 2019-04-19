import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

// material-ui icons
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const styles = theme => ({
  root: {
    position: 'fixed',
    right: '1rem',
    bottom: '1rem',
  },
});

const BackToTop = (props) => {
  const { classes } = props;

  return (
    <Fab
      href="#Title"
      color="primary"
      aria-label="Back"
      className={classes.root}>
      <ArrowUpward />
    </Fab>
  );
}

export default withStyles(styles)(BackToTop);
