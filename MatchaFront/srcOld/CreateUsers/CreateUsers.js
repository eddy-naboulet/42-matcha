import React, { Component }	from 'react';
import FieldMatcha			from '../components/FieldMatcha';
import BackGroundMatcha		from '../components/BackGroundMatcha';
import SquareMatcha			from '../components/SquareMatcha';
import LeftArrowMatcha		from '../components/PictoLeftArrowMatcha';
import RightArrowMatcha		from '../components/PictoRightArrowMatcha';
import ValidatePictoMatcha	from '../components/ValidatePictoMatcha';
import { browserHistory }	from 'react-router';

import '../Css/CreateUsers.css';
import '../Css/BackGround.css';
import '../Css/KeyFrames.css';
import '../Css/Animation.css';
import '../Css/Picto.css';
import '../Css/KeyFramesSquare.css';
import '../Css/KeyFramesPicto.css';
import '../Css/Square.css';
import '../Css/fieldsMatcha.css';


class CreateUsers extends Component {
  state = {
	  createUsersContainer: 'createUsersContainer',
	  formCreateUsers: 'CreateUsers',
	  stepDisplay: 0,
	  spanClassname: 'input input--hoshi',
	  labelClassName: 'input__label input__label--hoshi input__label--hoshi-color-1',
	  titleClassname: 'input__label-content input__label-content--hoshi',
	  sectionClassname: 'content',
	  sectionUserName: 'content',
	  sectionEmail: 'content',
	  sectionFirstName: 'isInactive',
	  sectionLastName: 'isInactive',
	  sectionPassword: 'isInactive',
	  sectionPasswordConfirm: 'isInactive',
	//   titleClassname: 'input__label-content input__label-content--hoshi',
	  formFieldUserName: 'input__field input__field--hoshi isAnimatedIn',
	  formFieldEmail: 'input__field input__field--hoshi isAnimatedIn',
	  formFieldFirstName: 'FieldMatcha isInactive',
	  formFieldLastName: 'FieldMatcha isInactive',
	  formFieldPassword: 'FieldMatcha isInactive',
	  formFieldPasswordConfirm: 'FieldMatcha isInactive',
	  bgS1: 'bgS1',
	  bgS2: 'bgS2',
	  bgS3: 'bgS3',
	  bgS4: 'bgS4',
	  spBH1: 'spBH1',
	  spBH2: 'spBH2',
	  sF1: 'sF1',
	  sF2: 'sF2',
	  sF3: 'sF3',
	  sF4: 'sF4',
	  lABHP: 'SvgPicto',
	  lABHS: 'SvgPicto',
	  ValidatePictoPolyline: 'isInactive',
	  ValidatePictoSvg: 'isInactive',
	  SvgPictoLogin: 'SvgPicto',
	  LeftArrowPictoPolyline: 'isInactive',
	  RightArrowPictoPolyline: 'SvgPicto',
	  LeftArrowPictoSvg: 'isInactive',
	  RightArrowPictoSvg: 'SvgPicto'

  }

  usernameChange = (e) => {

  }

  passwordChange = (e) => {

  }

  register = (e) => {
	  e.preventDefault();
	  console.log(e.target.username.value);
  }

	goBack = (e) => {
		this.setState({
			bgS1: 'bgS1R',
			bgS2: 'bgS2R',
			bgS3: 'bgS3R',
			bgS4: 'bgS4R',
			sF1: 'sF1R',
			sF2: 'sF2R',
			sF3: 'sF3R',
			sF4: 'sF4R',
			SvgPictoLogin: 'SvgPictoR',
			spBH1: 'spBH1R',
			spBH2: 'spBH2R',
		})
		if (this.state.stepDisplay === 0)
		{
			this.setState({
				formFieldUserName: 'FieldMatcha isAnimatedOut',
				formFieldEmail: 'FieldMatcha isAnimatedOut',
			})
		}
		if (this.state.stepDisplay === 1)
		{
			this.setState({
				formFieldFirstName: 'FieldMatcha isAnimatedOut',
				formFieldLastName: 'FieldMatcha isAnimatedOut',
			})
		}
		if (this.state.stepDisplay === 2)
		{
			this.setState({
				formFieldPassword: 'FieldMatcha isAnimatedOut',
				formFieldPasswordConfirm: 'FieldMatcha isAnimatedOut',
			})
		}
		setTimeout(() => {
			browserHistory.push('/');
		}, 2000);
	}

