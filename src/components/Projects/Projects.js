import React, { Component } from 'react';
import "./Projects.css";
import colors from "../../colors";
import mobingo from '../../images/mobingo350px.png';
import planit from '../../images/planit350px.png';
import womentor from '../../images/womentor350px.png';
import Modal from '../Modal/Modal';

const projectList = [{
	title: "Mo'Bingo",
	src: mobingo,
	circle: "1",
	description: "Mo'Bingo was my first web-application. As an illustrator I used to have fun making personalized bingo cards for parties but I could never find an online bingo number generator that I liked. I had this project in the back of my mind for the first six months of online JavaScript, HTML, CSS and (halfway through building the app) jQuery classes. Eventually I created mobil friendly bingo cards to go with the number generator. In the end the code might not be what I'd write today but it's part of my journey to becoming a programmer and I will always feel proud of my first web-app, Mo'Bingo. Why don't you give it a try."
},
{
	title: "Plan-It",
	src: planit,
	circle: "2",
	description: "Plan-it was the culmination of all that I learned at Hackbright. Here is a video of me presenting my project. You watch because I can't..."
},
{
	title: "Womentor",
	src: womentor,
	circle: "3",
	description: "Womentor is an app that is still a work in progress. Five other software engineers: Charlotte Sarfati, Milagro Arias, Colleen O'Rourke, Amanda Crawford, Robyn Lundin, and I came up with the idea during a Hackathon. Feel free to check out our README on GitHub."

}];

class Projects extends Component {
	state = {
		showModal: false,
		projectModal: {}
	}

	getModal = project => {
		this.setState({ showModal: true, projectModal: project });
	};

	hideModal = () => {
		this.setState({ showModal: false });
	};


	render() {
		const { currentColor } = this.props;
		return (
			<div className="projectContainer" style={{ backgroundColor: colors[currentColor] }}>
				<div className="projectsTitle" align="center">Projects</div>
				<div className="circleContainer">
					{projectList.map(project => (
						<div key={project.circle} className="projectItem">
							<Modal showModal={this.state.showModal} onHide={this.hideModal} project={this.state.projectModal}></Modal>
							<div className="projectName" align="center">{project.title}</div>
							<button onClick={() => this.getModal(project)}>
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



