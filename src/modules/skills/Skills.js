import React, { Component } from 'react';

import '../../assets/scss/Skills.scss';

import SkillContent from './SkillContent';
import SingleSkill from './SingleSkill';

class Skills extends Component {
    render() {
        let skills = SkillContent.skills;
        return (
            <section id="page-skills" className="page-skills">
    <div className="container">
        <header className="section-header">
            <h2 className="section-title"><span>Skills</span></h2>
            <div className="spacer"></div>
        </header>
          <SingleSkill skill={skills} />
    </div>
</section>
        );
    }
}

export default Skills;