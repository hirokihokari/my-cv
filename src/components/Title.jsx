import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    textAlign: 'center',
  }
});

const Title = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant='h2' gutterBottom>Hiroki Hokari</Typography>
      <Typography variant='h4' gutterBottom>Web Developer</Typography>
      <Typography variant='body1'>
        Source code for this page can be found at&nbsp;
        <Link href="https://github.com/hirokihokari/my-cv">
          https://github.com/hirokihokari/my-cv
        </Link>)
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Title);
