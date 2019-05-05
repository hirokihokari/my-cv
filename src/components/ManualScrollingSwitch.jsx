import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// own
import { withFullPageContext } from './FullPageProvider';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: '1vmin',
    right: '1rem',
    width: 'auto',
    zIndex: 99,
  }
})

const ManualScrollingSwitch = (props) => {
  const { fullPageContext, classes } = props;
  const { state, callbacks } = fullPageContext;
  const { manualScrolling } = state;
  const { handleManualScrollingSwitch } = callbacks;

  return (
    <div
      id="manualScrollingSwitch"
      className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={manualScrolling}
            onChange={handleManualScrollingSwitch}
            color="primary"
            value="checkedA"/>
        }
        label="Manual Scrolling"/>
    </div>
  )
}

export default withStyles(styles)(
  withFullPageContext(
    ManualScrollingSwitch
  )
);
