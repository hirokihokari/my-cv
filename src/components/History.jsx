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

const items = [
  {
    period: '2018 / 9 ~ Present',
    title: 'Freelance Web Developer',
    responsibilities: [
      'Design, structure, host, and maintain application',
      'Develop code with:',
      ['1. Agile principle / MVP', '2. Behavior Driven procedure', '3. Maintainable, semantic coding'],
      'Offer reasonable develop plan for the client on a case-by-case basis',
    ],
    projects: [
      {
        name: 'Package Purchasing Platform',
        detail: 'A web application with User Interface for purchase a service, using apis from an existing project',
        implementation: [
          'nginx as web server, RoR(puma) as application server, and postgresql as database; all on AWS',
          'Rails serves as middleman between frontend, service server(existing service), and Chargebee',
          'Modulize DOM(-esque) with React',
        ]
      },
      {
        name: 'Community SNS',
        detail: 'An SNS service where users/guests can post and reply texts and/or images',
        implementation: [
          'nginx as web server, RoR(puma) as application server, and postgresql as database',
          'Mostly RoR oriented; renders "views" with RoR and updates displayed data with ajax requests',
        ]
      },
    ],
  },
  {
    period: '2016 / 3 ~ 2018 / 8',
    title: 'Web Dev at Incubit (Tokyo)',
    responsibilities: [
      'Coding for web applications with Rails and javascript',
      'Coding for hybrid apps using either Cordova or Ionic with angular(v1)',
      'Maintenance/Update tasks for existing projects',
    ],
    projects: [
      {
        name: 'Property Rental Service',
        detail: 'A hybrid app matching owners of properties and renters',
        implementation: [
          'Ionic to compile web code as mobile apps(Andriod/iOS)',
          'Use angular(v1) as the frontend framework',
          'Rails accepts queries and return json data to frontend',
        ],
      },
      {
        name: 'Child Daycare Service',
        detail: 'A web app that allows parents to search and book a daycare facilities for their children, and the facility admins to manage their bookings',
        implementation: [
          'Rails to render frontend, as well as return json data to ajax requests',
          'mostly jQuery for frontend(DOM manipulation/ajax requests)',
          'Tests using RSpec are written for backend code',
        ],
      },
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
                  recent={i == 0}
                  onClick={this.handleItemClick}
                  onClickAway={this.handleClickAway}/>
              )
            })
          }
        </div>
    );
  }
}

export default withStyles(styles)(History);
