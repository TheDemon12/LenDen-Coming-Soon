import React from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import moment from 'moment';
import 'moment-countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faLinkedin,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
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
		// this.myInterval = setInterval(() => {
		// 	const deadline = '2020-07-16';
		// 	const timeLeft = moment(deadline).countdown();
		// 	this.setState({
		// 		date: {
		// 			days: timeLeft.days,
		// 			hours: timeLeft.hours,
		// 			minutes: timeLeft.minutes,
		// 			seconds: timeLeft.seconds,
		// 		},
		// 	});
		// }, 1000);
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
			if (ex.response.status === 400) {
				this.setState({
					error: 'You have already been subscribed!',
				});
			}
		}
	};

	render() {
		// const { days, minutes, hours, seconds } = this.state.date;
		return (
			<React.Fragment>
				<ToastContainer />
				<div className='mainBox'>
					<div className='subBox'>
						<Image src={`${process.env.PUBLIC_URL}/logo.png`} />
						<h1 className='companyName'>Hello there,</h1>
						<p
							className='comingSoon'
							style={{ marginBottom: '2vh', marginTop: '1vh' }}>
							Times are testing. We hope that you are safe and healthy.
						</p>
						<p className='comingSoon'>
							<span style={{ fontWeight: 600 }}>Len Den</span> is an online
							platform which facilitates cashless exchange of used goods using a
							blend of modern technology and the 6000 BC concept of Barter
							System.
						</p>
						<p className='comingSoon'>
							We aim at bringing about a sustainable way of living by lowering
							the dependency on cash as a medium of exchange and adding value to
							your product through our unique valuation system.
						</p>

						<p className='comingSoon'>
							By simply swapping your products you are saving your money, time,
							energy and environment: all at once. So India, let's get to
							swapping!
						</p>
						{/* <p className='comingSoon'>
							We are in the process of redefining exchange and our team is super
							glad that you decided to stick with us from Day 1.
						</p> */}
						{/* <p className='comingSoon'>
							However, we might need some time and patience from you. Our team
							sincerely hopes that you stick with us while we launch our social
							media handles.
						</p> */}

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
								{/* <div>{days}</div>
								<div className='timerElementName'>Days</div> */}
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
								{/* <div>{hours}</div>
								<div className='timerElementName'>Hours</div> */}
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
								{/* <div>{minutes}</div>
								<div className='timerElementName'>Minutes</div> */}
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
								{/* <div>{seconds}</div>
								<div className='timerElementName'>Seconds</div> */}
							</div>
						</div>


						

						<div style={{ margin: '3rem 0' }}>
							<p className='comingSoon' style={{margin: '2rem auto'}}>
								<span>Want to barter your product?</span>
								<div style={{
									width: 'fit-content', 
									color: 'white',
									backgroundColor: 'rgb(26,38,57)', 
									padding: '0.6rem 0.4rem',
									fontSize: '.9rem',
									borderRadius: '4px',
									margin: '1rem auto',

								}}>
									Post your Product
									</div>
							</p>
							<p className='comingSoon'>
								We are coming soon. Stay tuned with us. Subscribe to our
								newsletter and follow us on our social media
							</p>
						</div>

						<div
							style={{
								margin: '2rem 0',
							}}>
							{/* <h1
								style={{
									fontFamily: 'Raleway',
									fontWeight: 800,
									fontSize: '2.4rem',
								}}>
								Follow us here!
							</h1> */}
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									margin: '1rem 0',
								}}>
								<FontAwesomeIcon
									icon={faFacebook}
									style={{
										color: 'rgb(26,38,57)',
										fontSize: '3rem',
										margin: '0 1rem',
										cursor: 'pointer',
									}}
									onClick={() =>
										window.open('https://www.facebook.com/lendenindia01')
									}
								/>
								<FontAwesomeIcon
									icon={faInstagram}
									style={{
										color: 'rgb(26,38,57)',
										fontSize: '3rem',
										margin: '0 1rem',
										cursor: 'pointer',
									}}
									onClick={() =>
										window.open('https://www.instagram.com/lendenindia/?hl=en')
									}
								/>
								<FontAwesomeIcon
									icon={faLinkedin}
									style={{
										color: 'rgb(26,38,57)',
										fontSize: '3rem',
										margin: '0 1rem',
										cursor: 'pointer',
									}}
									onClick={() =>
										window.open(
											'https://www.linkedin.com/company/lendenindia/?viewAsMember=true'
										)
									}
								/>
							</div>
						</div>

						<div
							style={{
								border: '1px solid rgb(26,38,57)',
								borderRadius: '4px',
								marginTop: '6vh',
								width: '80vw',
								maxWidth: '400px',
								padding: '1.5rem 2rem        ',
								margin: '5vh auto ',
							}}>
							<FontAwesomeIcon
								icon={faPaperPlane}
								style={{
									color: 'rgb(26,38,57)',
									fontSize: '35px',
									marginTop: '1vh',
									marginBottom: '1vh',
								}}
							/>
							<p
								className='newsletter'
								style={{ fontSize: '16px', margin: '1rem 0' }}>
								Want to know more about Lenden and barter? Subscribe to our
								newsletter.
							</p>
							{/* <p className='newsletter'>Subscribe now</p> */}
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
										backgroundColor: 'rgb(26,38,57)',
										border: 'none',
									}}>
									Subscribe
								</Button>
							</Form>
						</div>
						<div style={{ margin: '2rem 0' }}>
							<p className='comingSoon'>
								<span>Getting curious? Write to us at </span>
								<a href='mailto: info@lendenindia.in'>info@lendenindia.in</a>
							</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
