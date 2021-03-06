import React, { Component } from 'react'
import "./Header.css";
import colors from '../../colors';
import funFacts from '../../funFacts';


class Header extends Component {
	render() {
		const { currentColor } = this.props;
		return (
			<div>
				<div className="container-fluid">
					<div className="logoDiv" align="center">
						<div className="LogoCircle">
							<img alt="Women with glasses" src={require(`../../images/womanGlassesSm${currentColor}.png`)}>
							</img>
						</div>
						<p className="myName" style={{ color: colors[currentColor] }}>Haven Giguere</p>
						<div className="jobTitle">
							<p className="engineer">Software Engineer</p>
						</div>
						<div className="fact" style={{ color: colors[currentColor] }}>*Tid Bit: {funFacts[currentColor]}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
