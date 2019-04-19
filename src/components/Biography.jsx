import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
});

const Biography = (props) => {
  const { classes } = props;

  return (
    <div>Biography Section</div>
  );
}

export default withStyles(styles)(Biography);
