class Helpers {
	constructor(params) {
		this.params = params
	}

	toRem = size => {
		const baseSize = 16

		if (typeof this.params === 'number') {
			size = this.params
		}

		return `${size / baseSize}rem`
	}

	defaultColors = () => {
		const colorMap = [
			{'black': {'hex': '#000000'}},
			{'gray': {'hex': '#333333'}},
			{'white': {'hex': '#ffffff'}},
			{'yellow': {'hex': '#FFDC32'}},
			{'blue': {'hex': '#0A7DF3'}},
			{'green': {'hex': '#009D57'}},
			{'neumorphicBg': {'hex': '#e0e0e0'}},
			{'evenRows': {'hex': '#999999'}}
		]

		let convertThis = null

		colorMap.forEach((color) => {
			if (Object.keys(color)[0] === this.params) {
				convertThis = color[this.params].hex
				return false
			}
		})

		const hexToRgb = hex => {
			return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
				.substring(1).match(/.{2}/g)
				.map(x => parseInt(x, 16))
		}

		return hexToRgb(convertThis).toString()
	}

	ease = () => {
		const easings = [
			{'in-quad': {'cubicbezier': '0.550, 0.085, 0.680, 0.530'}},
			{'in-cubic': {'cubicbezier': '0.550, 0.055, 0.675, 0.190'}},
			{'in-quart': {'cubicbezier': '0.895, 0.030, 0.685, 0.220'}},
			{'in-quint': {'cubicbezier': '0.755, 0.050, 0.855, 0.060'}},
			{'in-sine': {'cubicbezier': '0.470, 0, 0.745, 0.715'}},
			{'in-expo': {'cubicbezier': '0.950, 0.050, 0.795, 0.035'}},
			{'in-circ': {'cubicbezier': '0.600, 0.040, 0.980, 0.335'}},
			{'in-back': {'cubicbezier': '0.600, -0.280, 0.735, 0.045'}},
			{'out-quad': {'cubicbezier': '0.250, 0.460, 0.450, 0.940'}},
			{'out-cubic': {'cubicbezier': '0.215, 0.610, 0.355, 1'}},
			{'out-quart': {'cubicbezier': '0.165, 0.840, 0.440, 1'}},
			{'out-quint': {'cubicbezier': '0.230, 1, 0.320, 1'}},
			{'out-sine': {'cubicbezier': '0.390, 0.575, 0.565, 1'}},
			{'out-expo': {'cubicbezier': '0.190, 1, 0.220, 1'}},
			{'out-circ': {'cubicbezier': '0.075, 0.820, 0.165, 1'}},
			{'out-back': {'cubicbezier': '0.175, 0.885, 0.320, 1.275'}},
			{'in-out-quad': {'cubicbezier': '0.455, 0.030, 0.515, 0.955'}},
			{'in-out-cubic': {'cubicbezier': '0.645, 0.045, 0.355, 1'}},
			{'in-out-quart': {'cubicbezier': '0.770, 0, 0.175, 1'}},
			{'in-out-quint': {'cubicbezier': '0.860, 0, 0.070, 1'}},
			{'in-out-sine': {'cubicbezier': '0.445, 0.050, 0.550, 0.950'}},
			{'in-out-expo': {'cubicbezier': '1, 0, 0, 1'}},
			{'in-out-circ': {'cubicbezier': '0.785, 0.135, 0.150, 0.860'}},
			{'in-out-back': {'cubicbezier': '0.680, -0.550, 0.265, 1.550'}}
		]

		let output = null

		easings.forEach((easing) => {
			if (Object.keys(easing)[0] === this.params) {
				output = easing[this.params].cubicbezier
				return false
			}
		})

		return output
	}

	respondTo = () => {
		const breakpoints = [
			{'small': {'size': this.toRem(600)}},
			{'medium': {'size': this.toRem(768)}},
			{'large': {'size': this.toRem(1024)}},
			{'xlarge': {'size': this.toRem(1280)}},
			{'epic': {'size': this.toRem(1400)}}
		]

		let output = null

		breakpoints.forEach((breakpoint) => {
			if (Object.keys(breakpoint)[0] === this.params) {
				output = `@media screen and (min-width: ${breakpoint[this.params].size})`
				return false
			}
		})

		return output
	}

	stringToHTML = () => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(this.params, 'text/html');
		return doc.body;
	}
}

export default Helpers