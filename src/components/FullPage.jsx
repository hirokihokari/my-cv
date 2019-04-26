import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// fullPage
import ReactFullpage from '@fullpage/react-fullpage';

// own
import Page from './Page';
import Title from './Title';
import Skills from './Skills';
import History from './History';
import Contact from './Contact';
import Projects from './Projects';
import AboutThisPage from './AboutThisPage';

const styles = theme => ({
  root: {},
});

const anchors = ["Title", "Skills", "History", "Contact", "Projects", "ThisPage"];

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

export default withStyles(styles)(FullPage);
