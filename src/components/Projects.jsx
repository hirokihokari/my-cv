import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {},
});

const Projects = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center">Coming up soon</Typography>
    </div>
  );
}

export default withStyles(styles)(Projects);
