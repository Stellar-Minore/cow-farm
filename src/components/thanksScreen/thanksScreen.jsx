import { useEffect } from 'react';
import gsap from 'gsap';
import { FaChevronLeft } from 'react-icons/fa';
import { NavigationButton } from '../navigationButton';
import Styles from './thanksScreen.module.scss';

function ThanksScreen() {
	useEffect(() => {
		const timeline = gsap.timeline();

		const animationTimeout = setTimeout(() => {
			timeline.to('.mainHeading', {
				opacity: 1,
				y: -10,
				duration: 0.5,
				onComplete: () => {
					timeline
						.to('.subHeading', {
							opacity: 1,
							y: -10,
							duration: 0.5
						})
						.set('.startButton', {
							opacity: 0,
							x: -10,
						})
						.to('.startButton', {
							opacity: 1,
							x: 0,
							duration: 0.2
						});
				}
			});
		}, 500);

		return () => {
			clearTimeout(animationTimeout);
		};
	}, []);

	return (
		<div id="thanksSection" className={Styles.mainContainer}>
			<h1 className={`mainHeading ${Styles.mainHeading}`}>Thanks for stopping by!</h1>
			<h2 className={`subHeading ${Styles.subHeading}`}>Please feel free to give your feedback on the experience</h2>
			<div className={`startButton ${Styles.startButton}`}>
				<NavigationButton
					icon={<FaChevronLeft />}
					title='Go to Start'
					type='previous'
					color='secondary'
					route='/cow-farm' />
			</div>
		</div>
	);
}

export { ThanksScreen };
