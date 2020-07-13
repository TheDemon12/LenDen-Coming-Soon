import React from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import moment from 'moment';
import 'moment-countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import CommonForm from './components/common/commonForm';
import Joi from 'joi-browser';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from './services/httpService';

class App extends CommonForm {
	state = {
		data: {
			email: '',
		},
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
			const deadline = '2020-07-16';

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
		const success = 'Subscribed Successfully!';

		try {
			await http.post('https://api2.lendenindia.in/lenden/addemail', data);
			this.setState({ loading: false, success });
		} catch (ex) {
			this.setState({ loading: false });
		}
	};

	render() {
		const { days, minutes, hours, seconds } = this.state.date;
		return (
			<React.Fragment>
				<ToastContainer />
				<div className='mainBox'>
					<div className='subBox'>
						<Image
							src={`${process.env.PUBLIC_URL}/logo.png`}
							style={{
								maxWidth: '260px',
								width: '40vw',
								// borderRadius: '100%',
								// border: '2px solid #424242',
								marginBottom: '2vh',
								// marginTop: '2vh',
							}}
						/>
						<h1 className='companyName'>Hello there!</h1>
						<p
							className='comingSoon'
							style={{ marginBottom: '2vh', marginTop: '1vh' }}>
							Times are testing. We hope that you are safe and healthy.
						</p>
						<p className='comingSoon'>
							We are in the process of redefining exchange and our team is super
							glad that you decided to stick with us from Day 1.
						</p>
						<p className='comingSoon'>
							However, we might need some time and patience from you. Our team
							sincerely hopes that you stick with us while we launch our social
							media handles.
						</p>
						<p className='comingSoon'>
							Getting curious? Write to us at{' '}
							<a href='mailto: info@lendenindia.in'>info@lendenindia.in</a>
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
							<p className='newsletter'>
								No love (news)letters, purely barter.
							</p>
							<p className='newsletter'> Subscribe now</p>
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
				</div>
			</React.Fragment>
		);
	}
}

export default App;
