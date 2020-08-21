import React, { Component } from 'react'
import "./Header.css";
import colors from '../../colors';


class Header extends Component {
	render() {
		const { currentColor } = this.props;
		return (
			<div>
				<div className="container-fluid">
					<div id="dotDiv">
						<div className="LogoCircleSmall" align="center">
							<img alt="Women with glasses" src={require(`../../images/womanGlassesSm${currentColor}.png`)}>
							</img>
						</div>
						<h1 className="myName" style={{ color: colors[currentColor] }}>Haven Giguere</h1>
						<h2 className="jobTitle">Software Engineer</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
