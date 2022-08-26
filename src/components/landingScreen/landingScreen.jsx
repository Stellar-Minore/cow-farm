import React from 'react';
import { useNavigate } from 'react-router-dom';
import Parallax from 'parallax-js';
import gsap from 'gsap';
import Styles from './landingScreen.module.scss';
import LandingBackground from '../../assets/landing-background.svg';

function LandingScreen() {
	const navigate = useNavigate();

	React.useEffect(() => {
		const scene = document.getElementById('scene');
		const parallax = new Parallax(scene);

		parallax.friction(0.01, 0.01);
	}, []);

	function pageTransition() {
		gsap.to('.blobContent', {
			opacity: 0,
			duration: 0.2
		});

		gsap.to('.landingBlob', {
			scale: 10,
			onComplete: () => {
				navigate('/cow-farm');
			}
		}, '<0.5');
	}

	return (
		<div className={Styles.mainScreen}>
			<div onClick={() => { pageTransition(); }} className={`landingBlob ${Styles.blob}`}>
				<div className={`blobContent ${Styles.blobContent}`}>
					<h2>Stellar <br/>Cow Farm</h2>
					<p className="m-0">Click to enter</p>
				</div>
			</div>
			<div id="scene" className={Styles.parallaxContainer}>
				<div data-depth="-0.5" className={Styles.scene}>
					<img src={LandingBackground} alt="cow farm" />
				</div>
			</div>
		</div>
	);
}

export { LandingScreen };
