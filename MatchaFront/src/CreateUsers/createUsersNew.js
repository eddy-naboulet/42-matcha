import React, { Component }	from 'react';
import ReactDOM 			from 'react-dom';
import FieldMatcha			from '../components/FieldMatcha';
import SquareMatcha			from '../components/SquareMatcha';
import BackGroundMatcha		from '../components/BackGroundMatcha';
import LeftArrowMatcha		from '../components/PictoLeftArrowMatcha';
import RightArrowMatcha		from '../components/PictoRightArrowMatcha';
import ValidatePictoMatcha	from '../components/ValidatePictoMatcha';
import axios				from 'axios';
import { browserHistory }	from 'react-router';


import '../Css/fieldsMatcha.css';
import '../Css/CreateUsers.css';
import '../Css/BackGround.css';
import '../Css/KeyFrames.css';
import '../Css/Animation.sass';
import '../Css/Picto.css';
import '../Css/KeyFramesSquare.css';
import '../Css/KeyFramesPicto.css';
import '../Css/Square.sass';

export default class createUsersNew extends Component {
	state = {
		stepDisplay: 0,
		square1: 'square1',
		square2: 'square2',
		square3: 'square3',
		square4: 'square4',
		bgSquare1: 'bgSquare1',
		bgSquare2: 'bgSquare2',
		bgSquare3: 'bgSquare3',
		bgSquare4: 'bgSquare4',
		squarePicto1: 'squarePicto1',
		squarePicto2: 'squarePicto2',
		leftArrowPictoSvg: 'SvgPicto',
		leftArrowPictoPolyline: 'SvgPicto',
		validatePictoSvg: 'isInactive',
		leftArrowPictoSvgForm: 'isInactive',
		leftArrowPictoPolylineForm: 'isInactive',
		rightArrowPictoSvgForm: 'SvgPicto',
		rightArrowPictoPolylineForm: 'SvgPicto',
		validatePictoPolyline: 'isInactive',
		sectionUsername: 'pt-page-scaleUp',
		sectionEmail: 'pt-page-scaleUp',
		sectionFirstName: 'isInactive',
		sectionLastName: 'isInactive',
		sectionPassword: 'isInactive',
		sectionPasswordConfirm: 'isInactive',
		inputClassname: 'input__field input__field--hoshi',
		labelClassname: 'input__label input__label--hoshi input__label--hoshi-color-1',
	}
	test = () => {
		const form = ReactDOM.findDOMNode(this.refs.registerForm);
		if (form) this.register(form)
	}
	register = (target) => {
		axios({
			method: 'post',
			url: 'http://localhost:8080/register',
			data: {
				username: target.username.value,
				email: target.email.value,
				firstname: target.firstname.value,
				lastname: target.lastname.value,
				password: target.password.value,
				passwordconfirm: target.passwordconfirm.value,
			}
		})
	}
	goBack = (e) => {
		this.setState({
			square1: 'square1R',
			square2: 'square2R',
			square3: 'square3R',
			square4: 'square4R',
			bgSquare1: 'bgSquare1R',
			bgSquare2: 'bgSquare2R',
			bgSquare3: 'bgSquare3R',
			bgSquare4: 'bgSquare4R',
			squarePicto1: 'squarePicto1R',
			squarePicto2: 'squarePicto2R',
			leftArrowPictoPolyline: 'pt-page-scaleDownSVG',
		})
		if (this.state.stepDisplay === 0)
		{
			this.setState({
				sectionUsername: 'pt-page-scaleDown',
				sectionEmail: 'pt-page-scaleDown',
				rightArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
			})
		}
		if (this.state.stepDisplay === 1)
		{
			this.setState({
				sectionFirstName: 'pt-page-scaleDown',
				sectionLastName: 'pt-page-scaleDown',
				rightArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
				leftArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
			})
		}
		if (this.state.stepDisplay === 2)
		{
			this.setState({
				sectionPassword: 'pt-page-scaleDown',
				sectionPasswordConfirm: 'pt-page-scaleDown',
				leftArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
				validatePictoPolyline: 'pt-page-scaleDownSVG',
			})
		}
		setTimeout(() => {
			browserHistory.push('/');
		}, 2000);
	}

