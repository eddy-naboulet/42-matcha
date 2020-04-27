import React, { Component }		from 'react'

export default class RightArrowMatcha extends Component {
	render() {
		const {
			RightArrowPictoPolyline,
			RightArrowPictoSvg,
			oCF
		} = this.props
		return (
			<svg
				className={RightArrowPictoSvg}
				xmlns="http://www.w3.org/2000/svg"
				width="20px"
				height="80px"
				viewBox="0 0 50 80"
				onClick={oCF}
				>
			<polyline
				className={RightArrowPictoPolyline}
				fill="none"
				stroke="black"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity="1"
				points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
			</svg>
		);
	}
}
