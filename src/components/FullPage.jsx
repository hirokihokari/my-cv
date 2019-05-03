import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// fullPage
import ReactFullpage from '@fullpage/react-fullpage';

// own
import { withFullPageContext } from './FullPageProvider';
import Page from './Page';
import Title from './Title';
import Skills from './Skills';
import History from './History';
import Contact from './Contact';
import Projects from './Projects';
import AboutThisPage from './AboutThisPage';

const styles = theme => ({
  root: {
  },
});

class FullPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullPageContext, classes } = this.props;

    return (
      <ReactFullpage
        licenseKey="07C75077-5CA442A4-8433F9F4-186878F4"
        anchors={fullPageContext.anchors}
        navigation
        navigationPosition='right'
        slidesNavigation
        slidesNavPosition='bottom'
        onLeave={fullPageContext.handleLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Page index={0} component={<Title/>}/>
              <Page index={1} component={<Skills/>}/>
              <Page index={2} component={<History/>}/>
              <Page index={3} component={<Contact/>}/>
              <Page index={4} component={<Projects/>}/>
              <Page index={5} component={<AboutThisPage/>}/>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  }
}

export default withStyles(styles)(
  withFullPageContext(
    FullPage
  )
);
