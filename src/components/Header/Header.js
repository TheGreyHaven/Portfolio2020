import React, { Component } from 'react'
import "./Header.css";
import colors from '../../colors';


class Header extends Component {
	render() {
		const { currentColor } = this.props;
		return (
			<div>
				<div className="container-fluid">
					<div className="logoDiv">
						<div className="LogoCircle" align="center">
							<img alt="Women with glasses" src={require(`../../images/womanGlassesSm${currentColor}.png`)}>
							</img>
						</div>
						<p className="myName" style={{ color: colors[currentColor] }}>Haven Giguere</p>
						<p className="jobTitle">Software Engineer</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
