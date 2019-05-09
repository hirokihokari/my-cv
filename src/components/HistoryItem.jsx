import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// material-ui icons
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  '@keyframes fadePopIn': {
    '0%': {opacity: 0},
    '50%': { opacity: 0},
    '75%': { opacity: .5},
    to: {opacity: 1},
  },
  root: {
    // height just enough for summary: Typography h5 + padding/margin total 2rem + border
    maxHeight: 'calc(4rem + 2px)',
    transition: 'all 0.5s ease-in-out',
    overflow: 'hidden',
    width: '50%',
    margin: '0 auto',
    '&.open': {
      border: 'solid 1px',
      borderColor: theme.palette.primary.light,
      borderRadius: '1rem',
      maxHeight: 'calc(100vh - 100px)',
      width: '100%',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingBottom: '1rem',
    },
    '&.hidden': {
      height: 0,
    },
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 'calc(100% - 1rem)',
    border: 'none',
    '&.open': {
      animation: '1s fadePopIn',
      justifyContent: 'space-between',
    },
  },
  summaryButton: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    border: 'none',
    padding: theme.spacing.unit * 2,
    textTransform: 'none',
    '&.open': {
      justifyContent: 'flex-start',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.main,
      cursor: 'pointer',
    },
    '&.open:hover': {
      backgroundColor: 'initial',
      borderColor: 'initial',
      cursor: 'initial',
    },
  },
  period: {
    order: 1,
    transition: 'order 0.1s, opacity 0.5s',
    '&.open': {
      order: 2,
      opacity: 0,
    },
  },
  title: {
    order: 2,
    transition: 'order 0.1s',
    '&.open': {
      order: 1,
      position: 'relative',
      '&:after': {
        content: '""',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        display: 'block',
        position: 'absolute',
        bottom: '0rem',
        left: 0,
        right: 0,
      },
    },
  },
  closeButton: {
    width: 'auto',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
  detail: {
    display: 'flex',
    justifyContent: 'space-around',
    opacity: 0,
    '&.open': {
      opacity: 1,
      transition: 'opacity 1s',
      transitionDelay: '0.7s',
    }
  },
  sublist: {
    padding: '0 2rem',
  },
});

const HistoryItem = (props) => {
  const {
    classes,
    id,
    open,
    hidden,
    period,
    title,
    responsibilities,
    projects,
    recent,
    detail,
    onClick,
    onClickAway,
  } = props;

  const rootClasses          = classes.root          + (open ? " open" : "") + (hidden ? " hidden" : "")
  const summaryClasses       = classes.summary       + (open ? " open" : "")
  const summaryButtonClasses = classes.summaryButton + (open ? " open" : "")
  const closeButtonClasses   = classes.closeButton   + (open ? " open" : "")
  const periodClasses        = classes.period        + (open ? " open" : "")
  const titleClasses         = classes.title         + (open ? " open" : "")
  const detailClasses        = classes.detail        + (open ? " open" : "")

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className={rootClasses} onClick={onClick(id)}>
        <div className={summaryClasses}>
          <Button variant="text" className={summaryButtonClasses}>
            <Typography variant="h5" color={recent ? "primary" : "default"} className={periodClasses}>{period}</Typography>
            <Typography variant="h5" className={titleClasses}>{title}</Typography>
          </Button>
          { open
            && (
              <Button className={closeButtonClasses}>
                <Close/>
              </Button>
            )
          }
        </div>
        <div className={detailClasses}>
          <List subheader={<ListSubheader>Responsibilities: </ListSubheader>}>
            { responsibilities.map((item, i) => {
                {
                  return item instanceof Array
                  ? item.map((subitem, j) => {
                      return (
                        <ListItem className={classes.sublist} key={"responsibilitySubList" + i + j}>
                          <ListItemText primary={subitem}/>
                        </ListItem>
                      )
                    })
                  : (
                    <ListItem key={"responsibilityList" + i}>
                      <ListItemText primary={item} />
                    </ListItem>
                  )
                }
              })
            }
          </List>
          <List subheader={<ListSubheader>Major Projects: </ListSubheader>}>
            { projects.map((p, i) => {
                return (
                  <div key={"projectList" + i}>
                    <ListItem>
                      <ListItemText primary={p.name} secondary={p.detail}/>
                    </ListItem>
                    <List dense>
                      { p.implementation.map((t, j) => {
                        return (
                          <ListItem key={"projectList" + i + "-implementation" + j} dense>
                            <ListItemIcon>
                              <Check />
                            </ListItemIcon>
                            <ListItemText primary={p.implementation[j]}/>
                          </ListItem>
                        )
                      })}
                    </List>
                  </div>
                )
              })
            }
          </List>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default withStyles(styles)(HistoryItem);
