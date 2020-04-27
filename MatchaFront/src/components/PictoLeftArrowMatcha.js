import React, { Component }		from 'react'

export default class LeftArrowMatcha extends Component {
	render() {
		const {
			LeftArrowPictoPolyline,
			LeftArrowPictoSvg,
			oCF
		} = this.props
		return (
			<svg
				className={LeftArrowPictoSvg}
				xmlns="http://www.w3.org/2000/svg"
				width="20px"
				height="80px"
				viewBox="0 0 50 80"
				onClick={oCF}
				>
			<polyline
				className={LeftArrowPictoPolyline}
				fill="none"
				stroke="black"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity="1"
				points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
			</svg>
		);
	}
}