	backForm = (e) => {
		if (this.state.stepDisplay === 1)
		{
			this.setState({
			stepDisplay: this.state.stepDisplay - 1,
			leftArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
			rightArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
			sectionFirstName: 'pt-page-scaleDown',
			sectionLastName: 'pt-page-scaleDown',
			})
			setTimeout(() => {
				this.setState({
					sectionFirstName: 'isInactive',
					sectionLastName: 'isInactive',
					sectionUsername: 'pt-page-scaleUp ',
					sectionEmail: 'pt-page-scaleUp',
					leftArrowPictoSvgForm: 'isInactive',
					leftArrowPictoPolylineForm: 'isInactive',
					rightArrowPictoSvgForm: 'SvgPicto',
					rightArrowPictoPolylineForm: 'SvgPicto',
				})
			}, 600);
		}
		if (this.state.stepDisplay === 2)
		{
			this.setState({
				stepDisplay: this.state.stepDisplay - 1,
				sectionPassword: 'pt-page-scaleDown',
				sectionPasswordConfirm: 'pt-page-scaleDown',
				leftArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
				rightArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
				validatePictoSvg: 'pt-page-scaleDownSVG',
				validatePictoPolyline: 'pt-page-scaleDownSVG',
				})
				setTimeout(() => {
					this.setState({
						sectionPassword: 'isInactive',
						sectionPasswordConfirm: 'isInactive',
						sectionFirstName: 'pt-page-scaleUp',
						sectionLastName: 'pt-page-scaleUp',
						rightArrowPictoSvgForm: 'SvgPicto centerpicto',
						rightArrowPictoPolylineForm: 'SvgPicto centerpicto',
						leftArrowPictoSvgForm: 'SvgPicto centerpicto',
						leftArrowPictoPolylineForm: 'SvgPicto centerpicto',
						validatePictoSvg: 'isInactive',
						validatePictoPolyline: 'isInactive',
					})
				}, 600);
		}
	}
	nextForm = (e) => {
		if (this.state.stepDisplay === 0)
		{
			this.setState({
				stepDisplay: this.state.stepDisplay + 1,
				rightArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
				sectionUsername: 'pt-page-scaleDown',
				sectionEmail: 'FieldMatcha pt-page-scaleDown'
			})
			setTimeout(() => {
				this.setState({
					sectionUsername: 'isInactive',
					sectionEmail: 'isInactive',
					sectionFirstName: 'pt-page-scaleUp',
					sectionLastName: 'pt-page-scaleUp',
					leftArrowPictoSvgForm: 'SvgPicto centerpicto',
					leftArrowPictoPolylineForm: 'SvgPicto centerpicto',
					rightArrowPictoSvgForm: 'SvgPicto centerpicto',
					rightArrowPictoPolylineForm: 'SvgPicto centerpicto'
				})
			}, 600);
		}
		if (this.state.stepDisplay === 1)
		{
			this.setState({
				stepDisplay: this.state.stepDisplay + 1,
				sectionFirstName: 'pt-page-scaleDown',
				sectionLastName: 'pt-page-scaleDown',
				leftArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
				rightArrowPictoPolylineForm: 'pt-page-scaleDownSVG',
			})
			setTimeout(() => {
				this.setState({
					sectionFirstName: 'isInactive',
					sectionLastName: 'isInactive',
					sectionPassword: 'pt-page-scaleUp',
					sectionPasswordConfirm: 'pt-page-scaleUp',
					leftArrowPictoSvgForm: 'SvgPicto centerpicto2',
					leftArrowPictoPolylineForm: 'SvgPicto centerpicto2',
					rightArrowPictoSvgForm: 'isInactive',
					rightArrowPictoPolylineForm: 'isInactive',
					validatePictoSvg: 'SvgPicto',
					validatePictoPolyline: 'SvgPicto',
				})
			}, 600);
		}
	}
	render() {
		const {
			square1,
			square2,
			square3,
			square4,
			bgSquare1,
			bgSquare2,
			bgSquare3,
			bgSquare4,
			squarePicto1,
			squarePicto2,
			leftArrowPictoSvg,
			leftArrowPictoPolyline,
			leftArrowPictoSvgForm,
			leftArrowPictoPolylineForm,
			rightArrowPictoSvgForm,
			rightArrowPictoPolylineForm,
			validatePictoSvg,
			validatePictoPolyline,
			sectionUsername,
			sectionEmail,
			sectionFirstName,
			sectionLastName,
			sectionPassword,
			sectionPasswordConfirm,
			inputClassname,
			labelClassname,
		} = this.state
		return (
			<div className="createUsersContainer">
				<BackGroundMatcha
					bgSquare1={bgSquare1}
					bgSquare2={bgSquare2}
					bgSquare3={bgSquare3}
					bgSquare4={bgSquare4}
					squarePicto1={squarePicto1}
					squarePicto2={squarePicto2}
					leftArrowPictoPolyline={leftArrowPictoPolyline}
					leftArrowPictoSvg={leftArrowPictoSvg}
					goBack={this.goBack}
				/>
				<form className="CreateUsers" onSubmit={this.register} ref="registerForm">
					<SquareMatcha
						square1={square1}
						square2={square2}
						square3={square3}
						square4={square4}
					/>
					<FieldMatcha
						inputType="text"
						inputTitle="Username"
						inputName="username"
						sectionClassname={sectionUsername}
						inputClassname={inputClassname}
						labelClassname={labelClassname}
						inputChange={this.UserNameChange}
					/>
					<FieldMatcha
						inputType="Email"
						inputTitle="Email"
						inputName="email"
						sectionClassname={sectionEmail}
						inputClassname={inputClassname}
						labelClassname={labelClassname}
						inputChange={this.UserNameChange}
					/>
					<FieldMatcha
						inputType="text"
						inputTitle="First Name"
						inputName="firstname"
						sectionClassname={sectionFirstName}
						inputClassname={inputClassname}
						labelClassname={labelClassname}
						inputChange={this.UserNameChange}
					/>
					<FieldMatcha
						inputType="text"
						inputTitle="Last Name"
						inputName="lastname"
						sectionClassname={sectionLastName}
						inputClassname={inputClassname}
						labelClassname={labelClassname}
						inputChange={this.UserNameChange}
					/>
					<FieldMatcha
						inputType="password"
						inputTitle="Password"
						inputName="password"
						sectionClassname={sectionPassword}
						inputClassname={inputClassname}
						labelClassname={labelClassname}
						inputChange={this.UserNameChange}
					/>
					<FieldMatcha
						inputType="password"
						inputTitle="password Confirm"
						inputName="passwordconfirm"
						sectionClassname={sectionPasswordConfirm}
						inputClassname={inputClassname}
						labelClassname={labelClassname}
						inputChange={this.UserNameChange}
					/>
					<div className="BoxPicto">
						<LeftArrowMatcha
							LeftArrowPictoPolyline={leftArrowPictoPolylineForm}
							LeftArrowPictoSvg={leftArrowPictoSvgForm}
							oCF={this.backForm}
						/>
						<RightArrowMatcha
							RightArrowPictoPolyline={rightArrowPictoPolylineForm}
							RightArrowPictoSvg={rightArrowPictoSvgForm}
							oCF={this.nextForm}
						/>
						<ValidatePictoMatcha
							ValidatePictoPolyline={validatePictoPolyline}
							ValidatePictoSvg={validatePictoSvg}
							oCF={this.test}
						/>
				  </div>
				</form>
			</div>
  	  );
    }
  }
