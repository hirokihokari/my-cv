import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// fullPage
import ReactFullpage from '@fullpage/react-fullpage';

// own
import Title from '../components/Title';
import Skills from '../components/Skills';
import Biography from '../components/Biography';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import AboutThisPage from '../components/AboutThisPage';

const styles = theme => ({
  root: {},
  section: {
    textAlign: 'center',
  },
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
            <div className={"section " + classes.section}>
              <Title/>
            </div>
            <div className={"section " + classes.section}>
              <Skills/>
            </div>
            <div className={"section " + classes.section}>
              <Biography/>
            </div>
            <div className={"section " + classes.section}>
              <Contact/>
            </div>
            <div className={"section " + classes.section}>
              <Projects/>
            </div>
            <div className={"section " + classes.section}>
              <AboutThisPage/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default withStyles(styles)(FullPage);
