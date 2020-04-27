import React, { Component }			from 'react'
import LeftArrowMatcha				from '../components/PictoLeftArrowMatcha';

export default class BackGroundMatcha extends Component {
	render() {
		const {
			bgSquare1,
			bgSquare2,
			bgSquare3,
			bgSquare4,
			squarePicto1,
			squarePicto2,
			SvgPictoLogin,
			leftArrowPictoPolyline,
			leftArrowPictoSvg
		} = this.props
		return (
			<div className="bgSquare">
				<div className="bgSquareBox">
					<span className={bgSquare1}></span>
					<span className={bgSquare2}></span>
					<span className={bgSquare3}></span>
					<span className={bgSquare4}></span>
					<div className="bgSquarePictoBox" onClick={() => this.props.goBack()}>
						<LeftArrowMatcha
							className={SvgPictoLogin}
							LeftArrowPictoPolyline={leftArrowPictoPolyline}
  						  	LeftArrowPictoSvg={leftArrowPictoSvg}
							oCF=""
						/>
						<span className={squarePicto1}></span>
						<span className={squarePicto2}></span>
					</div>
				</div>
			</div>
		);
	}
}
