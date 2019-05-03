import React, { Component } from 'react';


const FullPageContext = React.createContext();

const anchors = ["Title", "Skills", "History", "Contact", "Projects", "AboutThisPage"];

const withFullPageContext = Component => {
  return props => {
    return (
      <FullPageContext.Consumer>
        { context => {
          return (
            <Component
              {...props}
              fullPageContext={ context }
            />
          )
        }}
      </FullPageContext.Consumer>
    )
  };
};

class FullPageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      menuOpen: false,
    }

    this.handleLeave = this.handleLeave.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
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

  render() {
    const { children } = this.props;

    return (
      <FullPageContext.Provider value={
        {
          state: this.state,
          anchors: anchors,
          handleLeave: this.handleLeave,
          handleMenuOpen: this.handleMenuOpen,
          handleMenuClose: this.handleMenuClose,
        }
      }>
        { children }
      </FullPageContext.Provider>
    )
  }
}

export { FullPageContext, withFullPageContext, FullPageProvider };
