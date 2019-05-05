import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  section: {
    paddingTop: 0,
    paddingLeft: 0,
    transition: 'padding-top 0.5s, padding-left 0.5s',
  },
  menuOpen: {
    paddingTop: '5rem',
    paddingLeft: '5rem',
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
    maxHeight: 'calc(100vh - 100px)', // deduct roughtly the height of header
    overflow: 'hidden',
    width: '100%',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
});

const Page = (props) => {
  const {
    classes,
    component,
    children,
  } = props;

  const sectionClass = "section" + " " + classes.section

  return (
    <div className={sectionClass}>
      <div className={classes.sectionContentWrap}>
        <div className={classes.sectionContent}>
          { component || children }
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Page);
