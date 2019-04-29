import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    textAlign: 'center',
    width: 'auto',
    '&.active, :hover': {
      '&:after': {
        content: '""',
        height: '2px',
        background: '#333',
        display: 'block',
        position: 'absolute',
        bottom: '0rem',
        left: 0,
        right: 0,
        margin: '0 5px',
      }
    }
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
  } = props;

  return (
    <ListItem
      className={classes.root}
      data-menuanchor={to || page}>
      <Link
        href={"#" + (to || page)}
        className={classes.navLink}>
        <Typography variant="body1">{page.toUpperCase()}</Typography>
      </Link>
    </ListItem>
  )
}

export default withStyles(styles)(NavLinkItem);
