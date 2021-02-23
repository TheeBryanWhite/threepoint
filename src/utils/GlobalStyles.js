class GlobalStyles {
	constructor(params) {
		this.params = params
	}

	screenReaderText = () => {
		return `
			border: 0;
			clip: rect(1px, 1px, 1px, 1px);
			clip-path: inset(50%);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
			word-wrap: normal !important;
		`
	}

	centerThis = () => {
		return `
			left: 50%;
			position: absolute;
			top: 50%;
			transform: translate(-50%, -50%);
		`
	}
}

export default GlobalStyles