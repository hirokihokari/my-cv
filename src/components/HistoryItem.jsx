import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    // height just enough for summary: Typography h5 + padding/margin total 2rem + border
    maxHeight: 'calc(4rem + 2px)',
    transition: 'max-height 1s, width 1s',
    overflow: 'hidden',
    width: '50%',
    margin: '0 auto',
    '&.open': {
      border: 'solid 1px',
      borderColor: theme.palette.primary.light,
      borderRadius: '1rem',
      maxHeight: 500,
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
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    width: 'calc(100% - 1rem)',
    textTransform: 'none',
    border: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.main,
      cursor: 'pointer',
    },
    '&.open': {
      justifyContent: 'flex-start',
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
  detail: {
    display: 'flex',
    justifyContent: 'space-around',
    opacity: 0,
    transition: 'opacity 2s',
    '&.open': {
      opacity: 1,
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
    detail,
    onClick,
  } = props;

  const rootClasses = classes.root + (open ? " open" : "") + (hidden ? " hidden" : "")
  const summaryClasses = classes.summary + (open ? " open" : "")
  const periodClasses = classes.period + (open ? " open" : "")
  const titleClasses = classes.title + (open ? " open" : "")
  const detailClasses = classes.detail + (open ? " open" : "")

  return (
    <div className={rootClasses} onClick={onClick(id)}>
      <Button variant="outlined" className={summaryClasses}>
        <Typography variant="h5" className={periodClasses}>{period}</Typography>
        <Typography variant="h5" className={titleClasses}>{title}</Typography>
      </Button>
      <div className={detailClasses}>
        <List dense subheader={<ListSubheader>Responsibilities: </ListSubheader>}>
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
        <List dense subheader={<ListSubheader>Projects: </ListSubheader>}>
          { projects.map((p, i) => {
              return (
                <ListItem key={"projectList" + i}>
                  <ListItemText primary={p.name} secondary={p.detail}/>
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </div>
    );
  }

export default withStyles(styles)(HistoryItem);
