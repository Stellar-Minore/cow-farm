import { useEffect } from 'react';
import gsap from 'gsap';
import Lottie from 'lottie-web';
import Styles from './heroSection.module.scss';
import CowBlob from '../../../assets/cow-blob.svg';
import { CowChick } from '../../svgComponents/cowChick';
import ChickLottie from '../../../assets/chick-walk.json';
import Cloud from '../../../assets/cloud.svg';

function HeroSection() {
	useEffect(() => {
		const timeline = gsap.timeline();

		timeline.to('.welcomeText', {
			opacity: 1,
			duration: 0.3
		}, 0.3)
			.to('#cloud1', {
				opacity: 1,
				duration: 0.3
			}, '<0.1')
			.to('#cloud2', {
				opacity: 1,
				duration: 0.3
			}, '<0.1')
			.to('.welcoleText2', {
				opacity: 1,
				duration: 0.3
			}, '<0.1')
			.to('.heroBlob', {
				opacity: 1,
				duration: 0.3
			}, '<0.1')
			.to('.heroCow', {
				opacity: 1,
				duration: 0.2
			}, '<0.1');

		Lottie.loadAnimation({
			container: document.querySelector('#chickLottie'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: ChickLottie
		});

		setTimeout(() => {
			const chickWalkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });

			chickWalkTimeline.to('#chickLottieContainer', {
				left: '105vw',
				duration: 30,
				ease: 'none',
				onComplete: () => {
					document.getElementById('chickLottieContainer').styles.left = '-100px';
				}
			});
		}, 2000);
	}, []);

	return (
		<div className={`row w-100 ${Styles.mainContainer}`}>
			<img id="cloud1" className={Styles.cloud1} src={Cloud} alt="cloud" />
			<img id="cloud2" className={Styles.cloud2} src={Cloud} alt="cloud" />
			<div className={`col-6 ${Styles.textContainer}`}>
				<h1 className="welcomeText font-weight-bold">Welcome to</h1>
				<h1 className="welcomeText font-weight-bold">Stellar Cow Farm</h1>
				<h4 className="welcoleText2 mt-4 mb-0">Raising happy cows</h4>
			</div>
			<div className={`col-6 ${Styles.cowContainer}`}>
				<img className={`heroBlob ${Styles.blobImage}`} src={CowBlob} alt="blob" />
				<CowChick className={`heroCow ${Styles.cowImage}`} />
			</div>
			<div id="chickLottieContainer" className={`col-12 ${Styles.chickLottieContainer}`}>
				<div id="chickLottie" />
			</div>
		</div>
	);
}

export { HeroSection };
