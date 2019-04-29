import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// own
import HistoryItem from './HistoryItem';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
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
          responsibilities: [
            'Design and Structure application through communication with project owner/manager',
            'Develop  code with: 1. Agile principle / MVP, 2. Behavior Driven procedure, 3. Maintainable, semantic coding',
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
          open: false,
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
                responsibilities={item.responsibilities}
                projects={item.projects}
                onClick={this.handleItemClick}/>
            )
          })
        }
      </div>
    );
  }
}

export default withStyles(styles)(History);
