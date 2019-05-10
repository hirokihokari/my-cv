import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// fullPage
import ReactFullpage from '@fullpage/react-fullpage';

// own
import { FullPageProvider } from './FullPageProvider';
import Page from './Page';
import Title from './Title';
import Skills from './Skills';
import History from './History';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';
import ManualScrollingSwitch from './ManualScrollingSwitch';
import BackToTop from './BackToTop';
import Backdrop from './Backdrop';

const styles = theme => ({
  root: {
  },
});

const sections = [
  { label: 'Title', hrefLabel: 'Title' },
  { label: 'Skills', hrefLabel: 'Skills' },
  { label: 'History', hrefLabel: 'History' },
  { label: 'Contact', hrefLabel: 'Contact' },
  { label: 'Projects', hrefLabel: 'Projects' },
];

const anchors = sections.map(sec => { return sec.hrefLabel });

class FullPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      menuOpen: false,
      manualScrolling: false,
    }

    this.handleLeave = this.handleLeave.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleManualScrollingSwitch = this.handleManualScrollingSwitch.bind(this);
  }

  handleLeave(index, nextIndex) {
    const currentIndex = nextIndex.index;

    this.setState({ currentIndex: currentIndex, menuOpen: false, });
  }

  handleMenuOpen() {
    this.setState({ menuOpen: true });
  }

  handleMenuClose() {
    this.setState({ menuOpen: false });
  }

  handleManualScrollingSwitch = fullpageApi => () => {
    this.setState(prevState => ({ manualScrolling: !prevState.manualScrolling }),
      () => { fullpageApi.setAutoScrolling(!this.state.manualScrolling) }
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <ReactFullpage
        licenseKey="07C75077-5CA442A4-8433F9F4-186878F4"
        anchors={anchors}
        navigation
        navigationPosition='right'
        slidesNavigation
        slidesNavPosition='bottom'
        onLeave={this.handleLeave}
        fixedElements="#navigation, #backToTop, #manualScrollingSwitch"
        render={({ state, fullpageApi }) => {
          return (
            <FullPageProvider
              fullpageApi={fullpageApi}
              state={this.state}
              callbacks={{
                handleLeave: this.handleLeave,
                handleMenuOpen: this.handleMenuOpen,
                handleMenuClose: this.handleMenuClose,
                handleManualScrollingSwitch: this.handleManualScrollingSwitch(fullpageApi),
              }}
              sections={sections}
              anchors={anchors}>
              <ReactFullpage.Wrapper>
                <Page index={0} component={<Title/>}/>
                <Page index={1} component={<Skills/>}/>
                <Page index={2} component={<History/>}/>
                <Page index={3} component={<Contact/>}/>
                <Page index={4} component={<Projects/>}/>
                <Navbar />
                <ManualScrollingSwitch />
                <Backdrop />
                <BackToTop/>
              </ReactFullpage.Wrapper>
            </FullPageProvider>
          );
        }}
      />
    )
  }
}

export default withStyles(styles)(FullPage);
