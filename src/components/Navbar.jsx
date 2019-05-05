import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

// own
import { withFullPageContext } from './FullPageProvider';
import NavLinkItem from './NavLinkItem';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: '1vmin',
    left: '1rem',
    width: 'auto',
    zIndex: 99,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fafafa',
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleMouseEnter() {
    const { handleMenuOpen } = this.props.fullPageContext.callbacks;

    handleMenuOpen();
  }

  handleMouseLeave() {
    const { handleMenuClose } = this.props.fullPageContext.callbacks;

    handleMenuClose();
  }

  handleItemClick(href) {
    const { handleMenuClose } = this.props.fullPageContext.callbacks;

    window.location = "#" + href;

    handleMenuClose();
  }

  render() {
    const { fullPageContext, classes } = this.props;

    const { state, sections } = fullPageContext;
    const { currentIndex, menuOpen } = state;

    return (
      <header id="navigation" className={classes.root}>
        <div className={classes.sectionNav}>
          <List id="menu"
            className={classes.menu}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            { sections.map((sec,i) => {
              return (
                <NavLinkItem
                  key={"menuItem" + i}
                  page={sec.label}
                  to={sec.hrefLabel}
                  active={currentIndex == i}
                  onClick={this.handleItemClick}
                  menuOpen={menuOpen}/>
              )
              })
            }
          </List>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(
  withFullPageContext(
    Navbar
  )
);
