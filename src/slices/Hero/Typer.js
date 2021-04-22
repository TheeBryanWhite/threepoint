const Typer = () => {
	const dataText = ['Convergent', 'Divergent', 'Intuitive', 'Fused', 'Dimensional']
	const hero = document.getElementById('hero')
	const slideOne = document.getElementById('slide-1')

	const typeWriter = (text, index, fnCallback) => {
		if (index < (text.length)) {
			slideOne.querySelector('h1').innerHTML = text.substring(0, index + 1) +'<span aria-hidden="true"></span>'

			setTimeout(function() {
				typeWriter(text, index + 1, fnCallback)
			}, 100)
		}
		else if (typeof fnCallback == 'function') {
			setTimeout(fnCallback, 350)
		}
	}
	const StartTextAnimation = index => {
		if (index < dataText.length) {
			typeWriter(dataText[index], 0, function(){
				StartTextAnimation(index + 1)
			})
		} else {
			hero.classList.add('reveal')
		}
	}
	// start the text animation
	StartTextAnimation(0)
}

export default Typer