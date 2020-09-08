import React from "react";
import "./Footer.css";
import colors from "../../colors";

const Footer = props => (

	<div className="contactDiv" style={{ backgroundColor: colors[props.currentColor] }}>
		<div className="contactTitle" align="center">Contact</div>
		<div className="footerRow">
			<div className="info" align="center">
				<a href="mailto:haven.giguere@gmail.com">
					<div className="contactInfo email">Email</div>
				</a>
			</div>
			<div className="info" align="center">
				<a href="https://www.linkedin.com/in/haven-giguere/" rel="noopener noreferrer" target="_blank">
					<div className="contactInfo linkedInDiv">LinkedIn</div>
				</a>
			</div>
			<div className="info" align="center">
				<a href="https://github.com/TheGreyHaven" rel="noopener noreferrer" target="_blank">
					<div className="contactInfo gitHub">GitHub</div>
				</a>
			</div>
		</div>
	</div>

);




export default Footer;