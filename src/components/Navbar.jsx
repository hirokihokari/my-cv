import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

// own
import NavLinkItem from './NavLinkItem';

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
          <NavLinkItem page="Title" className={classes.menuItem}/>
          <NavLinkItem page="Skills" className={classes.menuItem}/>
          <NavLinkItem page="History" className={classes.menuItem}/>
          <NavLinkItem page="Contact" className={classes.menuItem}/>
          <NavLinkItem page="Projects" className={classes.menuItem}/>
          <NavLinkItem page="This&nbsp;Page" to="ThisPage" className={classes.menuItem}/>
        </List>
      </Toolbar>
    </header>
  );
}

export default withStyles(styles)(Navbar);
