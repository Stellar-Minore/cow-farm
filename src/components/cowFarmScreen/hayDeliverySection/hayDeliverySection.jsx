import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Styles from './hayDeliverySection.module.scss';
import HayTruck from '../../../assets/hay-truck.svg';

function HayDeliverySection() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline();

		timeline.to('#hayTruck', {
			right: 'calc(50vw - 200px)',
			scrollTrigger: {
				trigger: '#hayDeliverySection',
				scrub: 3,
				start: 'top bottom-=450',
				end: 'bottom top+=400',
				once: true
			}
		});
	}, []);

	return (
		<div id="hayDeliverySection" className={Styles.mainContainer}>
			<div className={Styles.textContainer}>
				<h2>Look Out !</h2>
				<h5>Hay delivery incoming</h5>
			</div>
			<div className={Styles.truckContainer}>
				<img id="hayTruck" src={HayTruck} alt="Hay Truck" />
				<div className={Styles.road} />
			</div>
		</div>
	);
}

export { HayDeliverySection };
