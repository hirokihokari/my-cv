import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  section: {
    position: 'relative',
  },
  sectionContent: {
    maxWidth: 500,
    margin: '0 auto',
  },
});

const Page = (props) => {
  const {
    classes,
    component,
  } = props;

  return (
    <div className={"section " + classes.section}>
      <div className={classes.sectionContent}>
        { component }
      </div>
    </div>
  );
}

export default withStyles(styles)(Page);
