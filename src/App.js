import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import moment from 'moment';
import 'moment-countdown';
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
			const deadline = '2020-07-01';

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

	render() {
		const { days, minutes, hours, seconds } = this.state.date;
		return (
			<div className='mainBox'>
				<div className='subBox'>
					<Image
						src={`${process.env.PUBLIC_URL}/demoLogo.png`}
						style={{ maxWidth: '300px', width: '50vw' }}
					/>
					<h1 className='companyName'>LENDEN</h1>
					<p className='comingSoon'>Our Website is Coming Soon !</p>
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
				<p>Subscribe to our Newsletter ?</p>
			</div>
		);
	}
}

export default App;
