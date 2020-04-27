import React, { Component }	from 'react';
import BackGroundMatcha 	from '../components/BackGroundMatcha';


import '../Css/CreateUsers.css';
import '../Css/BackGround.css';

export default class HomeMatcha extends Component {
	state = {
		bgSquare1: 'bgSquare1',
		bgSquare2: 'bgSquare2',
		bgSquare3: 'bgSquare3',
		bgSquare4: 'bgSquare4',
	}
	render() {
		const {
			bgSquare1,
			bgSquare2,
			bgSquare3,
			bgSquare4,
		} = this.state
		return (
			<div className="createUsersContainer">
			<BackGroundMatcha
				bgSquare1={bgSquare1}
				bgSquare2={bgSquare2}
				bgSquare3={bgSquare3}
				bgSquare4={bgSquare4}
				// squarePicto1="isInactive"
				// squarePicto2="isInactive"
				leftArrowPictoPolyline="isInactive"
				leftArrowPictoSvg="isInactive"
				goBack="isInactive"
			/>
			<loginMatchaPicto
			/>
			<createUsersMatchaPicto
			/>
		</div>
		);
	}

}
