import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  wrapper: {
    width: '100%',
    paddingTop: '100%',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
});

const SquareImage = (props) => {
  const {
    src,
    classes,
  } = props;

  return (
    <div className={classes.wrapper}>
      <img src={src} className={classes.image}/>
    </div>
  )
}

export default withStyles(styles)(SquareImage);
