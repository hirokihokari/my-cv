import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// own
import HistoryItem from './HistoryItem';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
});

const items = [
  {
    period: '2018 / 9 ~ Present',
    title: 'Freelance Web Developer',
    responsibilities: [
      'Design and Structure application through communication with project owner/manager',
      'Develop  code with:',
      ['1. Agile principle / MVP', '2. Behavior Driven procedure', '3. Maintainable, semantic coding'],
    ],
    projects: [
      {
        name: 'Package Purchasing Platform',
        detail: 'A web application with User Interface for purchase a service, using apis from an existing project',
        technologies: [ 'EC2/RDS', 'Ruby on Rails', 'React', 'Chargebee', ]
      },
      {
        name: 'Community SNS',
        detail: 'An SNS service where users/guests can post and reply texts and/or images',
        technologies: [ 'EC2/RDS', 'Ruby on Rails', 'Javascript/jQuery', ]
      },
    ],
  },
  {
    period: '2016 / 3 ~ 2018 / 8',
    title: 'Web Dev at Incubit (Tokyo)',
    responsibilities: [
      ''
    ],
    projects: [
      {
        name: '',
        detail: '',
        technologies: [ '', ],
      }
    ]
  },
];

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: items.map((item, i) => {
        item.open = false;
        item.hidden = false;
        item.id = i;
        return item;
      }),
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemClose = this.handleItemClose.bind(this);
    this.updateAllClosed = this.updateAllClosed.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
  }

  handleItemClick = (id) => (ev) => {
    const { items } = this.state;

    if(items.find(item => item.id == id).open) {
      // closing
      this.handleItemClose(id);
    } else {
      // opening
      this.handleItemOpen(id);
    }
  }

  handleItemClose(id) {
    const { items } = this.state;

    items[id].open = false;
    items.map(item => (item.id != id) && (item.hidden = false));

    this.setState({ items: items });
  }

  handleItemOpen(id) {
    const { items } = this.state;

    items[id].open = true;
    items.map(item => (item.id != id) && (item.hidden = true));

    this.setState({ items: items });
  }

  updateAllClosed() {
    const { items } = this.state;

    this.setState({
      items: items.map(item => {
        item.open = false;
        item.hidden = false;
        return item
      })
    })
  }

  handleClickAway() {
    this.updateAllClosed();
  }

  render() {
    const { classes } = this.props;
    const { items } = this.state;

    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <div className={classes.root}>
          { items.map((item, i) => {
              return (
                <HistoryItem
                  key={i}
                  id={i}
                  open={item.open}
                  hidden={item.hidden}
                  period={item.period}
                  title={item.title}
                  responsibilities={item.responsibilities}
                  projects={item.projects}
                  onClick={this.handleItemClick}/>
              )
            })
          }
        </div>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(History);
