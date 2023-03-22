import Styles from './cowFarmScreen.module.scss';
import { HeroSection } from './heroSection';
import { MilkSection } from './milkSection';
import { HayDeliverySection } from './hayDeliverySection';
import { ThanksSection } from './thanksSection';

function CowFarmScreen() {
	return (
		<div className={Styles.mainContainer}>
			<HeroSection />
			<MilkSection />
			<HayDeliverySection />
			<ThanksSection />
		</div>
	);
}

export { CowFarmScreen };
