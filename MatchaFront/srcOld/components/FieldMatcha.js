import React, { Component }			from 'react'

import '../Css/fieldsMatcha.css';

export default class FieldsMatcha extends Component {
	state = {
		spanClassname: 'input input--hoshi',
	}
	onFocusFields = (e) => {
		this.setState({
			spanClassname: 'input input--hoshi input--filled'
		})

	}
	onBlurFields = (e) => {
		if (e.target.value === '')
		{
			this.setState({
				spanClassname: 'input input--hoshi',
			})
		}
		this.setState({

		})
	}
	render() {
		const {
			spanClassname,
		} = this.state
		const {
			inputType,
			inputClassname,
			inputChange,
			inputTitle,
			sectionClassname,
			labelClassname,
			onFocusFields,
			inputName,
		} = this.props
		return (
			<section className={sectionClassname}>
				<span className={spanClassname}>
					<input
						name={inputName}
						className={inputClassname}
						type={inputType}
						onFocus={this.onFocusFields}
						onBlur={this.onBlurFields}
						autoComplete="off"
					/>
					<label className={labelClassname}>
						<span
							className='input__label-content input__label-content--hoshi'>
							{inputTitle}
						</span>
					</label>
				</span>
			</section>
		);

	}
}
