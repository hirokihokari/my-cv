import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  section: {
  },
  sectionContentWrap: {
    position: 'relative',
    top: '0',
    left: 0,
    width: '100%',
    height: '100%',
    margin: '0 auto',
  },
  sectionContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '65%',
    overflow: 'hidden',
    width: '80%',
    maxWidth: 800,
  },
});

const Page = (props) => {
  const {
    classes,
    component,
    children,
  } = props;

  return (
    <div className={"section " + classes.section}>
      <div className={classes.sectionContentWrap}>
        <div className={classes.sectionContent}>
          { component || children }
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Page);
