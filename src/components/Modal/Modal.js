import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="modal">
				<section className="modal-main">
					<button className="hideBtn">X</button>
					<h2>Modal</h2>
				</section>
			</div>
		);
	}
}

export default Modal;

