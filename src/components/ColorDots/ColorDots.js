import React, { Component } from 'react';
import "./ColorDots.css";

export class ColorDots extends Component {
	render() {
		const { currentColor } = this.props;
		const colors = { green: '#dce897', purple: '#737892', pink: "#ffc0cb", blue: '#62b9cf' };
		return (
			<div className="dots">
				{Object.keys(colors).map(color => (
					<span onClick={() => this.props.changeColor(color)} key={color} className={`dot ${color === currentColor ? "currentColor" : ""}`} style={{ backgroundColor: colors[color] }}></span>
				))
				}
			</div>
		)
	}
}

export default ColorDots


