import React, { Component } from 'react';
import './Modal.css';



class ArtModal extends Component {



	render() {
		if (!this.props.showModal) {
			return null;
		}
		return (
			<div className="modal-art" align="center" >
				<section className="modal-main modal-art-main">
					<div className="topOfModal">
						<button onClick={this.props.onHide} className="hideBtn">X</button>
					</div>
					<div>
						<img className="modalArtImg" alt="" src={this.props.img}></img>
					</div>
				</section>
			</div>
		);
	}
}

export default ArtModal;