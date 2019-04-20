import React from 'react';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// own
import SkillBox from '../components/SkillBox';

const styles = theme => ({
  root: {},
});

const Skills = (props) => {
  const { classes } = props;

  return (
    <div>
      <SkillBox
        title="Skill1"
      />
      <SkillBox
        title="Skill2"
      />
      <SkillBox
        title="Skill3"
      />
      <SkillBox
        title="Skill4"
      />
    </div>
  );
}

export default withStyles(styles)(Skills);
