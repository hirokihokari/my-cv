import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// own
import HistoryItem from '../components/HistoryItem';

const styles = theme => ({
  root: {
    height: '100%',
  },
});

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          open: false,
          period: '2018 / 9 ~ Present',
          title: 'Freelance Web Developer',
          detail: (
            <List>
              <ListItem>
                <ListItemText
                  primary='アイテム'
                  secondary={'sub text'} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='アイテム'
                  secondary={'sub text'} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='アイテム'
                  secondary={'sub text'} />
              </ListItem>
            </List>
          )
        },
        {
          open: false,
          period: '2016 / 3 ~ 2018 / 8',
          title: 'Web Dev at Incubit (Tokyo)',
          detail: (
            <List>
              <ListItem>
                <ListItemText
                  primary='アイテム'
                  secondary={'sub text'} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='アイテム'
                  secondary={'sub text'} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='アイテム'
                  secondary={'sub text'} />
              </ListItem>
            </List>
          )
        },
      ],
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (id) => (ev) => {
    const { items } = this.state;

    for(let i=0; i<items.length; i++) {
      if(i == id){
        items[i].open = !items[i].open;
      } else {
        items[i].open = false;
      }
    }

    this.setState({ items: items });
  }

  render() {
    console.log('rendered');
    const { classes } = this.props;
    const { items } = this.state;

    return (
      <div className={classes.root}>
        { items.map((item, i) => {
            return (
              <HistoryItem
                key={i}
                id={i}
                open={item.open}
                period={item.period}
                title={item.title}
                detail={item.detail}
                onClick={this.handleItemClick}/>
            )
          })
        }
      </div>
    );
  }
}

export default withStyles(styles)(History);
