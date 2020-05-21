import React from 'react';

// material-ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {},
});

const Projects = (props) => {
  const { classes } = props;

  const mtf_url = "http://hirokihokari.github.io/markdown_table_formatter"

  return (
    // <div className={classes.root}>
    //   <Typography variant="h6" align="center">Coming up soon</Typography>
    // </div>
    <List>
      <ListItem>
          <Link href={mtf_url} target="_blank">
            <Typography variant="h5">
              * Markdown table formatter. Pretty beta, but functional.
            </Typography>
          </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(styles)(Projects);
