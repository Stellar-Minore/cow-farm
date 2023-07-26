import { useEffect } from 'react';
import gsap from 'gsap';
import Lottie from 'lottie-web';
import { FaChevronRight } from 'react-icons/fa';
import Styles from './milkScreen.module.scss';
import HutLottie from '../../assets/barn-lottie.json';
import MilkBottles from '../../assets/milk-bottles.svg';
import { NavigationButton } from '../navigationButton';

function MilkScreen() {
	useEffect(() => {
		const animationTimeout = setTimeout(() => {
			const timeline = gsap.timeline();

			timeline
				.to('.hutLottieContainer', {
					opacity: 1,
					x: -10,
					duration: 0.3
				})
				.to('.milkText', {
					opacity: 1,
					y: -10,
					duration: 0.3
				})
				.to('.milkBottles', {
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
		}, 500);

		Lottie.loadAnimation({
			container: document.querySelector('#hutLottie'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: HutLottie
		});

		return () => {
			clearTimeout(animationTimeout);
		};
	}, []);

	return (
		<div className={`row ${Styles.mainContainer}`}>
			<div className={`hutLottieContainer col-6 ${Styles.hutLottieContainer}`}>
				<div id="hutLottie" className={Styles.hutLottie} />
			</div>
			<div className={`milkBottlesContainer col-6 ${Styles.milkBottlesContainer}`}>
				<h4 className={`milkText ${Styles.milkText}`}>
					Our chickens have been hard at work, keeping our cows company and
					working day and night as special guards to our milk-storage hut.
				</h4>
				<img className={`milkBottles ${Styles.milkBottles}`} src={MilkBottles} alt="milk bottles" />
				<div className={`nextButton ${Styles.nextButton}`}>
					<NavigationButton
						icon={<FaChevronRight />}
						title='Go Next'
						type='next'
						color='secondary'
						route='/cow-farm/hay-delivery' />
				</div>
			</div>
		</div>
	);
}

export { MilkScreen };
