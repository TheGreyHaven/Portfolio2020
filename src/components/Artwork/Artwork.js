import React from "react";
import "./Artwork.css";
import colors from "../../colors";
import blueEarth from '../../images/ill-BlueEarthBall2.png';
import doubleSun from '../../images/ill-DoubleSun.png';
import exoUpClose from '../../images/ill-ExoUpClose.png';
import exoAndMoon from '../../images/ill-GasGient&Moon.png';
import gTypeStar from '../../images/ill-GTypeStar.png';
import viewFromMoon from '../../images/ill-Star&GasGientFromMoon.png';
import transitingExo from '../../images/ill-TransitingExoStar.png';
import poster from '../../images/ill-Poster.png';
import planetCores from '../../images/ill-planetCores.png';
import bag from '../../images/ill-sculpt-bag.png';
import hat1 from '../../images/ill-sculpt-hat1.png';
import hat2 from '../../images/ill-sculpt-hat2.png';
import hat3 from '../../images/ill-sculpt-hat3.png';
import boot from '../../images/ill-sculpt-boot.png';
import skull1 from '../../images/ill-sculpt-skull1.png';
import skull2 from '../../images/ill-sculpt-skull2.png';
import figure1 from '../../images/ill-sculpt-figure1.png';
import figure2 from '../../images/ill-sculpt-figure2.png';
import wedBridge from '../../images/ill-wed-bridge.png';
import wedShells from '../../images/ill-wed-shells.png';
import wedGarden from '../../images/ill-wed-garden.png';
import wedUnderSea from '../../images/ill-wed-underSea.png';
import wedSeaMist from '../../images/ill-wed-seaMist.png';
import wedPostCard from '../../images/ill-wed-postCard.png';
import wedMemories from '../../images/ill-wed-memories.png';
import wedGatsby from '../../images/ill-wed-gatsby.png';
import wedWorldsFair from '../../images/ill-wed-wordsFair.png';
import wedCrispedia from '../../images/ill-wed-crispedia.png';
import wedChinaPlate from '../../images/ill-wed-chinaPlate.png';
import wedBird from '../../images/ill-wed-bird.png';
import wedBerries from '../../images/ill-wed-berries.png';
import wedPassport from '../../images/ill-wed-passport.png';
import wedPostcardTable from '../../images/ill-wed-postcardTable.png';
import wedSteamShip from '../../images/ill-wed-steamShip.png';
import wedMovie from '../../images/ill-wed-movie.png';
import wedSTD from '../../images/ill-wed-STD.png';

const scienceImgs = [blueEarth, doubleSun, exoUpClose, exoAndMoon, gTypeStar, viewFromMoon,
	transitingExo, poster, planetCores, bag, hat1, hat2, hat3, boot, skull1, skull2, figure1, figure2];
const artImgs = [wedBridge, wedShells, wedGarden, wedUnderSea, wedSeaMist, wedPostCard, wedMemories,
	wedGatsby, wedWorldsFair, wedCrispedia, wedChinaPlate, wedBird, wedBerries, wedPassport, wedPostcardTable,
	wedSteamShip, wedMovie, wedSTD];

const Artwork = props => (
	<div>
		<div className="illustrationsTitle" align="center">Illustrations / Art</div>
		<div className="illustrationsDiv" align="center" >
			<div>
				Scientific Illustrations / Sculptures
		</div>
			<div className="artworkDiv">
				{scienceImgs.map(scienceImg => (
					<div className="imgDiv">
						<img className="artworkImgs" alt="" src={scienceImg}></img>
					</div>
				))}
			</div>
			<div className="vl" style={{ borderLeftColor: colors[props.currentColor] }}></div>
			<div>
				Wedding Invitations / Cards
		</div>
			<div className="artworkDiv">
				{artImgs.map(artImg => (
					<div className="imgDiv">
						<img className="artworkImgs" alt="" src={artImg}></img>
					</div>
				))}
			</div>
		</div>
	</div>

);


export default Artwork;