import { Routes, Route } from 'react-router-dom';
import Styles from './app.module.scss';
import { LandingScreen } from '../landingScreen';
import { CowFarmScreen } from '../cowFarmScreen';
import { MilkScreen } from '../milkScreen';
import { HayDeliveryScreen } from '../hayDeliveryScreen';
import { ThanksScreen } from '../thanksScreen';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" element={<LandingScreen />} />
					<Route path="/cow-farm" element={<CowFarmScreen />} />
					<Route path="/cow-farm/milk" element={<MilkScreen />} />
					<Route path="/cow-farm/hay-delivery" element={<HayDeliveryScreen />} />
					<Route path="/cow-farm/thanks" element={<ThanksScreen />} />
				</Routes>
			</Layout>
		</div>
	);
}

const Layout = ({ children }) => (
	<div className={Styles.mainContainer}>
		<div className={Styles.contentContainer}>
			{children}
		</div>
	</div>
);

export { App };
