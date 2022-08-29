import { useEffect } from 'react';
import Lottie from 'lottie-web';
import Styles from './milkSection.module.scss';
import HutLottie from '../../../assets/barn-lottie.json';
import MilkBottles from '../../../assets/milk-bottles.svg';

function MilkSection() {
	useEffect(() => {
		Lottie.loadAnimation({
			container: document.querySelector('#hutLottie'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: HutLottie
		});
	}, []);

	return (
		<div className={`row ${Styles.mainContainer}`}>
			<div className={`col-6 ${Styles.hutLottieContainer}`}>
				<div id="hutLottie" />
			</div>
			<div className={`col-6 ${Styles.milkBottlesContainer}`}>
				<h4>
					Our chickens have been hard at work, keeping our cows company and
					working day and night as special guards to our milk-storage hut.
				</h4>
				<img src={MilkBottles} alt="milk bottles" />
			</div>
		</div>
	);
}

export { MilkSection };
