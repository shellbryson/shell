import React, { Component } from 'react';

const SKILLS = [
  {
    title: "code",
    skills: [
      {
        title: "ES6",
      },
      {
        title: "React",
      },
      {
        title: "JSX",
      },
      {
        title: "Node",
      },
    ],
  },
  {
    title: "style",
    skills: [
      {
        title: "CSS",
      },
      {
        title: "Sass",
      },
      {
        title: "BEM",
      },
    ],
  },
  {
    title: "Design",
    skills: [
      {
        title: "PhotoShop",
      },
      {
        title: "Sketch",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        title: "Grunt",
      },
      {
        title: "Gulp",
      },
    ],
  },
  {
    title: "User",
    skills: [
      {
        title: "UX",
      },
      {
        title: "A11y",
      },
      {
        title: "Prototyping",
      },
    ],
  },
]

class SkillGrid extends Component {
  state = {};

  // ####################################################
  // RENDER
  // ####################################################

  renderSkills = () => {
    const s = [];
    SKILLS.forEach((skillset, i) => {
      skillset.skills.forEach((skill, x) => {
        s.push(
          <div className={`shell-skillgrid__skill set_${i}`} key={`${i}_${x}`}>
            <span>{skill.title}</span>
          </div>
        );
      });
    });
    return s;
  }
  render() {
    return (
      <div className="shell-skillgrid">
        <div className="shell-skillgrid__skills">
          {this.renderSkills()}
        </div>
      </div>
    );
  }

  // ####################################################
  // LIFECYCLE
  // ####################################################

  componentDidMount() {

  }
}

export default SkillGrid;
