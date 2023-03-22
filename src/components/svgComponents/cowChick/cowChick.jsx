import { useState } from 'react';
import gsap, { Elastic } from 'gsap';
import Styles from './cowChick.module.scss';

function CowChick(props) {
	const [animationPlaying, setAnimationPlaying] = useState(false);

	function earTimeline(isLeft) {
		const earTimeline = gsap.timeline();

		earTimeline.to(isLeft ? '#leftEar' : '#rightEar', {
			rotate: isLeft ? 5 : -5,
			duration: 1,
			ease: Elastic.easeOut.config(2, 0.2),
			onComplete: () => {
				earTimeline.to(isLeft ? '#leftEar' : '#rightEar', {
					rotate: 0,
					duration: 0.1
				});

				setAnimationPlaying(false);
			}
		});
	}

	function moveEars() {
		if (!animationPlaying) {
			setAnimationPlaying(true);

			earTimeline(true);
			earTimeline(false);
		}
	}

	return (
		<svg className={props.className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="850" height="1207.626" viewBox="0 0 1151.833 1207.626">
			<defs>
				<clipPath id="clipPath">
					<path id="Path_69" data-name="Path 69" d="M3618.781-1675.708l-24.993,33.45-13.207,11.526-6.811,15.906-7.814,23.4-3.5,14.31h-20.475s-25.157-7.362-52.6-26.409c-15.9-11.032-34.231-25.649-44.437-46.858-27.435-57.014,13.722-49.878,24.67-50.709,5.5-.417,40.345.473,70.229,4.8C3569.286-1692.038,3618.781-1675.708,3618.781-1675.708Z" transform="translate(1362.787 369.329)" fill="none" stroke="#707070" strokeWidth="1"/>
				</clipPath>
				<clipPath id="clipPath-2">
					<path id="path88" d="M1518.431-2305.56H1386.664v-131.767h131.767Z" transform="translate(-1386.664 2437.327)"/>
				</clipPath>
				<pattern id="pattern" width="1" height="1" patternTransform="matrix(-1, 0, 0, 1, 263.564, 0)" viewBox="0 0 131.782 131.782">
					<use preserveAspectRatio="none" xlinkHref="#image"/>
				</pattern>
				<clipPath id="clipPath-3">
					<path id="path100" d="M1676.1-2383.156h-53.439v-54.171H1676.1Z" transform="translate(-1622.662 2437.327)"/>
				</clipPath>
				<pattern id="pattern-2" width="1" height="1" patternTransform="matrix(-1, 0, 0, 1, 106.907, 0)" viewBox="0 0 53.454 54.186">
					<use preserveAspectRatio="none" xlinkHref="#image-2"/>
				</pattern>
				<clipPath id="clipPath-4">
					<path id="path112" d="M1650.48-2289.222h-27.818v-53.439h27.818Z" transform="translate(-1622.662 2342.661)"/>
				</clipPath>
				<pattern id="pattern-3" width="1" height="1" patternTransform="matrix(-1, 0, 0, 1, 55.664, 0)" viewBox="0 0 27.832 53.454">
					<use preserveAspectRatio="none" xlinkHref="#image-3"/>
				</pattern>
				<clipPath id="clipPath-5">
					<path id="Path_68" data-name="Path 68" d="M3369.817-1653.521l21.07,20.185,13.207,11.526,6.811,15.906,7.814,23.4,3.5,14.31,65.265-8.922s25.157-7.362,52.6-26.409c15.9-11.032,34.231-25.649,44.437-46.858,27.435-57.014-13.722-49.878-24.67-50.709-5.5-.417-40.345.473-70.229,4.8C3460.179-1692.038,3369.817-1653.521,3369.817-1653.521Z" transform="translate(1898.972 363.479)" fill="none" stroke="#707070" strokeWidth="1"/>
				</clipPath>
				<clipPath id="clipPath-6">
					<path id="path88-2" data-name="path88" d="M1386.663-2305.56h131.767v-131.767H1386.663Z" transform="translate(-1386.663 2437.327)"/>
				</clipPath>
				<clipPath id="clipPath-7">
					<path id="path100-2" data-name="path100" d="M1622.662-2383.156H1676.1v-54.171h-53.439Z" transform="translate(-1622.662 2437.327)"/>
				</clipPath>
				<clipPath id="clipPath-8">
					<path id="path112-2" data-name="path112" d="M1622.662-2289.222h27.818v-53.439h-27.818Z" transform="translate(-1622.662 2342.661)"/>
				</clipPath>
				<filter id="Path_41" x="807.581" y="476.924" width="22" height="28.285" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_42" x="819.812" y="473.917" width="22" height="28.61" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-2"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-2"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_43" x="826.646" y="477.222" width="22" height="33.291" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-3"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-3"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_44" x="815.05" y="484.436" width="22" height="27.869" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-4"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-4"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_45" x="816.58" y="501.071" width="22" height="27.122" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-5"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-5"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_46" x="826.646" y="497.748" width="22" height="27.575" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-6"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-6"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_47" x="829.41" y="510.843" width="22" height="29.042" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-7"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-7"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_48" x="836.348" y="499.004" width="22" height="27.638" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-8"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-8"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_49" x="841.538" y="506.193" width="22" height="27.317" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-9"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-9"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_50" x="850.25" y="509.598" width="22" height="27.576" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-10"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-10"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_51" x="854.693" y="499.472" width="23.1" height="27.742" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-11"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-11"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_52" x="846.652" y="494.974" width="23.05" height="27.589" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-12"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-12"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_53" x="852.982" y="484.946" width="23.453" height="27.041" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-13"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-13"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_54" x="845.524" y="480.067" width="22" height="27.514" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-14"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-14"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_55" x="835.549" y="485.273" width="22" height="28.195" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-15"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-15"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_56" x="859.453" y="476.724" width="24.076" height="26.529" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-16"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-16"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_57" x="869.115" y="480.755" width="22" height="28.497" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-17"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-17"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_58" x="861.607" y="488.347" width="22.894" height="28.808" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-18"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-18"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_59" x="868.146" y="499.004" width="22" height="27.292" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-19"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-19"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<filter id="Path_60" x="878.384" y="477.893" width="22" height="29.572" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha"/>
					<feGaussianBlur stdDeviation="3" result="blur-20"/>
					<feFlood floodOpacity="0.031"/>
					<feComposite operator="in" in2="blur-20"/>
					<feComposite in="SourceGraphic"/>
				</filter>
				<image id="image" preserveAspectRatio="none" width="131.782" height="131.782" xlinkHref="data:image/png;base64,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"/>
				<image id="image-2" preserveAspectRatio="none" width="53.454" height="54.186" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABKCAYAAAD353lyAAAABHNCSVQICAgIfAhkiAAAA/dJREFUeJztm01z2zYQht8FQJqUKTmy0tZpp+0kbXLs/7/l2EPuPeSQTvPVOh7HlSVbEklge8jHTC3JBgmAhDV6jvIMsHywWoBriJiZsedWRN8B3Af2kizYS7JgL8mCvSQL9pIs2EuyYC/Jgr0kC5SuluufsgE2HcSZwWzWPiYAEBIkFUgkILFb7tXqwyvvg5JKIZIMMisgDoYQUnqfo0tUiEG5LqHrEnpxCRBBZgVUMYFMByGmC04QSf+DGXoxg17MILIC6dF3EOog+LQ+6bR4mOUcyw+vUM/Pu5zWme4rLDPK6SlWH9+CzfomECO9bUN6cYnVxzf3QlSve7VZXaG8eNtnCFb0fqDRyzmqy9O+w7iV3iUBQDU7h15d9R3GVqKQBADlxfto61M0klhXqK/iPBpEIwn49LVjo/sOY42oJIEN6uuLvqNYIy5JAOp5fJIUvTwDzOe2iCQgT8CjDBgeAESdB8S6gl5dQR4cdj73NhT9cbb2IQFAIsCPhsDjMXjc7du7vp7GJWnrXyoDej0FXk9BjwqY306APO0kKL2cdTKPLXY16e856PmfwNk8cDifYKNhqlUnc9lgXbip1BC/vwFOu1llU153Mo8NzXY3wxAv3gHz8KtsykXwOWxpfgSoDejFu83/KPCI0WXQ8ZvQ6pxE0yXor7DnGb6PNWmNl+dBs4mNhtFxvKK0lkTXFXAaeLczddjxLXF6LaH3l77i2AjvgiT8Mw9bwCPpCLhlUqmBWbgCG0sTzrkLQP9uuEuwY7i3SqbxHPpC4S5pGUfdCIm7pEXlIYzNxHKFx70m6YDFVcRxZcd9qepwkkiEv/Rig7OkoO+5uyKJVKA+OIlobsi5Z5IK8yAi6aZVbIN7JiVhdiCSOySJ88RHHGuIJAsybhvc0+AwzIqLNA8ybhvcJRWhMmmHJPHI/8OINIvmtA04SuJUBvm6yWzofUwX3PpJ4zDFVeySJP6m8BXHV0gmkBHtbICrpG/9X2pQg5H3MV1pL6lIgZH/FZeDB97HdKW1JP7B/4qLNI/ydyftJf145DMOAICKMIuAlpL44QAoPK84EWQeXz0C2mbSk7HnMACZFaBIOpE3aSyJMwk+8b/iauBfvC+aZ9LPY0D4bbSRTCEz/2cuXzSTJAj8+Nh7EKqIs2B/oZEk/n4IZJ77zkSQebxfNaBpJv0SIIvyo2h62duwlsSTPMh9bnkYdxYBTSQ9feh/8jSDjKgDuQ07SaMUOPHfvlCHE+9jhsBKEv/qP4tIJlCRnrBvcqckHiRB3tOS4riXH/i04e5Mejbx/jAkJGTEJ+yb3CqJBwn4J/8Po4rjqBr9d3F7pM8m3l9BQAQ58H/eCsl/Cun+JyrLBHMAAAAASUVORK5CYII="/>
				<image id="image-3" preserveAspectRatio="none" width="27.832" height="53.454" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABJCAYAAABRn1QhAAAABHNCSVQICAgIfAhkiAAAAmZJREFUaIHtmdty2kAMhn9pD4BtsDE4HFIynek00+lhJg/bt+gD9nJ7k6QQfJItw81+lyDvfiPLWhno7+8/AS2Elz3C57ItRAyxwXz3FcTcGNP8DYCQOISntaoUANisbJUCOsTwvAGYNJ0AIpik+w40ik2VLZcWYGM645oz9q2aJltZ1Su0XmzpEU65phIAwGVrsLG9YmvFwvcKIO1sMUzaL1tAjVgoFwiHqbLVXVtvXGfs507TBwBAzDDZVnTNhVh4XCGUiaoUANhsC+b+2QLOxQwh/HjQdgIZB5vKT453sfBlAyReVQoA3Krq7PJ1MACEhUV43qhLsZ/DJsWwawEAv3aAldVAH1y+H3wthypFOOq3B7NYwvjhDxKHl4OizitEcKtxbYeRTlDwyy3YjltX/rh0QNbDCZtpHepivjionLOqYjYpYGapylpqYsQMO7Lgz1ETc6u9aHroQkWM5xlsOqzDN645dgFihi+OGi4XjBZz+aH3uCxhlJhZLGET/eMMGCFGbODyCY6zVwaL+WKaW/jGIDGXlTCLlbbLBWIx9nPYpf4IfrWPKJoYfv04aFSWItrBFwewnU3lckFvMZsUk7WGOnqJsZ+Pmt+H0ClGbODLp5vU1TkduxF8+WnSftVEq5jPH9QGPymNYjYpYDP9l+C+1IrxLLl5sV85fPyArIdfn25e7B+52J3YYLZ5Uh2Rh/JfjAh+cxr9oqrFu5gvjqN+a9CGAcDnu5seN31gt6ru2haaoBBC659c9+K+PaGFKCYlikmJYlKimJQoJiWKSYliUqKYlCgmJYpJiWJSopiUKCblH4nzKJTJLdK/AAAAAElFTkSuQmCC"/>
			</defs>
			<g data-name="Group 97" transform="translate(-4798.464 1424.402)">
				<g className={Styles.leftEar} id="leftEar" data-name="Mask Group 4" clipPath="url(#clipPath)">
					<g id="Group_96" data-name="Group 96" transform="translate(11 5)">
						<g id="g86" transform="translate(4813.807 -1344.558)" clipPath="url(#clipPath-2)">
							<g id="g92" transform="translate(-0.007 -0.007)">
								<rect id="image94" width="131.782" height="131.782" transform="translate(0 0)" fill="url(#pattern)"/>
							</g>
						</g>
						<g id="g98" transform="translate(4762.563 -1344.558)" clipPath="url(#clipPath-3)">
							<g id="g104" transform="translate(-0.007 -0.007)">
								<rect id="image106" width="53.454" height="54.186" transform="translate(0 0)" fill="url(#pattern-2)"/>
							</g>
						</g>
						<g id="g110" transform="translate(4788.185 -1292.583)" clipPath="url(#clipPath-4)">
							<g id="g116" transform="translate(-0.007 -0.007)">
								<rect id="image118" width="27.832" height="53.454" transform="translate(0 0)" fill="url(#pattern-3)"/>
							</g>
						</g>
					</g>
				</g>
				<g className={Styles.rightEar} id="rightEar" data-name="Mask Group 3" transform="translate(-20 10)" clipPath="url(#clipPath-5)">
					<g id="Group_95" data-name="Group 95">
						<g id="g86-2" data-name="g86" transform="translate(5334.649 -1344.558)" clipPath="url(#clipPath-6)">
							<g id="g92-2" data-name="g92" transform="translate(-0.007 -0.007)">
								<use id="image94-2" data-name="image94" transform="translate(0 0)" xlinkHref="#image"/>
							</g>
						</g>
						<g id="g98-2" data-name="g98" transform="translate(5464.221 -1344.558)" clipPath="url(#clipPath-7)">
							<g id="g104-2" data-name="g104" transform="translate(-0.007 -0.007)">
								<use id="image106-2" data-name="image106" transform="translate(0 0)" xlinkHref="#image-2"/>
							</g>
						</g>
						<g id="g110-2" data-name="g110" transform="translate(5464.221 -1292.583)" clipPath="url(#clipPath-8)">
							<g id="g116-2" data-name="g116" transform="translate(-0.007 -0.007)">
								<use id="image118-2" data-name="image118" transform="translate(0 0)" xlinkHref="#image-3"/>
							</g>
						</g>
					</g>
				</g>
				<path id="Path_20" data-name="Path 20" d="M647.629,1433.883c52.853-47.887,34.015-176.571,34.015-176.571l107.12,52.728s-.689,129.992-15.08,154.417S647.629,1433.883,647.629,1433.883Z" transform="translate(4437.027 -1748.82)" fill="#debfa9"/>
				<path id="Path_21" data-name="Path 21" d="M65.6,0c36.232,0,67.581,35.343,68.242,43.884s-7.551,21.279-15.376,28.607c-11.743,11-30.837,15.277-52.866,15.277C29.369,87.768,0,68.12,0,43.884c0-10.591-.787-22.5,7.346-28.049S45.2,0,65.6,0Z" transform="translate(5078.782 -333.093)" fill="#5c4c4a"/>
				<path id="Path_20-2" data-name="Path 20" d="M647.629,1437.485c52.853-47.887,35.58-148.427,35.58-148.427l105.555,24.584s-.689,129.992-15.08,154.417S647.629,1437.485,647.629,1437.485Z" transform="translate(4584.059 -1723.872)" fill="#f5e4d5"/>
				<path id="Path_21-2" data-name="Path 21" d="M65.6,0c36.232,0,67.581,35.343,68.242,43.884s-7.551,21.279-15.376,28.607c-11.743,11-30.837,15.277-52.866,15.277C29.369,87.768,0,68.12,0,43.884c0-10.591-.787-22.5,7.346-28.049S45.2,0,65.6,0Z" transform="translate(5225.814 -304.544)" fill="#5c4c4a"/>
				<path id="Path_20-3" data-name="Path 20" d="M647.629,1440.631c52.853-47.887,43.238-104.378,43.238-104.378l97.9-19.464s-.689,129.992-15.08,154.417S647.629,1440.631,647.629,1440.631Z" transform="translate(4799.021 -1762.048)" fill="#debfa9"/>
				<path id="Path_21-3" data-name="Path 21" d="M65.6,0c36.232,0,67.581,35.343,68.242,43.884s-7.551,21.279-15.376,28.607c-11.743,11-30.837,15.277-52.866,15.277C29.369,87.768,0,68.12,0,43.884c0-10.591-.787-22.5,7.346-28.049S45.2,0,65.6,0Z" transform="translate(5440.775 -339.573)" fill="#5c4c4a"/>
				<path id="Path_20-4" data-name="Path 20" d="M647.629,1428.447c52.853-47.887,34.015-176.571,34.015-176.571L790.988,1209.4s-2.913,225.193-17.3,249.618S647.629,1428.447,647.629,1428.447Z" transform="translate(4942.5 -1714.835)" fill="#f5e4d5"/>
				<path id="Path_21-4" data-name="Path 21" d="M65.6,0c36.232,0,67.581,35.343,68.242,43.884s-7.551,21.279-15.376,28.607c-11.743,11-30.837,15.277-52.866,15.277C29.369,87.768,0,68.12,0,43.884c0-10.591-.787-22.5,7.346-28.049S45.2,0,65.6,0Z" transform="translate(5584.255 -304.544)" fill="#5c4c4a"/>
				<path id="Path_18" data-name="Path 18" d="M1521.132,845.114c32.1-74.862,26.869-97.81,7.335,0s-142.24,132.848-142.24,132.848l-23.668-49.551S1489.033,919.976,1521.132,845.114Z" transform="translate(4370.93 -1644.078)" fill="#f5e4d5"/>
				<path id="Path_19" data-name="Path 19" d="M1541.287,836.2c-13.424-14.206-16.472-43.305,11.946-60.828s-3.957-45.87,5.061-43.02,35.169,5.883,39.9,58.916S1554.711,850.4,1541.287,836.2Z" transform="translate(4351.774 -1638.64)" fill="#5c4c4a"/>
				<ellipse id="Ellipse_5" data-name="Ellipse 5" cx="73.14" cy="43.884" rx="73.14" ry="43.884" transform="translate(5489.531 -446.601) rotate(-3)" fill="#f48f98"/>
				<rect id="Rectangle_1" data-name="Rectangle 1" width="15.071" height="23.05" rx="7.536" transform="translate(5516.979 -384.071) rotate(21)" fill="#f48f98"/>
				<rect id="Rectangle_2" data-name="Rectangle 2" width="15.071" height="23.05" rx="7.536" transform="translate(5556.736 -369.193) rotate(1)" fill="#f48f98"/>
				<rect id="Rectangle_3" data-name="Rectangle 3" width="15.071" height="23.05" rx="7.536" transform="matrix(0.643, -0.766, 0.766, 0.643, 5595.282, -370.902)" fill="#f48f98"/>
				<path id="Path_17" data-name="Path 17" d="M587.93,874.87S517.282,1235.8,817.807,1275.192s370.62,0,370.62,0,224.105-50.464,146.078-296.074-298.285-6.644-448.626-115.227S587.93,874.87,587.93,874.87Z" transform="translate(4427.722 -1685.889)" fill="#f5e4d5"/>
				<path onMouseEnter={() => moveEars()} id="Path_1" data-name="Path 1" d="M557.433,254.182c-47.564,39.656-87.82,47.411-142.728,333.237S814.314,809.454,847.224,801.96c10.242-2.332,124.537-36.531,141.544-122.974s-19.3-162.619-31.924-204.155c-28.7-148.209-25.821-149.075-58.323-191.974C838.882,204.145,605,214.527,557.433,254.182Z" transform="translate(4434.666 -1599.489)" fill="#f5e4d5"/>
				<path id="Path_6" data-name="Path 6" d="M2130.55,228.692" transform="translate(3129.517 -1590.285)" fill="none" stroke="#707070" strokeWidth="1"/>
				<path id="Path_7" data-name="Path 7" d="M938.927,278.161c35.628,40.349,42.068,60.748,55.3,133.484s37.107,145.619,37.107,145.619-78.768,81.7-153.833,33.753-87.812-42.19-78.229-188.957,57.35-163.108,57.35-163.108S903.3,237.812,938.927,278.161Z" transform="translate(4385.507 -1603.86)" fill="#5c4c4a"/>
				<path id="Path_4" data-name="Path 4" d="M627.607,157.665s-14.843-13.352-34-13.8-10.613,8.321-2.02,26.7,5.183,32.094,0,44.208-16.56,27.8-16.56,27.8-7.265,11.263,2.7,15.387S610.8,271.5,621.486,269.067s20.62-5.463,23.612-25.107,6.384-30.531,2.011-52.1A64.818,64.818,0,0,0,627.607,157.665Z" transform="translate(4666.249 -1555.835)" fill="#c8c3c5"/>
				<path id="Path_8" data-name="Path 8" d="M1848.418,228.692s27.859,108.711-34.458,136.831-8.632,107.192-71.506,159.254-74.53,48.471-74.53,48.471,35.078-173.61,46.685-193.172c.418-.7.842-1.461,1.388-2.487,9.345-23.378,27.484-78.412,58.316-103.068C1806.3,248.943,1848.418,228.692,1848.418,228.692Z" transform="translate(3182.006 -1590.285)" fill="#5c4c4a"/>
				<path id="Path_3" data-name="Path 3" d="M594.059,157.665s14.843-13.352,34-13.8,10.612,8.321,2.02,26.7-5.183,32.094,0,44.208,16.56,27.8,16.56,27.8,7.265,11.263-2.7,15.387S610.865,271.5,600.18,269.067s-20.62-5.463-23.612-25.107-6.384-30.531-2.011-52.1A64.818,64.818,0,0,1,594.059,157.665Z" transform="translate(4392.308 -1568.247)" fill="#c8c3c5"/>
				<circle id="Ellipse_1" data-name="Ellipse 1" cx="31.472" cy="31.472" r="31.472" transform="translate(4988.298 -1082.059)" fill="#423633"/>
				<path id="Path_9" data-name="Path 9" d="M31.472,47c8.2,0,29.915-8.6,28.229,0S40.65,66.272,31.472,66.272A31.472,31.472,0,0,1,0,34.8C0,17.418,14.091,47,31.472,47Z" transform="translate(4988.298 -1085.387)" fill="#3d312e"/>
				<circle id="Ellipse_2" data-name="Ellipse 2" cx="8.422" cy="8.422" r="8.422" transform="translate(5022.873 -1074.967)" fill="#fff"/>
				<circle id="Ellipse_3" data-name="Ellipse 3" cx="31.472" cy="31.472" r="31.472" transform="translate(5218.799 -1074.967)" fill="#423633"/>
				<path id="Path_10" data-name="Path 10" d="M31.472,47c8.2,0,29.915-8.6,28.229,0S40.65,66.272,31.472,66.272A31.472,31.472,0,0,1,0,34.8C0,17.418,14.091,47,31.472,47Z" transform="translate(5218.799 -1078.294)" fill="#3d312e"/>
				<circle id="Ellipse_4" data-name="Ellipse 4" cx="8.422" cy="8.422" r="8.422" transform="translate(5253.374 -1067.875)" fill="#fff"/>
				<path id="Path_11" data-name="Path 11" d="M452.544,786.942c102.212,109.65,373.445,71.064,398.589,65.338,10.242-2.332,124.537-36.531,141.544-122.974,3.942-20.036-139.027-65.672-334.423-61.678s-213.7,110.145-213.7,110.145S451.013,785.3,452.544,786.942Z" transform="translate(4430.757 -1649.81)" fill="#fac6ce"/>
				<path id="Path_13" data-name="Path 13" d="M546.33,733.918s16.7-59.346,64.267-12.566c.268.263.652.646,1.039,1.036s-35.627-19.831-65.306,11.529" transform="translate(4457.648 -1632.991)" fill="#f794ab"/>
				<path id="Path_14" data-name="Path 14" d="M611.638,733.918s-16.7-59.346-64.267-12.566c-.268.263-.652.646-1.039,1.036s35.627-19.831,65.305,11.529" transform="translate(4692.388 -1632.991)" fill="#f794ab"/>
				<path id="Path_16" data-name="Path 16" d="M715.059,785.533s-14.6,46.386,30.9,44.683S771.8,782.293,771.8,782.293" transform="translate(4405.982 -1656.843)" fill="none" stroke="#f794ab" strokeLinecap="round" strokeWidth="10"/>
				<path id="Path_22" data-name="Path 22" d="M841.5,1018.881c25,2.464,61.333,24.585,54.172,46.328s-15.493,41.521-82.385,6.228S770.174,969.553,804.828,971.1,816.506,1016.417,841.5,1018.881Z" transform="translate(4402.712 -1681.972)" fill="#5c4c4a"/>
				<path id="Path_23" data-name="Path 23" d="M1135.216,1046.571c-14.764-13.17-61.957-16.011-65.321,27.025s47.006,45.856,63.941,35.06S1149.98,1059.741,1135.216,1046.571Z" transform="translate(4418.888 -1693.848)" fill="#5c4c4a" stroke="#707070" strokeWidth="1"/>
				<path id="Path_24" data-name="Path 24" d="M1214.877,998.889c29.452-26.513,44.99-128.05,44.99-128.05s-8.08-1.06-13.3-1.385c-70.868-4.415-157.078,34.333-236.476,29.984-6.21-.34-37.033-4.626-37.033-4.626S887.469,968.3,900.24,998.889c11.027,26.414,62.8,39.451,109.852,37.223s45.188-31.478,96.384-40.784S1185.426,1025.4,1214.877,998.889Z" transform="translate(4391.615 -1691.651)" fill="#5c4c4a"/>
				<path id="Path_25" data-name="Path 25" d="M1009.846,1272.323c-36.379,0-58.356,34.442-150.925,9.861s-25.053,43.191-25.053,43.191,6.66.894,9.966,1.327c133.433,17.489,221.44,19.448,278.165,16.214l2.005-.117S1102.5,1272.323,1009.846,1272.323Z" transform="translate(4401.694 -1737.399)" fill="#5c4c4a"/>
				<path id="Path_28" data-name="Path 28" d="M1232.176,835.5l-.875,29.542-.329,11.118" transform="translate(4394.76 -1682.622)" fill="none" stroke="#ef793c" strokeLinecap="round" strokeWidth="6"/>
				<path id="Path_29" data-name="Path 29" d="M1211.843,890.727l12.417-6.631,10.49,8.382" transform="translate(4402.073 -1701.201)" fill="none" stroke="#ef793c" strokeLinecap="round" strokeWidth="6"/>
				<path id="Path_30" data-name="Path 30" d="M1363.435,620.78l3.013-21.4s6.423-15.995,9.764-18.858,4.975-4.421,4.975-4.421,4.219-1.753,5.49,1.257,0,10.145,0,10.145l-2.665,9.767,9.3-7.924s6.762-6.046,11.164-5.051,3.212,5.812,3.212,5.812l-9.635,14.818,9.635-2.141s8.254-1.163,11.594,3.248-10.443,8.16-10.443,8.16l-22.161,8.556h-9.444Z" transform="translate(4344.117 -1583.258)" fill="#f09349"/>
				<path id="Path_28-2" data-name="Path 28" d="M1.2,0,.329,29.542,0,40.66" transform="translate(5674.082 -848.346) rotate(-3)" fill="none" stroke="#ef793c" strokeLinecap="round" strokeWidth="6"/>
				<path id="Path_29-2" data-name="Path 29" d="M0,6.631,12.417,0l10.49,8.382" transform="translate(5663.853 -817.751) rotate(-3)" fill="none" stroke="#ef793c" strokeLinecap="round" strokeWidth="6"/>
				<path id="Path_26" data-name="Path 26" d="M61.56,0c19.425,0,35.36,5.542,48.315,22.89C118.1,33.9,121.84,53,125.93,70.15c2.378,9.968,6.973,17.224,6.973,27.444,5.916,5.6,11.875,36.685,5.6,51.3-12.332,28.732-58.574,35.822-84.815,35.822-23.562,0-63.024-8.8-73.806-29.981-5.97-11.729-6.977-22.527-3.4-42.628.608-3.5,14.174-18.659,14.174-22.255,0-27.058,4.117-44.618,17.221-62.435C20.671,10.02,41.938,0,61.56,0Z" transform="translate(5592.293 -1029.649)" fill="#f5cc69"/>
				<path id="Path_27" data-name="Path 27" d="M1139.337,657.87l1.546-11.416s-.912-10.261-10.552-5.176-23.437,12.851-23.437,12.851-17.071,12.232-20.787,17.093-5.33,12.039,1.164,11.432,6.081-1.253,6.081-1.253l.224-.067s-5.956,8.581-1.507,11.424,11.885-3.655,11.885-3.655l.6-.511s-3.387,11.645.894,13.139,9.994-7.969,9.994-7.969v-.395s.595,7.338,4.983,7.012,6.889-4.327,6.889-4.327Z" transform="translate(4451.385 -1607.828)" fill="#f3ba4d"/>
				<path id="Path_31" data-name="Path 31" d="M1084.4,657.87l-1.546-11.416s.912-10.261,10.552-5.176,23.437,12.851,23.437,12.851,17.071,12.232,20.787,17.093,5.33,12.039-1.164,11.432-6.082-1.253-6.082-1.253l-.224-.067s5.956,8.581,1.507,11.424-11.884-3.655-11.884-3.655l-.6-.511s3.387,11.645-.894,13.139-9.994-7.969-9.994-7.969v-.395s-.595,7.338-4.983,7.012-6.889-4.327-6.889-4.327Z" transform="translate(4629.374 -1604.922)" fill="#f3ba4d"/>
				<path id="Path_32" data-name="Path 32" d="M1264.638,619.209l5.738,7.658s3.453,3.945,6.519,0,6.17-7.658,6.17-7.658Z" transform="translate(4380.597 -1596.586)" fill="#ef793c"/>
				<ellipse id="Ellipse_6" data-name="Ellipse 6" cx="6.486" cy="3.397" rx="6.486" ry="3.397" transform="translate(5617.044 -987.885)" fill="#f697ad"/>
				<ellipse id="Ellipse_7" data-name="Ellipse 7" cx="6.486" cy="3.397" rx="6.486" ry="3.397" transform="translate(5676.342 -987.885)" fill="#f697ad"/>
				<circle id="Ellipse_1-2" data-name="Ellipse 1" cx="6.081" cy="6.081" r="6.081" transform="translate(5618.716 -998.315)" fill="#423633"/>
				<path id="Path_9-2" data-name="Path 9" d="M6.081,32.743c1.585,0,5.781-1.662,5.455,0s-3.681,3.723-5.455,3.723A6.081,6.081,0,0,1,0,30.385C0,27.026,2.723,32.743,6.081,32.743Z" transform="translate(5618.716 -1022.618)" fill="#3d312e"/>
				<circle id="Ellipse_2-2" data-name="Ellipse 2" cx="1.627" cy="1.627" r="1.627" transform="translate(5625.397 -996.944)" fill="#fff"/>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_41)">
					<path id="Path_41-2" data-name="Path 41" d="M1218.35,678.262v6.285" transform="translate(-399.77 -193.34)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_42)">
					<path id="Path_42-2" data-name="Path 42" d="M1238.152,673.393V680" transform="translate(-407.34 -191.48)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_43)">
					<path id="Path_43-2" data-name="Path 43" d="M1249.217,678.743v11.291" transform="translate(-411.57 -193.52)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_44)">
					<path id="Path_44-2" data-name="Path 44" d="M1230.443,690.424v5.869" transform="translate(-404.39 -197.99)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_45)">
					<path id="Path_45-2" data-name="Path 45" d="M1232.92,717.354v5.122" transform="translate(-405.34 -208.28)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_46)">
					<path id="Path_46-2" data-name="Path 46" d="M1249.217,711.974v5.575" transform="translate(-411.57 -206.23)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_47)">
					<path id="Path_47-2" data-name="Path 47" d="M1253.691,733.174v7.042" transform="translate(-413.28 -214.33)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_48)">
					<path id="Path_48-2" data-name="Path 48" d="M1264.922,714.007v5.638" transform="translate(-417.57 -207)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_49)">
					<path id="Path_49-2" data-name="Path 49" d="M1273.325,725.647v5.317" transform="translate(-420.79 -211.45)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_50)">
					<path id="Path_50-2" data-name="Path 50" d="M1287.429,731.159v5.576" transform="translate(-426.18 -213.56)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_51)">
					<path id="Path_51-2" data-name="Path 51" d="M1294.992,715.134l.645,5.288" transform="translate(-429.07 -207.43)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_52)">
					<path id="Path_52-2" data-name="Path 52" d="M1281.963,707.84l.608,5.148" transform="translate(-424.09 -204.65)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_53)">
					<path id="Path_53-2" data-name="Path 53" d="M1292.382,691.778l.8,4.388" transform="translate(-428.07 -198.5)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_54)">
					<path id="Path_54-2" data-name="Path 54" d="M1279.779,683.35v5.514" transform="translate(-423.25 -195.28)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_55)">
					<path id="Path_55-2" data-name="Path 55" d="M1263.63,691.778v6.195" transform="translate(-417.08 -198.5)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_56)">
					<path id="Path_56-2" data-name="Path 56" d="M1303.135,678.743l1.081,3.534" transform="translate(-432.18 -193.52)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_57)">
					<path id="Path_57-2" data-name="Path 57" d="M1317.97,684.464v6.5" transform="translate(-437.86 -195.71)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_58)">
					<path id="Path_58-2" data-name="Path 58" d="M1306.646,697.023l-.563,6.477" transform="translate(-433.31 -200.51)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_59)">
					<path id="Path_59-2" data-name="Path 59" d="M1316.4,714.007V719.3" transform="translate(-437.26 -207)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 4798.46, -1424.4)" filter="url(#Path_60)">
					<path id="Path_60-2" data-name="Path 60" d="M1332.978,679.829V687.4" transform="translate(-443.59 -193.94)" fill="none" stroke="#f3bc60" strokeLinecap="round" strokeWidth="4"/>
				</g>
				<circle id="Ellipse_1-3" data-name="Ellipse 1" cx="6.081" cy="6.081" r="6.081" transform="translate(5676.342 -996.651)" fill="#423633"/>
				<path id="Path_9-3" data-name="Path 9" d="M6.081,32.743c1.585,0,5.781-1.662,5.455,0s-3.681,3.723-5.455,3.723A6.081,6.081,0,0,1,0,30.385C0,27.026,2.723,32.743,6.081,32.743Z" transform="translate(5676.342 -1020.954)" fill="#3d312e"/>
				<circle id="Ellipse_2-3" data-name="Ellipse 2" cx="1.627" cy="1.627" r="1.627" transform="translate(5683.023 -995.28)" fill="#fff"/>
			</g>
		</svg>
	);
}

export { CowChick };
