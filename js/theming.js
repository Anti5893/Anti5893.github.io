function set_theme(theme) {
	document.body.setAttribute('class', theme)
	localStorage.setItem('theme', theme)
}

document.addEventListener('DOMContentLoaded', (event) => {
	theme = localStorage.getItem('theme')
	if(!theme) theme = 'purple'
	set_theme(theme)
})
