import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

// material-ui icons
import Close from '@material-ui/icons/Close';

// own
import SquareImage from '../components/SquareImage';

const styles = theme => ({
  root: {
  },
  thumb: {
    width: 100,
    flexGrow: 0,
    flexShrink: 1,
    height: 100,
    position: 'relative',
    top: 0,
    left: 0,
    margin: '0.5rem',
    transition: 'scale .5s, top .3s, left .3s',
    '&:hover': {
      cursor: 'pointer',
    },
    '&.active': {
      zIndex: 5,
      transform: 'scale(1.5)',
      opacity: 0,
    },
    '&:hover': {
      boxShadow: '10px 10px 11px rgba(33,33,33,.2)',
      cursor: 'pointer',
      top: -5,
      left: -5,
    },
  },
  detail: {
    position: 'absolute',
    top: '55%',
    left: '55%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    minHeight: '30vh',
    padding: '3rem',
    visibility: 'hidden',
    opacity: 0,
    zIndex: 1,
    transition: 'visibility 0s, opacity 1s',
    '&.active': {
      visibility: 'visible',
      opacity: 1,
      zIndex: 5,
    },
  },
  closeBtn: {
    float: 'right',
  },
});

class SkillBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      desc,
      list,
      thumbnail,
      mode,
      onClick,
      onClose,
      onClickAway,
      classes
    } = this.props;

    const rootClasses = classes.root + " " + mode;
    const thumbClasses = classes.thumb + " " + mode;
    const detailClasses = classes.detail + " " + mode;

    return (
      <div className={rootClasses}>
        <div className={thumbClasses} onClick={onClick(id)}>
          <SquareImage src={thumbnail}/>
        </div>
        <ClickAwayListener onClickAway={onClickAway}>
          <Paper className={detailClasses}>
            <IconButton className={classes.closeBtn} onClick={onClose} aria-label="Close">
              <Close/>
            </IconButton>
            <Typography variant="h4" gutterBottom>{title}</Typography>
            <Typography variant="body1">{desc}</Typography>
            <List>
              { list.map( (item, i) => {
                  return (
                    <ListItem key={i}>
                      <ListItemText
                        primary={item}
                        secondary="some description text" />
                    </ListItem>
                  )
                })
              }
            </List>
          </Paper>
        </ClickAwayListener>
      </div>
    )
  }
}

export default withStyles(styles)(SkillBox);
