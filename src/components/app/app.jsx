import { Routes, Route } from 'react-router-dom';
import Styles from './app.module.scss';
import { LandingScreen } from '../landingScreen';
import { CowFarmScreen } from '../cowFarmScreen';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" element={<LandingScreen />} />
					<Route path="/cow-farm" element={<CowFarmScreen />} />
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
