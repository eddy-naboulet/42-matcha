import React, { Component }			from 'react'

export default class SquareMatcha extends Component {
	render() {
		const {
			square1,
			square2,
			square3,
			square4,
		} = this.props
		return (
			<div>
				<span className={square1}></span>
				<span className={square2}></span>
				<span className={square3}></span>
				<span className={square4}></span>
			</div>
		);
	}
}
