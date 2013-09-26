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


var enabledIntervals = {
	second: [true,1],
	SECOND: [true,2],
	third: [true,3],
	THIRD: [true,4],
	Fourth: [true,5],
	Fifth: [true,7],
	sixth: [true,8],
	SIXTH: [true,9],
	seventh: [true,10],
	SEVENTH: [true,11],
	Octave: [true,12]
};

var size2KeyCode = function(size){
	if (size) === 1{
		return 81
	}
	else if (size) === 2{
		return 50
	}
	else if (size) === 3{
		return 87
	}
	else if (size) === 4{
		return 51
	}
	else if (size) === 5{
		return 52
	}
	else if (size) === 7{
		return 53
	}
	else if (size) === 8{
		return 84
	}
	else if (size) === 9{
		return 54
	}
	else if (size) === 10{
		return 89
	}
	else if (size) === 11{
		return 55
	}
	else if (size) === 12{
		return 56
	}

}

var definePossibilities = function(intervalsObject){
	possibilities = []
    for (var key in intervalsObject){
    	if (intervalsObject[key][0]===true){possibilities.push(intervalsObject[key][1])}
    }
	return possibilities
}


var pickNotes = function(possibilities){
	interval = possibilities[Math.floor(Math.random()*possibilities.length)]
	var pick = Math.floor(Math.random()*(22-interval));
	return [tones[pick],tones[pick+interval],interval]
}

var playNotes = function(notes){
	intervalID = setInterval(function(){
		notes[0].currentTime = 0;
		notes[0].play();
		setTimeout(function(){
			notes[1].currentTime = 0;
			notes[1].play();
		},250)
	},500)
	return {"intervalID" : intervalID, "intervalSize" : notes[2]}
}


$(document).ready(function(){

	trialInfo = playNotes(pickNotes(definePossibilities(enabledIntervals)))
	$(document).one('keydown',function(event){
		if (event.which === size2KeyCode(trialInfo["intervalSize"])){
			clearInterval(trialInfo["intervalID"])
		}
	

	})

})

















