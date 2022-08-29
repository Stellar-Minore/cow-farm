import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Styles from './thanksSection.module.scss';

function ThanksSection() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline();

		setTimeout(() => {
			timeline.to('.mainHeading', {
				opacity: 1,
				y: -10,
				duration: 0.5,
				scrollTrigger: {
					trigger: '#thanksSection',
					start: 'top bottom-=550',
				},
				onComplete: () => {
					timeline.to('.subHeading', {
						opacity: 1,
						y: -10,
						duration: 0.5
					});
				}
			});
		}, 500);
	}, []);

	return (
		<div id="thanksSection" className={Styles.mainContainer}>
			<h1 className="mainHeading">Thanks for stopping by!</h1>
			<h2 className="subHeading">Please feel free to give your feedback on the experience</h2>
		</div>
	);
}

export { ThanksSection };
