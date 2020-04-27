import React, { Component }		from 'react'

export default class ValidatePictoMatcha extends Component {
	render() {
		const {
			ValidatePictoPolyline,
			ValidatePictoSvg,
			oCF
		} = this.props
		return (
			<div>

			{/* <input
				type="submit"
				className="hiddendshit"
			>
			</input> */}
			<svg
				className={ValidatePictoSvg}
				xmlns="http://www.w3.org/2000/svg"
				width="100px"
				height="80px"
				viewBox="0 0 80 60"
				onClick={oCF}
				>
			<rect
				fill="none"
				width="58"
				height="58"
			/>
			<polyline
				className={ValidatePictoPolyline}
				fill="none"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity="1"
				points="42,20 26,38 16,30"
			/>
			</svg>
		</div>
		);
	}
}
