import React from 'react';
import { useNavigate } from 'react-router';
import Styles from './navigationButton.module.scss';

function NavigationButton(props) {
	const {
		route, type, color, title, icon
	} = props;
	const navigate = useNavigate();

	function pageTransition() {
		navigate(route);
	}

	return (
		<button
			className={`mt-4 mb-0 ${Styles.navigationButton} ${color === 'primary' ? Styles.primary : Styles.secondary}`}
			onClick={() => pageTransition()}>
			{type === 'previous' && icon}
			<span className={Styles.buttonText}>{title}</span>
			{type === 'next' && icon}
		</button>
	);
}

export { NavigationButton };
