// truncated to the day, America/Chicago time
// only includes moons through end of 2024 (brown lunation number 1262)
moons = [
19585, 19593, 19599, 19606,
19614, 19622, 19629, 19636,
19644, 19651, 19658, 19666,
19674, 19681, 19688, 19695,
19703, 19710, 19717, 19725,
19733, 19739, 19747, 19755,
19762, 19769, 19777, 19785,
19792, 19798, 19807, 19814,
19821, 19828, 19836, 19844,
19850, 19858, 19866, 19873,
19880, 19888, 19895, 19902,
19909, 19917, 19925, 19931,
19939, 19947, 19954, 19961,
19968, 19977, 19983, 19990,
19998, 20006, 20013, 20020,
20028, 20035, 20042, 20049,
20058, 20065, 20072, 20079,
20087, 20094, 20101, 20109
]
icons = ['\u{1f311}', '\u{1f313}', '\u{1f315}', '\u{1f317}']
icons_inverted = ['\u{1f315}', '\u{1f317}', '\u{1f311}', '\u{1f313}']

function getMoonsString(disable_emoji, inverted_icons) {
	today = Math.floor((Date.now() - 18e6) / 86.4e6)

	next_index = moons.findIndex((element) => element >= today)
	next_days = moons.slice(next_index, next_index + 4)

	str = ""
	for (let i = today; i < today + 30; i++) {
		j = next_days.indexOf(i) + 1
		if(j != 0) {
			icon = disable_emoji && inverted_icons ? icons_inverted[j%4] : icons[j%4]
			str = str.concat(icon)
			if(disable_emoji)
				str = str.concat('\ufe0e')
		}
		else str = str.concat('\u2500')
	}
	return str
}

document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById('decor-moons').innerHTML = getMoonsString(true, false)
})
