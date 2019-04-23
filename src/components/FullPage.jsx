import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// fullPage
import ReactFullpage from '@fullpage/react-fullpage';

// own
import Page from '../components/Page';
import Title from '../components/Title';
import Skills from '../components/Skills';
import Biography from '../components/Biography';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import AboutThisPage from '../components/AboutThisPage';

const styles = theme => ({
  root: {},
});

const anchors = ["Title", "Skills", "Bio", "Contact", "Projects", "ThisPage"];

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
            <Page index={2} component={<Biography/>}/>
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