	BackForm = (e) => {
		if (this.state.stepDisplay === 1)
		{
			this.setState({
			stepDisplay: this.state.stepDisplay - 1,
			LeftArrowPictoPolyline: 'pt-page-scaleDownSVG',
			RightArrowPictoPolyline: 'pt-page-scaleDownSVG',
			formFieldFirstName: 'FieldMatcha pt-page-scaleDown',
			formFieldLastName: 'FieldMatcha pt-page-scaleDown',
			})
			setTimeout(() => {
				this.setState({
					formFieldFirstName: 'FieldMatcha isInactive',
					formFieldLastName: 'FieldMatcha isInactive',
					formFieldUserName: 'FieldMatcha pt-page-scaleUp ',
					formFieldEmail: 'FieldMatcha pt-page-scaleUp',
					LeftArrowPictoSvg: 'isInactive',
					LeftArrowPictoPolyline: 'isInactive',
					RightArrowPictoSvg: 'SvgPicto',
					RightArrowPictoPolyline: 'SvgPicto',

				})
			}, 600);
		}
		if (this.state.stepDisplay === 2)
		{
			this.setState({
				stepDisplay: this.state.stepDisplay - 1,
				formFieldPassword: 'FieldMatcha pt-page-scaleDown',
				formFieldPasswordConfirm: 'FieldMatcha pt-page-scaleDown',
				LeftArrowPictoPolyline: 'pt-page-scaleDownSVG',
				RightArrowPictoPolyline: 'pt-page-scaleDownSVG',
				ValidatePictoSvg: 'pt-page-scaleDownSVG',
				ValidatePictoPolyline: 'pt-page-scaleDownSVG',
				})
				setTimeout(() => {
					this.setState({
						formFieldPassword: 'FieldMatcha isInactive',
						formFieldPasswordConfirm: 'FieldMatcha isInactive',
						formFieldFirstName: 'FieldMatcha pt-page-scaleUp',
						formFieldLastName: 'FieldMatcha pt-page-scaleUp',
						RightArrowPictoSvg: 'SvgPicto centerpicto',
						RightArrowPictoPolyline: 'SvgPicto centerpicto',
						LeftArrowPictoSvg: 'SvgPicto centerpicto',
						LeftArrowPictoPolyline: 'SvgPicto centerpicto',
						ValidatePictoSvg: 'isInactive',
						ValidatePictoPolyline: 'isInactive',
					})
				}, 600);
		}
	}
	NextForm = (e) => {
		if (this.state.stepDisplay === 0)
		{
			this.setState({
				RightArrowPictoPolyline: 'pt-page-scaleDownSVG',
				stepDisplay: this.state.stepDisplay + 1,
				formFieldUserName: 'FieldMatcha pt-page-scaleDown',
				formFieldEmail: 'FieldMatcha pt-page-scaleDown'
			})
			setTimeout(() => {
				this.setState({
					formFieldUserName: 'FieldMatcha isInactive',
					formFieldEmail: 'FieldMatcha isInactive',
					formFieldFirstName: 'FieldMatcha pt-page-scaleUp',
					formFieldLastName: 'FieldMatcha pt-page-scaleUp',
					LeftArrowPictoSvg: 'SvgPicto centerpicto',
					LeftArrowPictoPolyline: 'SvgPicto centerpicto',
					RightArrowPictoSvg: 'SvgPicto centerpicto',
					RightArrowPictoPolyline: 'SvgPicto centerpicto'
				})

			}, 600);
		}
		if (this.state.stepDisplay === 1)
		{
			this.setState({
				stepDisplay: this.state.stepDisplay + 1,
				formFieldFirstName: 'FieldMatcha pt-page-scaleDown',
				formFieldLastName: 'FieldMatcha pt-page-scaleDown',
				LeftArrowPictoPolyline: 'pt-page-scaleDownSVG',
				RightArrowPictoPolyline: 'pt-page-scaleDownSVG',
			})
			setTimeout(() => {
				this.setState({
					formFieldFirstName: 'FieldMatcha isInactive',
					formFieldLastName: 'FieldMatcha isInactive',
					formFieldPassword: 'FieldMatcha pt-page-scaleUp',
					formFieldPasswordConfirm: 'FieldMatcha pt-page-scaleUp',
					LeftArrowPictoSvg: 'SvgPicto centerpicto2',
					LeftArrowPictoPolyline: 'SvgPicto centerpicto2',
					RightArrowPictoSvg: 'isInactive',
					RightArrowPictoPolyline: 'isInactive',
					ValidatePictoSvg: 'SvgPicto',
					ValidatePictoPolyline: 'SvgPicto',
				})
			}, 600);
		}
	}

