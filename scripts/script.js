var tones = [
	new Audio('sounds/C1.wav'),
	new Audio('sounds/Db1.wav'),
	new Audio('sounds/D1.wav'),
	new Audio('sounds/Eb1.wav'),
	new Audio('sounds/E1.wav'),
	new Audio('sounds/F1.wav'),
	new Audio('sounds/Gb1.wav'),
	new Audio('sounds/G1.wav'),
	new Audio('sounds/Ab1.wav'),
	new Audio('sounds/A1.wav'),
	new Audio('sounds/Bb1.wav'),
	new Audio('sounds/B1.wav'),
	new Audio('sounds/C2.wav'),
	new Audio('sounds/Db2.wav'),
	new Audio('sounds/D2.wav'),
	new Audio('sounds/Eb2.wav'),
	new Audio('sounds/E2.wav'),
	new Audio('sounds/F2.wav'),
	new Audio('sounds/Gb2.wav'),
	new Audio('sounds/G2.wav'),
	new Audio('sounds/Ab2.wav'),
	new Audio('sounds/A2.wav'),
	new Audio('sounds/Bb2.wav')
];


var pickNotes = function(interval){
	var pick = Math.floor(Math.random()*(22-interval));
	return [tones[pick],tones[pick+interval]]
}

var enabledIntervals = {
	second: true,
	SECOND: true,
	third: true,
	THIRD: true,
	Fourth: true,
	Fifth: true,
	sixth: true,
	SIXTH: true,
	seventh: true,
	SEVENTH: true,
	Octave: true
};
