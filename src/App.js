import React, { Component } from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import moment from 'moment';
import 'moment-countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {
	state = {
		date: {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		},
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

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
	};

	render() {
		const { days, minutes, hours, seconds } = this.state.date;
		return (
			<div className='mainBox'>
				<div className='subBox'>
					<Image
						src={`${process.env.PUBLIC_URL}/demoLogo.png`}
						style={{ maxWidth: '300px', width: '50vw' }}
					/>
					<h1 className='companyName'>Hola Amigos, </h1>
					<p
						className='comingSoon'
						style={{ marginBottom: '6vh', marginTop: '1vh' }}>
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
						}}>
						<div className='timerElement' style={{ flexBasis: '25%' }}>
							<div>{days}</div>
							<div>Days</div>
						</div>
						<div className='timerElement' style={{ flexBasis: '25%' }}>
							<div>{hours}</div>
							<div>Hours</div>
						</div>
						<div className='timerElement' style={{ flexBasis: '25%' }}>
							<div>{minutes}</div>
							<div>Minutes</div>
						</div>
						<div className='timerElement' style={{ flexBasis: '25%' }}>
							<div>{seconds}</div>
							<div>Seconds</div>
						</div>
					</div>
				</div>
				<div>
					<FontAwesomeIcon
						icon={faPaperPlane}
						style={{
							color: '#fff',
							fontSize: '35px',
							marginTop: '6vh',
							marginBottom: '2vh',
						}}
					/>
					<p className='newsletter'>Do not miss any update from us.</p>
					<p className='newsletter'>Subscribe to our newsletter</p>
					<Form
						style={{ maxWidth: 300, margin: 'auto' }}
						noValidate
						onSubmit={this.handleSubmit}>
						<Form.Group controlId='formBasicEmail'>
							<Form.Control type='email' placeholder='Email Address' />
						</Form.Group>
						<Button
							variant='primary'
							type='submit'
							style={{ backgroundColor: '#ef5350', border: 'none' }}>
							Subscribe
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default App;