	render() {
		const {
			formCreateUsers,
			createUsersContainer,
			formFieldUserName,
			formFieldEmail,
			formFieldFirstName,
			formFieldLastName,
			formFieldPassword,
			formFieldPasswordConfirm,
			bgS1,
			bgS2,
			bgS3,
			bgS4,
			spBH1,
			spBH2,
			sF1,
			sF2,
			sF3,
			sF4,
			LeftArrowPictoPolyline,
			RightArrowPictoPolyline,
			LeftArrowPictoSvg,
			RightArrowPictoSvg,
			ValidatePictoSvg,
			ValidatePictoPolyline,
			lABHP,
			lABHS,
			sectionClassname,
			titleClassname,
			labelClassname,
			sectionUserName,
			sectionEmail,
			sectionFirstName,
			sectionLastName,
			sectionPassword,
			sectionPasswordConfirm,
			spanclassname,

		} = this.state
		return (
		  <div className={createUsersContainer}>
			  <BackGroundMatcha
				  bgS="BackGroundColorCreateUsers"
				  bgSB="BackGroundSquareBox"
				  bgS1={bgS1}
				  bgS2={bgS2}
				  bgS3={bgS3}
				  bgS4={bgS4}
				  spBH1={spBH1}
				  spBH2={spBH2}
				  LeftArrowPictoPolyline={lABHP}
				  LeftArrowPictoSvg={lABHS}
				  bgSPB="BackGroundSquarePictoBox"
				  goBack={this.goBack}
			  />
			  <form className={formCreateUsers} onSubmit={this.register}>
				  <SquareMatcha
					  smC1={sF1}
					  smC2={sF2}
					  smC3={sF3}
					  smC4={sF4}
				  />
				  <FieldMatcha
					  sectionClassname={sectionUserName}
					  spanClassname={spanclassname}
					  inputClassname={formFieldUserName}
					  inputType="text"
					  labelClassname={labelClassname}
					  titleClassname={titleClassname}
					  inputTitle="Username"
					  inputChange={this.UserNameChange}
				  />
				  <FieldMatcha
					  sectionClassname={sectionEmail}
					  spanclassname=""
					  inputClassname={formFieldEmail}
					  inputType="text"
					  labelClassname={labelClassname}
					  titleClassname={titleClassname}
					  inputTitle="Email"
					  inputChange={this.EmailChange}
				  />
				  <FieldMatcha
					  sectionClassname={sectionFirstName}
					  spanclassname=""
					  inputClassname={formFieldFirstName}
					  inputType="text"
					  labelClassname={labelClassname}
					  titleClassname={titleClassname}
					  inputTitle="First Name"
					  inputChange={this.FirstNameChange}
				  />
				  <FieldMatcha
					  sectionClassname={sectionLastName}
					  spanclassname=""
					  inputClassname={formFieldLastName}
					  inputType="text"
					  labelClassname={labelClassname}
					  titleClassname={titleClassname}
					  inputTitle="Last Name"
					  inputChange={this.LastNameChange}
				  />
				  <FieldMatcha
					  sectionClassname={sectionPassword}
					  spanclassname=""
					  inputClassname={formFieldPassword}
					  inputType="password"
					  labelClassname={labelClassname}
					  titleClassname={titleClassname}
					  inputTitle="Password"
					  inputChange={this.PasswordChange}
				  />
				  <FieldMatcha
					  sectionClassname={sectionPasswordConfirm}
					  spanclassname=""
					  inputClassname={formFieldPasswordConfirm}
					  inputType="password"
					  labelClassname={labelClassname}
					  titleClassname={titleClassname}
					  inputTitle="Password Confirm"
					  inputChange={this.PasswordConfirmChange}
				  />
				  <div className="BoxPicto">
					  <LeftArrowMatcha
						  LeftArrowPictoPolyline={LeftArrowPictoPolyline}
						  LeftArrowPictoSvg={LeftArrowPictoSvg}
						  oCF={this.BackForm}
					  />
					  <RightArrowMatcha
						  RightArrowPictoPolyline={RightArrowPictoPolyline}
						  RightArrowPictoSvg={RightArrowPictoSvg}
						  oCF={this.NextForm}
					  />
					  <ValidatePictoMatcha
						  ValidatePictoPolyline={ValidatePictoPolyline}
						  ValidatePictoSvg={ValidatePictoSvg}
						  oCF=""
					  />
				</div>
			  </form>
		  	</div>
	  );
  }
}
export default CreateUsers;
