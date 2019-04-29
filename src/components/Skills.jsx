import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// own
import SkillBox from './SkillBox';

// images
import ruby_logo from '../images/Ruby_logo.png';
import js_logo from '../images/js_logo.png';
import html_logo from '../images/html_logo.png';
import css_logo from '../images/css_logo.svg';
import aws_logo from '../images/aws_logo.png';

const styles = theme => ({
  root: {
    position: 'relative',
    width: '80%',
    maxWidth: 800,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    '&:last-child': { marginBottom: 0 },
  },
});

const SkillTypes = { "backend": 1, "frontend": 2 }

const skills = [
  {
    title: "Ruby",
    desc: "Main language to work on; most of the time, use it within Ruby on Rails. I try to keep it as simple as possible, and recently tend to use it for only \"application server\" specific tasks such as communication with databases and returning api requests. For testing, RSpec is the framework I'm most familiar with.",
    logo: ruby_logo,
    familiar_with: [ 'Ruby on Rails', 'RSpec', ],
    type: SkillTypes.backend,
  },
  {
    title: "AWS",
    desc: "I set up server either here or on Heroku, but for liaison with other services, and scalability, tend to use AWS more often. Usual setup is Route53 -> Load Balancer -> EC2 with redundancy in different AZ -> RDS in private subnet also in different AZ for redundancy.",
    logo: aws_logo,
    familiar_with: [ 'Load Balancer(ALB etc)', 'Route53', 'Certificate Manager', 'EC2', 'RDS', 'S3', ],
    type: SkillTypes.backend,
  },
  {
    title: "Javascript",
    desc: "Usually either use jQuery to handle minor DOM manipulation and/or use React to render DOM. I'm no designer, so often get help of desiged framework/library such as Bootstrap or Material Design.",
    logo: js_logo,
    familiar_with: [ 'ES5', 'ES6', 'React', 'jQuery', 'Bootstrap', 'Material Design', ],
    type: SkillTypes.frontend,
  },
  {
    title: "HTML",
    desc: "Either erb/haml/slim when I render with Rails, and React for more SPA application. Use tags semantically that corresponds with the actual structure of the page.",
    logo: html_logo,
    familiar_with: [ 'html5', 'haml', 'slim', '(erb)', ],
    type: SkillTypes.frontend,
  },
  {
    title: "CSS",
    desc: "Tend to use cssd-in-js style, but adheres to BEM otherwise.",
    logo: css_logo,
    familiar_with: [ 'CSS3', 'SASS(.sass/.scss)', 'BEM', ],
    type: SkillTypes.frontend,
  },
];

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: skills.map( (sk, i) => {
        sk.mode = "inactive";
        sk.id = i;
        return sk;
      }),
    };

    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleBoxClick = (id) => (ev) => {
    const { skills } = this.state;

    const active = skills.filter( sk => sk.id == id)[0];
    active.mode = "active";

    this.setState({ skills: skills });
  }

  handleClose() { this.resetMode() }

  resetMode() {
    const { skills } = this.state;
    let sks = skills.slice(0);
    for(let i=0; i<sks.length; i++) { sks[i].mode = "inactive"; }

    this.setState({ skills: sks });
  }

  render() {
    const { classes } = this.props;
    const { skills, detailOpen } = this.state;

    const be_skills = skills.filter(sk=> sk.type == SkillTypes.backend);
    const fe_skills = skills.filter(sk=> sk.type == SkillTypes.frontend);

    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>Backend</Typography>
        <div className={classes.row}>
          { be_skills.map((sk) => {
            return (
              <SkillBox
                id={sk.id}
                key={sk.id}
                mode={sk.mode}
                title={sk.title}
                desc={sk.desc}
                familiar_with={sk.familiar_with}
                thumbnail={sk.logo || ruby_logo}
                onClick={this.handleBoxClick}
                onClose={this.handleClose}
              />
            )
          })}
        </div>
        <Typography variant="h4" gutterBottom>Frontend</Typography>
        <div className={classes.row}>
          { fe_skills.map((sk) => {
            return (
              <SkillBox
                id={sk.id}
                key={sk.id}
                mode={sk.mode}
                title={sk.title}
                desc={sk.desc}
                familiar_with={sk.familiar_with}
                thumbnail={sk.logo || ruby_logo}
                onClick={this.handleBoxClick}
                onClose={this.handleClose}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
