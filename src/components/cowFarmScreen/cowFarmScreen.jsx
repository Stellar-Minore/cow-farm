import { useEffect } from 'react';
import gsap from 'gsap';
import Lottie from 'lottie-web';
import { FaChevronRight } from 'react-icons/fa';
import Styles from './cowFarmScreen.module.scss';
import CowBlob from '../../assets/cow-blob.svg';
import { CowChick } from '../svgComponents/cowChick';
import ChickLottie from '../../assets/chick-walk.json';
import Cloud from '../../assets/cloud.svg';
import { NavigationButton } from '../navigationButton';

function CowFarmScreen() {
	useEffect(() => {
		const animationTimeout = setTimeout(() => {
			const timeline = gsap.timeline();

			timeline
				.to('#cloud1', {
					x: 10,
					opacity: 1,
					duration: 0.1
				})
				.to('#cloud2', {
					x: 10,
					opacity: 1,
					duration: 0.1
				})
				.to('.mainHeading', {
					opacity: 1,
					duration: 0.3
				})
				.to('.subHeading', {
					opacity: 1,
					duration: 0.2
				})
				.to('.heroBlob', {
					opacity: 1,
					y: 10,
					duration: 0.3
				})
				.to('.heroCow', {
					opacity: 1,
					y: -10,
					duration: 0.3
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
		}, 100);

		Lottie.loadAnimation({
			container: document.querySelector('#chickLottie'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: ChickLottie
		});

		const chickWalkTimeout = setTimeout(() => {
			const chickWalkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });

			chickWalkTimeline.to('#chickLottieContainer', {
				left: '105vw',
				duration: 30,
				ease: 'none',
				onComplete: () => {
					const element = document.getElementById('chickLottieContainer');

					if (element) {
						element.style.left = '-100px';
					}
				}
			});
		}, 2000);

		return () => {
			clearTimeout(chickWalkTimeout);
			clearTimeout(animationTimeout);
		};
	}, []);

	return (
		<div className={`row w-100 ${Styles.mainContainer}`}>
			<img id="cloud1" className={Styles.cloud1} src={Cloud} alt="cloud" />
			<img id="cloud2" className={Styles.cloud2} src={Cloud} alt="cloud" />
			<div className={`col-6 ${Styles.textContainer}`}>
				<h1 className={`mainHeading font-weight-bold ${Styles.mainHeading}`}>
					Welcome to
					<br/>
					Stellar Cow Farm
				</h1>
				<h4 className={`subHeading mt-2 mb-0 ${Styles.subHeading}`}>Raising happy cows</h4>
				<div className={`nextButton mt-4 mb-0 ${Styles.nextButton}`}>
					<NavigationButton
						icon={<FaChevronRight />}
						title='Go Next'
						type='next'
						color='primary'
						route='/cow-farm/milk' />
				</div>
			</div>
			<div className={`col-6 ${Styles.cowContainer}`}>
				<img className={`heroBlob ${Styles.blobImage}`} src={CowBlob} alt="cow blob" />
				<CowChick className={`heroCow ${Styles.cowImage}`} />
			</div>
			<div id="chickLottieContainer" className={`col-12 ${Styles.chickLottieContainer}`}>
				<div id="chickLottie" className={Styles.chickLottie} />
			</div>
		</div>
	);
}

export { CowFarmScreen };
