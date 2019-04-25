import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';

// material-ui icons
import Close from '@material-ui/icons/Close';

// own
import SquareImage from '../components/SquareImage';

const styles = theme => ({
  root: {
  },
  thumb: {
    border: 'solid 1px rgba(0,0,0,0.3)',
    borderRadius: 10,
    width: 200,
    height: 100,
    margin: '0.5rem',
    '&>*': { lineHeight: '100px' },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
  detail: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '700px',
    minHeight: '30vh',
    padding: '3rem',
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
      familiar_with,
      thumbnail,
      mode,
      onClick,
      onClose,
      classes
    } = this.props;
    console.log(familiar_with);

    return (
      <div className={classes.root}>
        <div className={classes.thumb} onClick={onClick(id)}>
          <Typography variant="h6" align="center">{title}</Typography>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={mode=="active"}
          onBackdropClick={onClose}>
          <Paper className={classes.detail}>
            <IconButton className={classes.closeBtn} onClick={onClose} aria-label="Close">
              <Close/>
            </IconButton>
            <Typography variant="h4" gutterBottom>{title}</Typography>
            <Typography variant="h6" gutterBottom>{desc}</Typography>
            <List dense subheader={<ListSubheader>I&apos;m familiar with: </ListSubheader>}>
              { familiar_with.map( (item, i) => {
                  return (
                    <ListItem key={i}>
                      <ListItemText primary={item}/>
                    </ListItem>
                  )
                })
              }
            </List>
          </Paper>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(SkillBox);
