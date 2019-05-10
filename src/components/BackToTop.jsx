import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

// material-ui icons
import ArrowUpward from '@material-ui/icons/ArrowUpward';

// own
import { withFullPageContext } from './FullPageProvider';

const styles = theme => ({
  root: {
    position: 'fixed',
    right: '1rem',
    bottom: '-5rem',
    transition: 'bottom 0.5s 0.3s',
    '&.active': {
      bottom: '1rem',
    },
  },
  icon: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    transition: 'bottom 0.5s 0.3s',
    '&.active': {
      bottom: '50%',
    },
  },
});

const BackToTop = (props) => {
  const { fullPageContext, classes } = props;

  const active = fullPageContext.state.currentIndex != 0;

  const rootClasses = classes.root + (active ? " active" : "");
  const iconClasses = classes.icon + (active ? " active" : "");

  return (
    <Fab
      href="#Title"
      color="primary"
      aria-label="Back"
      className={rootClasses}
      variant="extended"
      id="backToTop">
      <ArrowUpward className={iconClasses}/>
    </Fab>
  );
}

export default withStyles(styles)(
  withFullPageContext(
    BackToTop
  )
);
