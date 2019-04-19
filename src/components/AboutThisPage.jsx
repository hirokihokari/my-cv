import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
});

const AboutThisPage = (props) => {
  const { classes } = props;

  return (
    <div>About This Page Section</div>
  );
}

export default withStyles(styles)(AboutThisPage);
