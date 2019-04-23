import React, { Component } from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';

// own
import SkillBox from '../components/SkillBox';

// images
import ruby_logo from '../images/Ruby_logo.png';
import js_logo from '../images/js_logo.png';
import html_logo from '../images/html_logo.png';
import css_logo from '../images/css_logo.svg';
import aws_logo from '../images/aws_logo.png';

const styles = theme => ({
  root: {
    position: 'relative',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    '&:last-child': { marginBottom: 0 },
  },
});

const be_skills = [
  {
    title: "Ruby",
    desc: "Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro \"Matz\" Matsumoto in Japan.",
    list: ['Ruby on Rails'],
    logo: ruby_logo,
  },
  {
    title: "AWS",
    desc: "Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms to individuals, companies and governments, on a metered pay-as-you-go basis. In aggregate, these cloud computing web services provide a set of primitive, abstract technical infrastructure and distributed computing building blocks and tools. One of these services is Amazon Elastic Compute Cloud, which allows users to have at their disposal a virtual cluster of computers, available all the time, through the Internet. AWS's version of virtual computers emulate most of the attributes of a real computer including hardware (CPU(s) & GPU(s) for processing, local/RAM memory, hard-disk/SSD storage); a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, CRM, etc.",
    list: [],
    logo: aws_logo,
  },
]

const fe_skills = [
  {
    title: "Javascript",
    desc: "JavaScript (/ˈdʒɑːvəˌskrɪpt/),[8] often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    list: ['ES5', 'ES6', 'React'],
    logo: js_logo,
  },
  {
    title: "HTML",
    desc: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.[4]",
    list: [],
    logo: html_logo,
  },
  {
    title: "CSS",
    desc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]",
    list: [],
    logo: css_logo,
  },
];

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: be_skills.concat(fe_skills).map( (sk, i) => {
        sk.mode = "inactive";
        sk.id = i;
        return sk;
      }),
      detailOpen: false,
    };

    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleBoxClick = (id) => (ev) => {
    const { skills } = this.state;

    const active = skills.filter( sk => sk.id == id)[0];
    active.mode = "active";

    this.setState({ skills: skills, detailOpen: true });
  }

  handleClickAway() { this.resetMode() }
  handleClose() { this.resetMode() }

  resetMode() {
    const { skills } = this.state;
    let sks = skills.slice(0);
    for(let i=0; i<sks.length; i++) { sks[i].mode = "inactive"; }

    this.setState({ skills: sks, detailOpen: false });
  }

  render() {
    const { classes } = this.props;
    const { skills, detailOpen } = this.state;

    return (
      <div className={classes.root}>
        <Backdrop open={detailOpen} transitionDuration={{enter: 1000}}/>
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
                list={sk.list}
                thumbnail={sk.logo || ruby_logo}
                onClick={this.handleBoxClick}
                onClose={this.handleClose}
                onClickAway={this.handleClickAway}
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
                list={sk.list}
                thumbnail={sk.logo || ruby_logo}
                onClick={this.handleBoxClick}
                onClose={this.handleClose}
                onClickAway={this.handleClickAway}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
