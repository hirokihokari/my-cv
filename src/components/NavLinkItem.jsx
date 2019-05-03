import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: 'hidden',
    transition: 'height 1s',
    '&.active': {
      order: '-1',
      height: 42,
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.light,
    },
    '&.active, :hover': {
      '&:after': {
        content: '""',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        display: 'block',
        position: 'absolute',
        bottom: '0rem',
        left: 0,
        right: 0,
        margin: '0 5px',
      }
    }
  },
  menuOpen: {
    height: 'auto',
    paddingTop: 11,
    paddingBottom: 11,
  },
  navLink: {
    padding: '0 1rem',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const NavLinkItem = (props) => {
  const {
    classes,
    page,
    to,
    active,
    menuOpen,
    onClick,
  } = props;

  const itemClass = classes.root +
    (menuOpen ? " " + classes.menuOpen : "") +
    (active ? " active" : "");

  return (
    <ListItem
      className={itemClass}
      data-menuanchor={to}
      onClick={() => onClick(to)}>
      <Link
        className={classes.navLink}>
        <Typography variant="body1">{page.toUpperCase()}</Typography>
      </Link>
    </ListItem>
  )
}

export default withStyles(styles)(NavLinkItem);
