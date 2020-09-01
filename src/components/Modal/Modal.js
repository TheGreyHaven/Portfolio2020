import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

	render() {
		if (!this.props.showModal) {
			return null;
		}
		return (
			<div className="modal">
				<section className="modal-main">
					<div className="topOfModal">
						<div className="modalTitle">{this.props.project.title}</div>
						<button onClick={this.props.onHide} className="hideBtn">X</button>
					</div>
					<div className="projectDescription">
						{this.props.project.description}
					</div>
				</section>
			</div>
		);
	}
}

export default Modal;

