import React, { Component } from 'react';
import "./Projects.css";
import colors from "../../colors";
import mobingo from '../../images/mobingo350px.png';
import planit from '../../images/planit350px.png';
import womentor from '../../images/womentor350px.png';
import Modal from '../Modal/Modal';

const projectList = [{ title: "Mo'Bingo", src: mobingo, circle: "1" },
{ title: "Plan-It", src: planit, circle: "2" },
{ title: "Womentor", src: womentor, circle: "3" }];

class Projects extends Component {
	state = {
		show: false
	}

	showModal = e => {
		this.setState({
			show: true
		});
	};

	render() {
		const { currentColor } = this.props;
		return (
			<div className="projectContainer" style={{ backgroundColor: colors[currentColor] }}>
				<div className="projectsTitle" align="center">Projects</div>
				<div className="circleContainer">
					{projectList.map(project => (
						<div key={project.circle} className="projectItem" align="center">
							<Modal show={this.state.show}></Modal>
							<div className="projectName" align="center">{project.title}</div>
							<button onClick={e => { this.showModal() }}>
								<div className={`projectCircle circle${project.circle}`}>
									<img alt="" src={project.src}></img>
								</div>
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Projects



