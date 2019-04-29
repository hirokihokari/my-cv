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
    transition: 'max-height 1s ease-in-out',
    overflow: 'hidden',
    '&.open': {
      maxHeight: 500,
    },
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    width: 'calc(100% - 1rem)',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
  detail: {
    borderLeft: 'solid 1px rgba(0,0,0,0.3)',
    borderRight: 'solid 1px rgba(0,0,0,0.3)',
    borderRadius: 4,
    opacity: 0,
    transition: 'opacity 1s',
    '&.open': {
      opacity: 1,
    }
  },
});

const HistoryItem = (props) => {
  const {
    classes,
    id,
    open,
    period,
    title,
    responsibilities,
    projects,
    detail,
    onClick,
  } = props;

  const rootClasses = classes.root + (open ? " open" : "")
  const detailClasses = classes.detail + (open ? " open" : "")

  return (
    <div className={rootClasses} onClick={onClick(id)}>
      <Button variant="outlined" className={classes.summary}>
        <Typography variant="h5">{period}</Typography>
        <Typography variant="h5">{title}</Typography>
      </Button>
      <div className={detailClasses}>
        <List dense subheader={<ListSubheader>Responsibilities: </ListSubheader>}>
          { responsibilities.map((r, i) => {
              return (
                <ListItem key={"responsibilityList" + i}>
                  <ListItemText primary={r} />
                </ListItem>
              )
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
