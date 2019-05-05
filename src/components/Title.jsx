import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    textAlign: 'center',
  }
});

const Title = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant='h2'>Hiroki Hokari</Typography>
      <Typography variant='h4'>Web Developer</Typography>
    </div>
  );
}

export default withStyles(styles)(Title);
