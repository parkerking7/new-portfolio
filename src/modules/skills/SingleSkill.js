import React, { Component } from 'react';

class SingleSkill extends Component {
    render() {
        const skillsList = this.props.skill;
        let rowContent = [];
        let content = [];
        skillsList.forEach((skill, i) => {
            if ((i + 1) % 4 === 0 || (i + 1) === skillsList.length) {
                content.push(
                    <div className="row" key={i}>
                    		{[rowContent]}
        					<div className={`${skillsList[i].size}`} key={i}>
            					<img  alt={skillsList[i].name} src={require(`../../assets/images/${skillsList[i].imgUrl}`)} className="skill-set img-responsive" />
            					<h3>{skillsList[i].name}</h3>
        					</div>

        				</div>)
                rowContent = [];
            } else {
                rowContent.push(
                    <div className={skillsList[i].size} key={i}>
            				<img  alt={skillsList[i].name} src={require(`../../assets/images/${skillsList[i].imgUrl}`)} className="skill-set img-responsive" />
            				<h3>{skillsList[i].name}</h3>
        				</div>)
            }
        });
        return (
            <div>
    		{content}
    		</div>
        );
    }
}

export default SingleSkill;