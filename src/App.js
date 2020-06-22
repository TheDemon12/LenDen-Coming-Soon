import React from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import moment from 'moment';
import 'moment-countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import CommonForm from './components/common/commonForm';
import Joi from 'joi-browser';

class App extends CommonForm {
	state = {
		data: {},
		error: '',
		success: '',
		loading: false,
		date: {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		},
	};

	schema = {
		email: Joi.string().email().required().label('Email'),
	};

	componentDidMount = () => {
		this.myInterval = setInterval(() => {
			const deadline = '2020-07-03';

			const timeLeft = moment(deadline).countdown();
			this.setState({
				date: {
					days: timeLeft.days,
					hours: timeLeft.hours,
					minutes: timeLeft.minutes,
					seconds: timeLeft.seconds,
				},
			});
		}, 1000);
	};

	doSubmit = async () => {
		const { data } = this.state;
		this.setState({ loading: true });

		try {
			setTimeout(() => {
				const success = 'Subscribed Successfully!';
				this.setState({ loading: false, success });
			}, 2000);
		} catch (ex) {
			const error = 'Something Failed';
			this.setState({ error });
			this.setState({ loading: false });
		}
	};

	render() {
		const { days, minutes, hours, seconds } = this.state.date;
		return (
			<div className='mainBox'>
				<div className='subBox'>
					<Image
						src={`${process.env.PUBLIC_URL}/logo.png`}
						style={{
							maxWidth: '260px',
							width: '40vw',
							borderRadius: '100%',
							// border: '2px solid #424242',
						}}
					/>
					<h1 className='companyName'>Hola Amigos, </h1>
					<p
						className='comingSoon'
						style={{ marginBottom: '4vh', marginTop: '1vh' }}>
						We hope you are well and safe during these tough times.
					</p>
					<p className='comingSoon'>
						Thank you for visiting our website. We are coming soon to redefine
						exchange. Brace yourselves.
					</p>
					<p className='comingSoon' style={{ marginTop: '0vh' }}>
						We will soon be launching our social media handles.
					</p>
					<div
						className='timerBox'
						style={{
							display: 'flex',
							// border: '1px solid #FDBA49',
							padding: '10px',
							alignItems: 'flex-end',
						}}>
						<div
							className='timerElement'
							style={{ flexBasis: '25%', position: 'relative' }}>
							<Image
								src={`${process.env.PUBLIC_URL}/phone.png`}
								style={{
									maxHeight: '13vw',
									maxWidth: '70%',
								}}
							/>
							<div>{days}</div>
							<div className='timerElementName'>Days</div>
						</div>
						<div
							className='timerElement'
							style={{ flexBasis: '25%', position: 'relative' }}>
							<Image
								src={`${process.env.PUBLIC_URL}/book.png`}
								style={{
									maxHeight: '15vw',
									maxWidth: '60%',
								}}
							/>
							<div>{hours}</div>
							<div className='timerElementName'>Hours</div>
						</div>
						<div
							className='timerElement'
							style={{ flexBasis: '25%', position: 'relative' }}>
							<Image
								src={`${process.env.PUBLIC_URL}/gaming.png`}
								style={{
									maxHeight: '15vw',
									maxWidth: '70%',
								}}
							/>
							<div>{minutes}</div>
							<div className='timerElementName'>Minutes</div>
						</div>
						<div
							className='timerElement'
							style={{ flexBasis: '25%', position: 'relative' }}>
							<Image
								src={`${process.env.PUBLIC_URL}/headphones.png`}
								style={{
									maxHeight: '15vw',
									maxWidth: '70%',
								}}
							/>
							<div>{seconds}</div>
							<div className='timerElementName'>Seconds</div>
						</div>
					</div>
				</div>
				<div
					style={{
						border: '1px solid #FDBA49',
						marginTop: '6vh',
						width: '80vw',
						maxWidth: '400px',
						padding: '15px 25px',
						margin: '5vh auto ',
					}}>
					<FontAwesomeIcon
						icon={faPaperPlane}
						style={{
							color: '#FDBA49',
							fontSize: '35px',
							marginTop: '1vh',
							marginBottom: '2vh',
						}}
					/>
					<p className='newsletter'>Do not miss any update from us.</p>
					<p className='newsletter'>Subscribe to our Newsletter</p>
					<Form
						style={{ maxWidth: 300, margin: 'auto' }}
						noValidate
						onSubmit={this.handleSubmit}>
						{this.renderInput('email', 'Email Address')}
						{this.renderAlert()}
						{this.renderSuccessAlert()}
						{this.renderLoader()}
						<Button
							variant='primary'
							type='submit'
							style={{
								backgroundColor: '#FDBA49',
								border: 'none',
							}}>
							Subscribe
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default App;
