import React, { Component } from 'react';
import "./ColorDots.css";

export class ColorDots extends Component {
	render() {
		const colors = { green: '#00ff00', purple: '#800080', pink: "#ffc0cb", blue: '#0000ff' };
		return (
			<div className="dots">
				{Object.keys(colors).map(color => (
					<span className={`dot ${colors[color]}`} style={{ backgroundColor: colors[color] }}></span>
				))
				}
			</div>
		)
	}
}

export default ColorDots


