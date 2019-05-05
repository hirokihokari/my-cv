import React, { Component } from 'react';

const FullPageContext = React.createContext();

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
  }

  render() {
    const { children, state, callbacks, sections, anchors } = this.props;

    return (
      <FullPageContext.Provider value={
        {
          state: state,
          anchors: anchors,
          sections: sections,
          callbacks: callbacks,
        }
      }>
        { children }
      </FullPageContext.Provider>
    )
  }
}

export { FullPageContext, withFullPageContext, FullPageProvider };
