import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

// own
import NavLinkItem from '../components/NavLinkItem';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: '1vmin',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'auto',
    zIndex: 99,
  },
  menu: {
    display: 'flex',
  },

});

const Navbar = (props) => {
  const { classes } = props;

  return (
    <header className={classes.root}>
      <Toolbar>
        <List id="menu" className={classes.menu}>
          <NavLinkItem page="page1" className={classes.menuItem}/>
          <NavLinkItem page="page2" className={classes.menuItem}/>
          <NavLinkItem page="page3" className={classes.menuItem}/>
        </List>
      </Toolbar>
    </header>
  );
}

export default withStyles(styles)(Navbar);