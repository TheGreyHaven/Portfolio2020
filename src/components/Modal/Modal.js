import React, { Component } from 'react';
import './Modal.css';
import bingoImg from '../../images/moBingoImgs.png';
import womentorImg from '../../images/womentorImg.png';



class Modal extends Component {



	render() {
		if (!this.props.showModal) {
			return null;
		}
		return (
			<div className="modal" align="center" >
				<section className="modal-main">
					<div className="topOfModal">
						<div className="modalTitle">{this.props.project.title}</div>
						<button onClick={this.props.onHide} className="hideBtn">X</button>
					</div>
					<div className="projectDescription">
						{this.props.project.description}
					</div>
					{this.props.project.title === "Mo'Bingo" ?
						<div className="modalDiv" align="center">
							<a href="http://mobingo.club/" rel="noopener noreferrer" target="_blank">
								<img alt="bingo img" className="modalImg" src={bingoImg}></img>
							</a>
							{/* <div className="linkDiv" >
								<a href="http://mobingo.club/" className="modalLinks" rel="noopener noreferrer" target="_blank">MoBingo.club</a>
							</div> */}
							<div className="linkDiv">
								<a href="https://github.com/TheGreyHaven/BingoWebApp" rel="noopener noreferrer" className="modalLinks" target="_blank">GitHub Repository</a>
							</div>
						</div> :
						this.props.project.title === "Plan-It" ?
							<div className="modalDiv" align="center">
								<iframe
									title="planit video"
									responsive="true"
									className="modalVideo"
									src="https://www.youtube.com/embed/IN9C9oIE8CY">
								</iframe>
								<div className="linkDiv">
									<a href="https://github.com/TheGreyHaven/HB-project" className="modalLinks" rel="noopener noreferrer" target="_blank">GitHub Repository</a>
								</div>
							</div> :
							this.props.project.title === "Womentor" ?
								<div className="modalDiv" align="center">
									<a href="https://github.com/TheGreyHaven/WoMentor" rel="noopener noreferrer" target="_blank">
										<img alt="Womentor Img" responsive="true" className="modalImg" src={womentorImg}></img>
									</a>
									<div className="linkDiv">
										<a href="https://github.com/TheGreyHaven/WoMentor" className="modalLinks" rel="noopener noreferrer" target="_blank">GitHub Repository</a>
									</div>
								</div> :
								<div></div>}
				</section>
			</div>
		);
	}
}

export default Modal;

