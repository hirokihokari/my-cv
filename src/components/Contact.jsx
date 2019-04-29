import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

// material-ui icons
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import HeadsetMic from '@material-ui/icons/HeadsetMic';

const styles = theme => ({
  root: {
  },
});

const Contact = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <List>
        <ListItem className={classes.item}>
          <ListItemIcon>
            <Phone/>
          </ListItemIcon>
          <ListItemText
            primary="+66909235430">
          </ListItemText>
        </ListItem>
        <ListItem className={classes.item}>
          <ListItemIcon>
            <Email/>
          </ListItemIcon>
          <ListItemText
            primary="hiro.hokari.0722@gmail.com">
          </ListItemText>
        </ListItem>
        <ListItem button component="a" target="_blank" href="http://linkedin.com/in/hiroki-h" className={classes.item}>
          <ListItemIcon>
            <People/>
          </ListItemIcon>
          <ListItemText
            primary="linkedin.com/in/hiroki-h">
          </ListItemText>
        </ListItem>
        <ListItem className={classes.item}>
          <ListItemIcon>
            <HeadsetMic/>
          </ListItemIcon>
          <ListItemText
            primary="Zoom/Skype etc upon request">
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(Contact);
