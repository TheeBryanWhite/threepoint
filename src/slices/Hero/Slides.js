import React, {useEffect} from 'preact/compat'
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Typer from './Typer'
import Helpers from '../../utils/Helpers'
import GlobalStyles from '../../utils/GlobalStyles'
import { ReactComponent as SVGThreePt } from '../../svg/threepoint-logo.svg'

const white = new Helpers('white')
const yellow = new Helpers('yellow')
const center = new GlobalStyles()
const hideThis = new GlobalStyles()

let bplarge = new Helpers('large')

const slide = css`
	${center.centerThis()};
	width: 100%;

	h1 {
		font-family: 'Axis', Helvetica, Arial, sans-seriff;
		font-size: 10vw;
		font-weight: 400;

		${bplarge.respondTo()} {
			font-size: 8vw;
		}
	}

	svg {
		width: 100%;
	}

	.cls-1 {
		fill: rgb(${white.defaultColors()});
	}
	
	.cls-2 {
		fill: rgb(${yellow.defaultColors()});
	}
`

const ScreenReaderText = css`${hideThis.screenReaderText()}`

const Slides = () => {

	const Slides = styled.div`
		position: relative;
		width: 100%;
	`

	useEffect(() => {
		Typer()
	}, [])

	return (
		<Slides>
			<div css={slide} className="slide" id="slide-1">
				<h1>Convergent</h1>
			</div>
			<div css={slide} className="slide" id="slide-2">
				<p css={ScreenReaderText}>ThreePoint Collective is a Multi-dimensional brand strategy, design, and product studio.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="145.978 163.771 1232.324 200.706">
					<clipPath id="white">
						<path class="cls-1" d="M188.2,176.4H173.74v31.68h-10V176.4H149.32v-9.12H188.2Z"/>
						<path class="cls-1" d="M231.1,208.08h-9.9V192.24H203.26v15.84h-9.84v-40.8h9.84v15.84H221.2V167.28h9.9Z"/>
						<path class="cls-1" d="M273,182.56c0,5.88-2.88,10.86-7.26,13.2l8.4,12.3H261.88l-6.12-10.14h-7.2v10.16h-9.84v-40.8h19.74C266.74,167.28,273,173.7,273,182.56Zm-24.42-6.16v12.42H257a6.21,6.21,0,0,0,.06-12.42Z"/>
						<path class="cls-1" d="M310.9,167.28v9.12H289.48v7h17.84v8.52H289.48v7H310.9V208H279.64V167.28Z"/>
						<path class="cls-1" d="M348.64,167.28v9.12H327.22v7H345.1v8.52H327.22v7h21.42V208H317.38V167.28Z"/>
						<path class="cls-1" d="M389.14,183c0,8-5.11,15.84-15.54,15.84h-8.88v9.24h-9.9v-40.8h18.84C384.1,167.28,389.14,175.08,389.14,183Zm-24.42-6.6v13.38h7.8c4,0,6.66-2.34,6.66-6.78s-2.7-6.54-6.66-6.6Z"/>
						<path class="cls-1" d="M434.67,187.68a21.06,21.06,0,1,1-21.06-21.12A21.06,21.06,0,0,1,434.67,187.68Zm-33.11,0a12,12,0,1,0,12.06-11.94h0A12,12,0,0,0,401.56,187.68Z"/>
						<path class="cls-1" d="M449.49,208.08h-9.84v-40.8h9.84Z"/>
						<path class="cls-1" d="M497,208.08h-9.9l-20.64-25v25h-9.89v-40.8h9.89l20.64,24.9v-24.9H497Z"/>
						<path class="cls-1" d="M540.51,176.4H526.05v31.68h-10V176.4H501.63v-9.12h38.88Z"/>
						<path class="cls-1" d="M597.63,198.18a21.86,21.86,0,0,1-19.08,10.62c-12.78,0-22.08-9.36-22.08-21.42,0-11.34,9.3-20.82,22.08-20.82,8.7,0,15.54,4.08,19.2,10.2l-8.34,4.86c-1.92-3.72-5.7-6.18-10.86-6.18a11.69,11.69,0,0,0-12.12,11.23c0,.24,0,.48,0,.71a12,12,0,0,0,11.82,12.18h.3a11.85,11.85,0,0,0,10.77-6.18Z"/>
						<path class="cls-1" d="M641,187.68A21.06,21.06,0,1,1,620,166.56,21.06,21.06,0,0,1,641,187.68Zm-33.12,0A12,12,0,1,0,620,175.74a12,12,0,0,0-12.06,11.94Z"/>
						<path class="cls-1" d="M655.83,199h21.42v9.12H646v-40.8h9.84Z"/>
						<path class="cls-1" d="M692.61,199H714v9.12H682.77v-40.8h9.84Z"/>
						<path class="cls-1" d="M750.81,167.28v9.12H729.39v7h17.93v8.52H729.39v7h21.42V208H719.55V167.28Z"/>
						<path class="cls-1" d="M795,198.18a21.86,21.86,0,0,1-19.08,10.62c-12.78,0-22.08-9.36-22.08-21.42,0-11.34,9.3-20.82,22.08-20.82,8.7,0,15.54,4.08,19.2,10.2l-8.34,4.86c-1.92-3.72-5.7-6.18-10.86-6.18a11.69,11.69,0,0,0-12.12,11.23c0,.24,0,.48,0,.71a12,12,0,0,0,11.82,12.18h.3a11.85,11.85,0,0,0,10.74-6.18Z"/>
						<path class="cls-1" d="M836.55,176.4H822.09v31.68h-10V176.4H797.67v-9.12h38.88Z"/>
						<path class="cls-1" d="M851.61,208.08h-9.84v-40.8h9.84Z"/>
						<path class="cls-1" d="M885.57,208.08h-10.8l-18.06-40.8h10.86l12.66,29.16,12.6-29.16h10.86Z"/>
						<path class="cls-1" d="M940,167.28v9.12H918.57v7h17.88v8.52H918.57v7H940V208H908.73V167.28Z"/>
						<path class="cls-1" d="M969,208.08h-9.84v-40.8H969Z"/>
						<path class="cls-1" d="M1008.32,180.18h-9.78c0-2-2.4-4.8-6.6-4.8-2.94,0-6.54,1.32-6.54,3.66,0,2,2.7,2.76,8.46,4.26,6.37,1.68,15.46,3.84,15.46,12.84,0,7.8-6.84,12.66-16.38,12.66-12.78,0-18.12-8.64-18.12-15h9.78s.78,6.48,8.88,6.48c4.38,0,6-1.86,6-3.6,0-2.58-3.42-3.48-7.2-4.38-6.15-1.44-16.89-3.74-16.89-12.74,0-7.44,7.32-13,16.62-13C1002.63,166.56,1008.32,173.82,1008.32,180.18Z"/>
						<path class="cls-1" d="M1058.12,201.72h-19.67l-2.7,6.36h-10.43l17.45-40.8h11l17.52,40.8h-10.52Zm-3.42-8-6.38-15.28-6.48,15.24Z"/>
						<path class="cls-1" d="M202,280.08h-9.9V259.26l-9.78,20.82h-11l-9.76-20.82v20.82h-9.84v-40.8h10.92l14.22,29.94L191,239.28h11Z"/>
						<path class="cls-1" d="M246.88,259.14c0,13.5-8.52,21.66-19.92,21.66-11.58,0-19.44-8.16-19.44-21.66V239.28h9.8v19.86c0,7.86,3.36,12.54,9.6,12.54s10-4.68,10-12.54V239.28h10Z"/>
						<path class="cls-1" d="M262.32,271h21.4v9.12H252.46v-40.8h9.86Z"/>
						<path class="cls-1" d="M317.32,248.4H302.86v31.68h-10V248.4H278.44v-9.12h38.88Z"/>
						<path class="cls-1" d="M332.38,280.08h-9.84v-40.8h9.84Z"/>
						<path class="cls-1" d="M360.4,264.18H338.26v-9.12H360.4Z"/>
						<path class="cls-1" d="M405.88,259.62c0,11.88-8.82,20.46-21.54,20.46h-18V239.34l18-.06C397.78,239.22,405.88,247.86,405.88,259.62ZM376.12,271h8.2c6.84,0,11.58-4.5,11.58-11.34,0-7.32-4.62-11.22-11.58-11.22h-8.2Z"/>
						<path class="cls-1" d="M421.12,280.08h-9.8v-40.8h9.84Z"/>
						<path class="cls-1" d="M479,280.08h-9.9V259.26l-9.79,20.82h-11l-9.74-20.82v20.82h-9.84v-40.8h10.92l14.21,29.94L468,239.28h11Z"/>
						<path class="cls-1" d="M517.83,239.28v9.12H496.42v7h17.9v8.52h-17.9v7h21.41V280H486.58V239.28Z"/>
						<path class="cls-1" d="M564.15,280.08h-9.9l-20.64-25v25h-9.89v-40.8h9.89l20.64,24.9v-24.9h9.9Z"/>
						<path class="cls-1" d="M602.85,252.18h-9.78c0-2-2.4-4.8-6.6-4.8-2.94,0-6.54,1.32-6.54,3.66,0,2,2.7,2.76,8.46,4.26,6.42,1.68,15.48,3.84,15.48,12.84,0,7.8-6.84,12.66-16.38,12.66-12.78,0-18.12-8.64-18.12-15h9.78s.78,6.48,8.88,6.48c4.38,0,6-1.86,6-3.6,0-2.58-3.42-3.48-7.2-4.38-6.12-1.44-16.86-3.74-16.86-12.74,0-7.44,7.32-13,16.62-13C597.21,238.56,602.85,245.82,602.85,252.18Z"/>
						<path class="cls-1" d="M619.41,280.08h-9.84v-40.8h9.84Z"/>
						<path class="cls-1" d="M666.51,259.68a21.06,21.06,0,1,1-21.06-21.12A21.06,21.06,0,0,1,666.51,259.68Zm-33.12,0a12,12,0,1,0,12.06-11.94,12,12,0,0,0-12.06,11.94Z"/>
						<path class="cls-1" d="M711.32,280.08h-9.9l-20.64-25v25h-9.9v-40.8h9.9l20.64,24.9v-24.9h9.9Z"/>
						<path class="cls-1" d="M748.83,273.72H729.15l-2.7,6.36H716l17.46-40.8h11L762,280.08h-10.5Zm-3.42-8-6.36-15.24-6.48,15.24Z"/>
						<path class="cls-1" d="M777,271h21.42v9.12H767.13v-40.8H777Z"/>
						<path class="cls-1" d="M440.13,345.72H420.46l-2.7,6.36H407.32l17.46-40.8h11l17.54,40.8H442.78Zm-3.42-8-6.39-15.28-6.48,15.24Z"/>
						<path class="cls-1" d="M498.32,352.08h-9.9l-20.63-25v25h-9.9v-40.8h9.9l20.63,24.9v-24.9h9.9Z"/>
						<path class="cls-1" d="M545,331.62c0,11.88-8.82,20.46-21.54,20.46H505.32V311.34l18.06-.06C536.85,311.22,545,319.86,545,331.62ZM515.19,343h8.22c6.84,0,11.58-4.5,11.58-11.34,0-7.32-4.62-11.22-11.58-11.22h-8.22Z"/>
						<path class="cls-1" d="M905.55,324.18h-9.78c0-2-2.4-4.8-6.6-4.8-2.94,0-6.54,1.32-6.54,3.66,0,2,2.7,2.76,8.46,4.26,6.42,1.68,15.48,3.84,15.48,12.84,0,7.8-6.84,12.66-16.38,12.66-12.78,0-18.12-8.64-18.12-15h9.78s.78,6.48,8.88,6.48c4.38,0,6-1.86,6-3.6,0-2.58-3.42-3.48-7.2-4.38-6.12-1.44-16.86-3.72-16.86-12.78,0-7.44,7.32-13,16.62-13C899.91,310.56,905.55,317.82,905.55,324.18Z"/>
						<path class="cls-1" d="M947,320.4H932.49v31.68h-10V320.4H908.07v-9.12H947Z"/>
						<path class="cls-1" d="M989.49,331.14c0,13.5-8.52,21.66-19.92,21.66-11.58,0-19.44-8.16-19.44-21.66V311.28H960v19.86c0,7.86,3.36,12.54,9.6,12.54s10-4.68,10-12.54V311.28h10Z"/>
						<path class="cls-1" d="M1034.67,331.62c0,11.88-8.82,20.46-21.54,20.46H995.07V311.34l18.06-.06C1026.57,311.22,1034.67,319.86,1034.67,331.62ZM1004.91,343h8.22c6.84,0,11.58-4.5,11.58-11.34,0-7.32-4.62-11.22-11.58-11.22h-8.22Z"/>
						<path class="cls-1" d="M1049.91,352.08h-9.84v-40.8h9.84Z"/>
						<path class="cls-1" d="M1097,331.68A21.06,21.06,0,1,1,1076,310.56,21.06,21.06,0,0,1,1097,331.68Zm-33.12,0A12,12,0,1,0,1076,319.74a12,12,0,0,0-12.06,11.94Z"/>
						<path class="cls-1" d="M1109.07,347a5.94,5.94,0,0,1-6,5.76,5.83,5.83,0,0,1-5.76-5.76,5.94,5.94,0,0,1,5.76-6A6,6,0,0,1,1109.07,347Z"/>`
					</clipPath>
					<clipPath id="brandstrategy">
						<path class="cls-2" d="M848.92,268.28c0,6.66-4.26,11.88-15.42,11.88H813.4v-40.8h17.69c11.82,0,15.54,4.68,15.54,11.22a10.5,10.5,0,0,1-3.84,7.8A10.61,10.61,0,0,1,848.92,268.28Zm-11.64-16.44c0-2.76-1.8-4.08-5.58-4.08h-8.46v8.52h8.46C836,256.28,837.28,255,837.28,251.84Zm-4.92,11.94h-9.12v7.92h9.12c4,0,5.94-1.34,5.94-4C838.3,264.74,836.26,263.78,832.36,263.78Z"/>
						<path class="cls-2" d="M888.58,254.64c0,5.88-2.88,10.86-7.26,13.2l8.4,12.3H877.48L871.36,270h-7.2v10.14h-9.84V239.36h19.77C882.34,239.36,888.58,245.78,888.58,254.64Zm-24.42-6.18V260.9h8.46a6.21,6.21,0,1,0,.06-12.42Z"/>
						<path class="cls-2" d="M925.66,273.8H906l-2.7,6.36H892.84l17.46-40.8h11l17.52,40.8h-10.5Zm-3.42-8-6.36-15.24L909.4,265.8Z"/>
						<path class="cls-2" d="M983.8,280.16h-9.9l-20.64-25v25h-9.9v-40.8h9.9l20.64,24.9v-24.9h9.9Z"/>
						<path class="cls-2" d="M1030.48,259.7c0,11.88-8.82,20.46-21.54,20.46H990.88V239.42l18.06-.06C1022.38,239.3,1030.48,247.94,1030.48,259.7ZM1000.72,271h8.22c6.84,0,11.58-4.5,11.58-11.34,0-7.32-4.62-11.22-11.58-11.22h-8.22Z"/>
						<path class="cls-2" d="M1080.22,252.26h-9.78c0-2-2.4-4.8-6.6-4.8-2.94,0-6.54,1.32-6.54,3.66,0,2,2.7,2.76,8.46,4.26,6.42,1.68,15.48,3.84,15.48,12.84,0,7.8-6.84,12.66-16.38,12.66-12.78,0-18.12-8.64-18.12-15h9.78s.78,6.48,8.88,6.48c4.38,0,6-1.86,6-3.6,0-2.58-3.42-3.48-7.2-4.38-6.11-1.44-16.86-3.74-16.86-12.74,0-7.44,7.32-13,16.62-13C1074.58,238.64,1080.22,245.9,1080.22,252.26Z"/>
						<path class="cls-2" d="M1121.61,248.48h-14.45v31.68h-10V248.48h-14.42v-9.12h38.87Z"/>
						<path class="cls-2" d="M1161.09,254.64c0,5.88-2.88,10.86-7.26,13.2l8.4,12.3H1150L1143.88,270h-7.21v10.14h-9.83V239.36h19.73C1154.85,239.36,1161.09,245.78,1161.09,254.64Zm-24.42-6.18V260.9h8.42a6.21,6.21,0,1,0,.06-12.42Z"/>
						<path class="cls-2" d="M1198.17,273.8h-19.68l-2.7,6.36h-10.44l17.46-40.8h11l17.52,40.8h-10.5Zm-3.42-8-6.36-15.24-6.48,15.24Z"/>
						<path class="cls-2" d="M1245.15,248.48h-14.46v31.68h-10V248.48h-14.46v-9.12h38.88Z"/>
						<path class="cls-2" d="M1281.63,239.36v9.12h-21.42v7h17.88V264h-17.88v7h21.42v9.12h-31.26V239.36Z"/>
						<path class="cls-2" d="M1325.09,247.58l-8.52,4.32c-2-2.58-5.22-4-9.9-4-7.14,0-12.12,5-12.12,11.76a12,12,0,0,0,11.94,12.06h.3c4.38,0,7.86-1.38,10-3.42v-4h-12.42v-7.54h21.12v15.12a23.45,23.45,0,0,1-18.66,9c-13.5,0-22.2-10.14-22.2-21.12,0-11.34,9.3-21.12,22.14-21.12A22.4,22.4,0,0,1,1325.09,247.58Z"/>
						<path class="cls-2" d="M1353.15,264.74v15.42h-9.9V264.74l-17.4-25.38h11.34l11.1,16.68,10.92-16.68h11.46Z"/>
						<path class="cls-2" d="M1376.61,278.24,1366,289.46l-5.94-4.68,8.34-13Z"/>
					</clipPath>
					<clipPath id="design">
						<path class="cls-2" d="M191,332.29c0,11.88-8.82,20.46-21.54,20.46H151.37V312l18.06-.06C182.87,311.89,191,320.53,191,332.29Zm-29.76,11.34h8.22c6.84,0,11.58-4.5,11.58-11.34,0-7.32-4.62-11.22-11.58-11.22h-8.22Z"/>
						<path class="cls-2" d="M227.63,312v9.12H206.21v7h17.88v8.52H206.21v7h21.42v9.12H196.37v-40.8Z"/>
						<path class="cls-2" d="M265.73,324.85H256c0-2-2.4-4.8-6.6-4.8-2.94,0-6.54,1.32-6.54,3.66,0,2,2.7,2.76,8.46,4.26,6.42,1.68,15.48,3.84,15.48,12.84,0,7.8-6.84,12.66-16.38,12.66-12.78,0-18.12-8.64-18.12-15h9.78s.78,6.48,8.88,6.48c4.38,0,6-1.86,6-3.6,0-2.58-3.42-3.48-7.2-4.38-6.14-1.44-16.88-3.74-16.88-12.74,0-7.44,7.32-13,16.62-13C260.09,311.23,265.73,318.49,265.73,324.85Z"/>
						<path class="cls-2" d="M282.29,352.75h-9.84V312h9.84Z"/>
						<path class="cls-2" d="M328.37,320.17l-8.52,4.32c-2-2.58-5.22-4-9.9-4-7.14,0-12.12,5-12.12,11.76a12,12,0,0,0,11.93,12.06h.31c4.38,0,7.86-1.38,10-3.42v-4h-12.4v-7.56h21.12v15.12a23.46,23.46,0,0,1-18.66,9c-13.5,0-22.2-10.14-22.2-21.12,0-11.34,9.3-21.12,22.14-21.12A22.42,22.42,0,0,1,328.37,320.17Z"/>
						<path class="cls-2" d="M374.57,352.75h-9.9l-20.64-25v25h-9.9V312H344l20.64,24.9V312h9.9Z"/>
						<path class="cls-2" d="M392.87,350.83l-10.62,11.22-5.94-4.68,8.34-13Z"/>
					</clipPath>
					<clipPath id="product">
						<path class="cls-2" d="M594,326.64c0,8-5.1,15.84-15.54,15.84h-8.88v9.24h-9.9v-40.8h18.84C588.92,310.92,594,318.72,594,326.64ZM569.54,320v13.38h7.8c4,0,6.66-2.34,6.66-6.78s-2.7-6.54-6.66-6.6Z"/>
						<path class="cls-2" d="M634.28,326.2c0,5.88-2.88,10.86-7.26,13.2l8.4,12.3H623.19l-6.12-10.14h-7.2V351.7H600V310.9h19.74C628,310.92,634.28,317.34,634.28,326.2ZM609.86,320v12.42h8.46a6.21,6.21,0,0,0,.06-12.42h-8.52Z"/>
						<path class="cls-2" d="M679.19,331.32a21.06,21.06,0,1,1-21-21.12A21,21,0,0,1,679.19,331.32Zm-33.12,0a12,12,0,1,0,12.12-11.94,12,12,0,0,0-12.12,11.94v0Z"/>
						<path class="cls-2" d="M723.8,331.26c0,11.88-8.82,20.46-21.54,20.46H684.19V311l18.06-.06C715.7,310.86,723.8,319.5,723.8,331.26ZM694,342.6h8.22c6.84,0,11.58-4.5,11.58-11.34,0-7.32-4.62-11.22-11.58-11.22H694Z"/>
						<path class="cls-2" d="M766.52,330.78c0,13.5-8.52,21.66-19.92,21.66-11.58,0-19.44-8.16-19.44-21.66V310.92H737v19.86c0,7.86,3.36,12.54,9.6,12.54s10-4.68,10-12.54V310.92h10Z"/>
						<path class="cls-2" d="M811.28,341.82a21.85,21.85,0,0,1-19.09,10.62c-12.78,0-22.08-9.36-22.08-21.42,0-11.34,9.3-20.82,22.08-20.82,8.7,0,15.54,4.08,19.2,10.2l-8.34,4.86c-1.92-3.72-5.7-6.18-10.86-6.18a11.69,11.69,0,0,0-12.11,11.23c0,.24,0,.48,0,.71a12,12,0,0,0,11.82,12.18h.3A11.83,11.83,0,0,0,802.93,337Z"/>
						<path class="cls-2" d="M852.86,320H838.4v31.68h-10V320H814v-9.12h38.88Z"/>
					</clipPath>

					<g id="bubbleswhite" className="bubbles" clip-path="url(#white)">
						<path class="cls-1" d="M1060.57,386.16c43.46,36.19,128.83,6.71,159.55-50.59s-30.48-124-58.31-134.87-7.65,71.63-44,109.71C1083.93,345.9,984.81,323.09,1060.57,386.16Z"/>
						<path class="cls-1" d="M40,107.74C-14.66,130.1-12,208.85,40,253.44s146.33,18.52,168,0S226.31,141,208,125.32,135.37,68.8,40,107.74Z"/>
						<path class="cls-1" d="M671.68,152.08c-57.1-17.29-120.32,40-120.32,103S639.52,356.81,670.1,356.81s-28-67.84-13.56-115.39C670.05,197,771.24,182.3,671.68,152.08Z"/>
						<path class="cls-1" d="M946,546.72c48.93,30.59,90.9-76.12,65.33-135.28s-118-95.84-166.42-99.26c-69.46-4.89-90.57,49.24-81.58,70.07S882.81,507.16,946,546.72Z"/>
						<path class="cls-1" d="M886.08,156.48c-37.64.62-11.54,66.94,27.11,87.94s100.46,9.39,125.89-4.53c36.49-20,23.17-53.52,9.57-60.93S934.72,155.7,886.08,156.48Z"/>
						<path class="cls-1" d="M328.27,328.24c-54.7,22.35-52.06,101.11,0,145.7s146.33,18.52,168,0,18.31-112.44,0-128.12S423.59,289.29,328.27,328.24Z"/>
						<path class="cls-1" d="M380,16.35C325.29,38.7,327.93,117.46,380,162s146.33,18.53,168,0,18.32-112.43,0-128.11S475.32-22.6,380,16.35Z"/>
						<path class="cls-1" d="M243.81,353.64c26.1,46.85,118.06,44.59,170.12,0s21.63-125.32,0-143.84-36.2,64.92-85.71,89.79C282,322.85,198.34,272,243.81,353.64Z"/>
						<path class="cls-1" d="M376.39,226c7.55,51.46,108,29.93,160-14.66s37.88-60.6,16.25-79.16-52.44.24-101.95,25.11C404.51,180.61,368.31,171,376.39,226Z"/>
						<path class="cls-1" d="M203.24,280.4c-60.09,6.47-35,92.47,17.11,137.05s70.76,32.44,92.44,13.92-.29-44.92-29.32-87.32C256.26,304.44,267.51,273.49,203.24,280.4Z"/>
						<path class="cls-1" d="M386.53,244.05c50.48-28.65-45.18-48-118.83-48s-152.52,10-173,47.71c-29.47,54.1,22.5,89.83,48.41,89.83S321.25,281.1,386.53,244.05Z"/>
						<path class="cls-1" d="M460.27,297.73c50.47-28.65-45.18-48-118.83-48s-152.52,10-173,47.72c-29.47,54.09,22.5,89.83,48.41,89.83S395,334.79,460.27,297.73Z"/>
						<path class="cls-1" d="M680.29,300.62c50.47-28.66-45.19-48-118.83-48s-152.53,10-173,47.72c-29.47,54.09,22.49,89.83,48.4,89.83S615,337.67,680.29,300.62Z"/>
						<path class="cls-1" d="M311.16,258.21c33.45,43.23,116.09-44.38,116.09-107.45S355.43,25.82,311.4,8.2C248.23-17,206.51,27.46,206.51,49.65S267.89,202.31,311.16,258.21Z"/>
						<path class="cls-1" d="M122.53,515.52C156,558.74,238.62,471.14,238.62,408.07S166.8,283.12,122.82,265.54C59.66,240.3,17.93,284.81,17.93,307S79.27,459.61,122.53,515.52Z"/>
						<path class="cls-1" d="M173.24,86.42C137.67,75.79,135.32,145.74,163,177s90.42,38.65,119.88,33.18c42.3-7.87,43.41-43.31,33.65-54.3S219.2,100.12,173.24,86.42Z"/>
						<path class="cls-1" d="M1018.8,202.55c20.24-48.91-46.68-103-120.32-103S779.75,175,779.75,201.19s79.84,90.62,105.8,90.62S983.51,287.85,1018.8,202.55Z"/>
						<path class="cls-1" d="M632.94,221.2c20.24-48.91-46.68-103-120.32-103s-118.73,75.5-118.73,101.68,79.84,90.66,105.75,90.66S597.66,306.5,632.94,221.2Z"/>
						<path class="cls-1" d="M760.85,179.33c37.16-41-51.62-86.53-125.22-86.53s-76.86,19.92-76.86,46.11,37.25,31.61,92.82,44C703.46,194.44,721.1,223.14,760.85,179.33Z"/>
						<path class="cls-1" d="M661.25,316.05c-12,50.85,71.53,6.55,123.59-38s99.55-99.5,83-138.57c-23.8-56.11-90-49.9-108.35-34.21S676.78,250.31,661.25,316.05Z"/>
						<path class="cls-1" d="M564.78,322.72c-12,50.85,71.52,6.55,123.58-38s99.56-99.46,83-138.57C747.54,90,681.3,96.21,663,111.9S580.35,257,564.78,322.72Z"/>
						<path class="cls-1" d="M455.66,512.26c-12,50.85,71.52,6.55,123.58-38s99.56-99.46,83-138.57c-23.79-56.07-90-49.9-108.39-34.21S471.23,446.52,455.66,512.26Z"/>
						<path class="cls-1" d="M702.83,260.35c-59.36-10.29-45.47,101.69,6.64,146.28s154,44.87,199.58,30.62c65.48-20.37,58.26-77.1,40-92.83S779.6,273.69,702.83,260.35Z"/>
						<path class="cls-1" d="M942.22,298.31c33.89-14-22.16-64.92-67.54-70.23s-95.85,27.42-112.19,49.15c-23.41,31.17,5,56.9,21,58.79S898.43,316.47,942.22,298.31Z"/>
						<path class="cls-1" d="M769.79,216.1c-42.25,37.21-7.83,110.33,59.08,136.64s144.74-26.11,157.48-49.94S958,191.93,934.43,182.63,843.44,151.26,769.79,216.1Z"/>
						<path class="cls-1" d="M992.79,329.52c-53.74,23.92,4.66,97.11,71.58,123.42s79.51,9.39,92.29-14.45-18.46-42-62.87-73.16C1052.3,336.31,1050.33,303.91,992.79,329.52Z"/>
						<path class="cls-1" d="M1150,240.92c35.72-41.91-61.82-31.53-130.85-9.67s-139,54.75-143,96.21C870.45,387,933.67,405,958,397.32S1103.79,295.06,1150,240.92Z"/>
						<path class="cls-1" d="M1240.88,269.37c35.72-41.91-61.82-31.54-130.85-9.68s-139,54.76-143,96.22c-5.72,59.48,57.5,77.56,81.82,69.86S1194.69,323.55,1240.88,269.37Z"/>
						<path class="cls-1" d="M1085,276.61c48.93,30.59,90.9-76.12,65.33-135.28S1032.35,45.54,984,42.12c-69.42-4.9-90.52,49.19-81.53,70S1021.78,237.05,1085,276.61Z"/>
					</g>
					<g id="bubblesbrandstrategy" className="bubbles" clip-path="url(#brandstrategy)">
						<path class="cls-2" d="M1062.45,386.26c43.46,36.19,128.83,6.71,159.55-50.6s-30.48-124-58.31-134.87-7.64,71.64-44,109.72C1085.82,346,986.7,323.19,1062.45,386.26Z"/>
						<path class="cls-2" d="M888,156.58c-37.64.62-11.54,66.94,27.11,87.94S1015.54,253.9,1041,240c36.48-20,23.17-53.52,9.56-60.93S936.61,155.8,888,156.58Z"/>
						<path class="cls-2" d="M1020.68,202.65c20.24-48.91-46.68-103-120.32-103S781.63,175.11,781.63,201.29s79.84,90.61,105.8,90.61S985.4,288,1020.68,202.65Z"/>
						<path class="cls-2" d="M786.72,278.11c52.06-44.59,99.56-99.5,83-138.57-23.79-56.12-90-49.9-108.35-34.22"/>
						<path class="cls-2" d="M944.11,298.41c33.88-14-22.16-64.93-67.54-70.24s-95.85,27.42-112.2,49.16c-23.41,31.16,5,56.89,21,58.79S900.31,316.56,944.11,298.41Z"/>
						<path class="cls-2" d="M771.68,216.19c-42.26,37.22-7.84,110.33,59.08,136.64s144.74-26.1,157.47-49.94S959.87,192,936.32,182.72,845.32,151.35,771.68,216.19Z"/>
						<path class="cls-2" d="M1276.49,248.05c-42.25,37.22-7.84,110.34,59.08,136.64s144.74-26.1,157.48-49.93-28.37-110.87-51.92-120.18S1350.13,183.17,1276.49,248.05Z"/>
						<path class="cls-2" d="M1135,227.14c27.93,46,113.4-4,144.11-61.3s11-68.09-16.87-79-49.08,15.81-85.42,53.85C1143,176.18,1105.19,177.91,1135,227.14Z"/>
						<path class="cls-2" d="M1151.86,241c35.72-41.91-61.81-31.54-130.84-9.68s-139,54.76-143,96.21c-5.72,59.49,57.49,77.56,81.81,69.87S1105.67,295.15,1151.86,241Z"/>
						<path class="cls-2" d="M1242.76,269.46c35.72-41.91-61.81-31.53-130.84-9.67S973,314.54,969,356c-5.72,59.49,57.49,77.56,81.81,69.86S1196.57,323.64,1242.76,269.46Z"/>
						<path class="cls-2" d="M1441.58,170.29c35.72-41.91-61.82-31.54-130.84-9.68s-139,54.76-143,96.22c-5.72,59.48,57.49,77.56,81.81,69.86S1395.39,224.43,1441.58,170.29Z"/>
						<path class="cls-2" d="M1086.92,276.71c48.94,30.59,90.9-76.12,65.33-135.28s-118-95.8-166.42-99.22c-69.41-4.9-90.52,49.2-81.53,70S1023.66,237.15,1086.92,276.71Z"/>
					</g>
					<g id="bubblesdesign" className="bubbles" clip-path="url(#design)">
						<path class="cls-2" d="M330.15,328.34c-54.7,22.35-52.06,101.11,0,145.69s146.33,18.53,168,0,18.32-112.43,0-128.12S425.48,289.39,330.15,328.34Z"/>
						<path class="cls-2" d="M245.7,353.74c26.1,46.85,118.06,44.58,170.12,0s21.63-125.32,0-143.85-36.2,64.93-85.71,89.79C283.91,322.94,200.22,272.1,245.7,353.74Z"/>
						<path class="cls-2" d="M205.12,280.5C145,287,170.18,373,222.24,417.55S293,450,314.68,431.46s-.29-44.91-29.33-87.32C258.15,304.54,269.39,273.58,205.12,280.5Z"/>
						<path class="cls-2" d="M388.42,244.15c50.47-28.66-45.19-48-118.83-48s-152.53,10-173.06,47.72C67.07,298,119,333.73,144.94,333.73S323.14,281.2,388.42,244.15Z"/>
						<path class="cls-2" d="M462.15,297.83c50.48-28.65-45.18-48-118.82-48s-152.53,10-173.06,47.71c-29.46,54.1,22.5,89.83,48.41,89.83S396.88,334.88,462.15,297.83Z"/>
						<path class="cls-2" d="M682.17,300.71c50.48-28.65-45.18-48-118.83-48s-152.52,10-173,47.71c-29.47,54.1,22.5,89.83,48.41,89.83S616.89,337.76,682.17,300.71Z"/>
						<path class="cls-2" d="M124.41,515.61c33.46,43.23,116.09-44.38,116.09-107.45s-71.81-125-115.8-142.52C61.54,240.4,19.81,284.9,19.81,307.09S81.15,459.7,124.41,515.61Z"/>
					</g>
					<g id="bubblesproduct" className="bubbles" clip-path="url(#product)">
						<path class="cls-2" d="M673.57,152.17c-57.11-17.29-120.32,40-120.32,103.05S641.41,356.91,672,356.91s-28-67.85-13.56-115.4C671.93,197.13,773.12,182.39,673.57,152.17Z"/>
						<path class="cls-2" d="M682.17,300.71c50.48-28.65-45.18-48-118.83-48s-152.52,10-173,47.71c-29.47,54.1,22.5,89.83,48.41,89.83S616.89,337.76,682.17,300.71Z"/>
						<path class="cls-2" d="M685.15,322.7c-47.83-31.83-101,44.21-101,107.24s23.26,65.79,53.89,65.79,36.91-31.91,51.33-79.5C702.79,371.85,736.35,356.78,685.15,322.7Z"/>
						<path class="cls-2" d="M663.14,316.15c-12,50.84,71.52,6.55,123.58-38s99.56-99.5,83-138.57c-23.79-56.12-90-49.9-108.35-34.22S678.66,250.4,663.14,316.15Z"/>
						<path class="cls-2" d="M566.66,322.82c-12,50.84,71.53,6.54,123.59-38s99.55-99.46,83-138.57c-23.8-56.12-90-49.9-108.35-34.22S582.23,257.07,566.66,322.82Z"/>
						<path class="cls-2" d="M457.54,512.36c-12,50.84,71.53,6.55,123.59-38s99.55-99.46,83-138.57c-23.8-56.08-90-49.9-108.4-34.22S473.11,446.61,457.54,512.36Z"/>
						<path class="cls-2" d="M704.72,260.45c-59.37-10.29-45.48,101.68,6.63,146.27s154,44.87,199.59,30.63c65.47-20.38,58.26-77.11,39.94-92.84S781.48,273.79,704.72,260.45Z"/>
						<path class="cls-2" d="M944.11,298.41c33.88-14-22.16-64.93-67.54-70.24s-95.85,27.42-112.2,49.16c-23.41,31.16,5,56.89,21,58.79S900.31,316.56,944.11,298.41Z"/>
					</g>
				</svg>
			</div>
			<div css={slide} className="slide" id="slide-3">
				<div className="logo-container">
					<SVGThreePt />
					<h1>ThreePoint</h1>
				</div>
			</div>
		</Slides>
	)
}

export default Slides