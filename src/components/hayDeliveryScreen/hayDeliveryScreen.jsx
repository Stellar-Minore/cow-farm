import { useEffect } from 'react';
import gsap from 'gsap';
import { FaChevronRight } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavigationButton } from '../navigationButton';
import Styles from './hayDeliveryScreen.module.scss';
import HayTruck from '../../assets/hay-truck.svg';

function HayDeliveryScreen() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline();

		timeline
			.to('#hayTruck', {
				right: 'calc(50vw - 200px)',
				duration: 0.8
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
				duration: 0.2
			});
	}, []);

	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.textContainer}>
				<h2 className={`mainHeading ${Styles.mainHeading}`}>Look Out!</h2>
				<h5 className={`subHeading ${Styles.subHeading}`}>Hay delivery incoming</h5>
			</div>
			<div className={Styles.truckContainer}>
				<img id="hayTruck" className={Styles.hayTruck} src={HayTruck} alt="Hay Truck" />
				<div className={Styles.road} />
			</div>
			<div className={`nextButton ${Styles.nextButton}`}>
				<NavigationButton
					icon={<FaChevronRight />}
					title='Go Next'
					type='next'
					color='primary'
					route='/cow-farm/thanks' />
			</div>
		</div>
	);
}

export { HayDeliveryScreen };
