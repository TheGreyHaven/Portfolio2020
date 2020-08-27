import React, { Component } from 'react';
import "./Projects.css";
import colors from "../../colors";

class Projects extends Component {

	render() {
		const { currentColor } = this.props;
		return (
			<div className="projectContainer" style={{ backgroundColor: colors[currentColor] }}>
				<div className="projectsTitle" align="center">Projects</div>
				<div className="circleContainer">
					<div className="projectItem" align="center">
						<div className="projectName" align="center">Mo'Bingo</div>
						<div className="projectCircle"></div>
					</div>
					<div className="projectItem" align="center">
						<div className="projectName" align="center">Plan-It</div>
						<div className="projectCircle"></div>
					</div>
					<div className="projectItem" align="center">
						<div className="projectName" align="center">Womentor</div>
						<div className="projectCircle"></div>
					</div>
				</div>
			</div>
		);
	}
}


export default Projects
