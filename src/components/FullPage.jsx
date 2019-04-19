import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// fullPage
import ReactFullpage from '@fullpage/react-fullpage';

// own
import Title from '../components/Title';

const styles = theme => ({
  root: {},
  section: {
    textAlign: 'center',
  },
});

const anchors = ["page1", "page2", "page3"];

const FullPage = (props) => {
  const { classes } = props;

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      menu="#menu"
      navigationPosition='right'
      slidesNavigation
      slidesNavPosition='bottom'
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className={"section " + classes.section}>
              <Title/>
            </div>
            <div className={"section " + classes.section}>
              <p>Section 2 (welcome to fullpage.js)</p>
            </div>
            <div className={"section " + classes.section}>
              <p>Section 3 (welcome to fullpage.js)</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default withStyles(styles)(FullPage);
