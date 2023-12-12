import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { NavigationButton } from '../navigationButton';
import Styles from './hayDeliveryScreen.module.scss';
import HayTruck from '../../assets/hay-truck.svg';

function HayDeliveryScreen() {
	const truckRef = useRef(null);
	const [truckPosition, setTruckPosition] = useState(0);
	const [speed, setSpeed] = useState(0);
	const [buttonIntervalId, setButtonIntervalId] = useState(null);
	const step = 80;
	const acceleration = 0.3;
	const maxSpeed = 10;
	const screenWidth = window.innerWidth;

	useEffect(() => {
		const truck = truckRef.current;
		const truckWidth = truck.getBoundingClientRect().width;
		const initialPosition = screenWidth / 2 - truckWidth / 2;
		setTruckPosition(initialPosition);

		const animationTimeout = setTimeout(() => {
			const timeline = gsap.timeline();

			timeline
				.to('#hayTruck', {
					right: initialPosition,
					duration: 2.0,
				})
				.to('.mainHeading', {
					opacity: 1,
					y: -5,
					duration: 0.3,
				})
				.to('.subHeading', {
					opacity: 1,
					y: 5,
					duration: 0.5,
				})
				.set('.nextButton', {
					opacity: 0,
					x: -10,
				})
				.to('.nextButton', {
					opacity: 1,
					x: 0,
					duration: 0.2,
				});
		});

		return () => {
			clearTimeout(animationTimeout);
		};
	}, [screenWidth]);

	useEffect(() => {
		const handleArrowKeys = (direction) => {
			setTruckPosition((prevPosition) => prevPosition + (direction === 'left' ? step : -step));
		};

		const handleKeyDown = (event) => {
			if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
				handleArrowKeys(event.key === 'ArrowLeft' ? 'left' : 'right');
			}
		};

		const handleKeyUp = (event) => {
			if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
				setSpeed(0);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	useEffect(() => {
		const truck = truckRef.current;
		const truckWidth = truck.getBoundingClientRect().width;

		if (truckPosition <= -truckWidth) {
			setTruckPosition((prevPosition) => prevPosition + screenWidth + truckWidth);
		} else if (truckPosition >= screenWidth) {
			setTruckPosition((prevPosition) => prevPosition - screenWidth - truckWidth);
		}

		const animationFrame = requestAnimationFrame(() => {
			let newSpeed;
			if (truckPosition === 0) {
				newSpeed = 0;
			} else if (truckPosition > 0) {
				newSpeed = speed - acceleration;
				newSpeed = Math.max(-maxSpeed, newSpeed);
			} else {
				newSpeed = speed + acceleration;
				newSpeed = Math.min(maxSpeed, newSpeed);
			}
			setSpeed(newSpeed);

			gsap.to(truck, {
				right: truckPosition + newSpeed,
				duration: 1.0,
				onComplete: () => {
					cancelAnimationFrame(animationFrame);
				},
			});
		});

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	}, [truckPosition, speed, screenWidth]);

	const handleButtonMouseDown = (direction) => {
		setButtonIntervalId(setInterval(() => {
			setTruckPosition((prevPosition) => prevPosition + (direction === 'left' ? step : -step));
		}, 100));
	};

	const handleButtonMouseUp = () => {
		setSpeed(0);
		clearInterval(buttonIntervalId);
	};

	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.textContainer}>
				<h2 className={`mainHeading ${Styles.mainHeading}`}>Look Out!</h2>
				<h5 className={`subHeading ${Styles.subHeading}`}>Hay delivery incoming</h5>
			</div>
			<div className={Styles.truckContainer}>
				<img id="hayTruck" className={Styles.hayTruck} ref={truckRef} src={HayTruck} alt="Hay Truck" />
				<div className={Styles.road} />
			</div>
			<div className={Styles.arrowButtonsContainer}>
				<button
					className={Styles.arrowButton}
					onMouseDown={() => handleButtonMouseDown('left')}
					onMouseUp={handleButtonMouseUp}
					onMouseOut={handleButtonMouseUp}
				>
					<FaChevronLeft />
				</button>
				<button
					className={Styles.arrowButton}
					onMouseDown={() => handleButtonMouseDown('right')}
					onMouseUp={handleButtonMouseUp}
					onMouseOut={handleButtonMouseUp}
				>
					<FaChevronRight />
				</button>
			</div>
			<div className={`nextButton ${Styles.nextButton}`}>
				<NavigationButton
					icon={<FaChevronRight />}
					title="Go Next"
					type="next"
					color="primary"
					route="/cow-farm/thanks"
				/>
			</div>
		</div>
	);
}

export { HayDeliveryScreen };
