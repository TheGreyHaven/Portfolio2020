import React, { Component } from 'react';
import "./ColorDots.css";
import colors from "../../colors";

export class ColorDots extends Component {
	render() {
		const { currentColor } = this.props;
		return (
			<div className="dots">
				{Object.keys(colors).map(color => (
					<span
						onClick={() => this.props.changeColor(color)}
						key={color}
						className={`dot ${color === currentColor ? "currentColor" : ""}`}
						style={{ backgroundColor: colors[color] }}>
					</span>
				))
				}
			</div>
		)
	}
}

export default ColorDots


