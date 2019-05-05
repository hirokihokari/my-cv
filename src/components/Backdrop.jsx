import React from 'react';

// material-ui core
import { default as BackdropMUI } from '@material-ui/core/Backdrop';

// own
import { withFullPageContext } from './FullPageProvider';

const Backdrop = (props) => {
  const { fullPageContext } = props;

  return (
    <BackdropMUI
      open={fullPageContext.state.menuOpen}
      transitionDuration={1000}/>
  );
};

export default withFullPageContext(Backdrop);
