import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
});

const Contact = (props) => {
  const { classes } = props;

  return (
    <div>Contact Section</div>
  );
}

export default withStyles(styles)(Contact);
