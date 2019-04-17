import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// fullPage
import ReactFullpage from '@fullpage/react-fullpage';

const styles = theme => ({
});

const anchors = ["firstPage", "secondPage", "thirdPage"];

const FullPage = (props) => {
  const { classes } = props;

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationPosition='right'
      slidesNavigation
      slidesNavPosition='bottom'
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className={"section " + classes.section}>
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className={"section " + classes.section}>
              <p>Section 2 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default withStyles(styles)(FullPage);
